import { Resend } from "resend";
import { emptyBooking, validateBooking, type BookingFields } from "@/lib/booking";
import { eventTypes, site } from "@/lib/site-config";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fromUnknown(value: unknown): BookingFields {
  const base = emptyBooking();
  if (!value || typeof value !== "object") return base;
  const record = value as Record<string, unknown>;
  const text = (key: keyof BookingFields) =>
    typeof record[key] === "string" ? (record[key] as string) : "";
  return {
    name: text("name"),
    email: text("email"),
    phone: text("phone"),
    eventDate: text("eventDate"),
    location: text("location"),
    guests: text("guests"),
    eventType: text("eventType"),
    time: text("time"),
    message: text("message"),
    acknowledgment: record.acknowledgment === true || record.acknowledgment === "on",
    companyWebsite: text("companyWebsite"),
    startedAt: text("startedAt"),
    submissionId: text("submissionId"),
  };
}

async function readPayload(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return fromUnknown(await request.json());
  }
  const form = await request.formData();
  return fromUnknown(Object.fromEntries(form.entries()));
}

function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return json({ ok: false, errors: { form: "Request blocked." } }, 403);
      }
    } catch {
      return json({ ok: false, errors: { form: "Request blocked." } }, 403);
    }
  }

  let payload: BookingFields;
  try {
    payload = await readPayload(request);
  } catch {
    return json({ ok: false, errors: { form: "The form could not be read." } }, 400);
  }

  const { errors, spam, clean } = validateBooking(payload);
  if (spam) {
    return json({ ok: true, delivered: true });
  }
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, errors }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;
  if (!apiKey || !to) {
    return json({ ok: true, delivered: false, reason: "not_configured" });
  }

  const eventLabel =
    eventTypes.find((item) => item.id === clean.eventType)?.label ?? clean.eventType;
  const resend = new Resend(apiKey);
  const from = process.env.BOOKING_FROM_EMAIL ?? "Bella Ciao Pizza <onboarding@resend.dev>";
  const submissionId = payload.submissionId.replace(/[^\w-]/g, "").slice(0, 80) || "manual";
  const text = [
    `Name: ${clean.name}`,
    `Email: ${clean.email}`,
    `Phone: ${clean.phone}`,
    `Event date: ${clean.eventDate}`,
    `Location: ${clean.location}`,
    `Guests: ${clean.guests}`,
    `Event type: ${eventLabel}`,
    `Preferred time: ${clean.time || "Not given"}`,
    `Message: ${clean.message || "None"}`,
  ].join("\n");

  const { error } = await resend.emails.send(
    {
      from,
      to: [to],
      replyTo: clean.email,
      subject: `Event request from ${clean.name}`,
      text,
      html: `<pre>${escapeHtml(text)}</pre>`,
    },
    { idempotencyKey: `booking-request/${submissionId}` },
  );

  if (error) {
    console.error("Booking email failed", error.message);
    return json({ ok: true, delivered: false, reason: "send_failed" });
  }

  return json({ ok: true, delivered: true });
}

export function GET() {
  return json({ ok: false, errors: { form: `Use the booking form or call ${site.phoneDisplay}.` } }, 405);
}
