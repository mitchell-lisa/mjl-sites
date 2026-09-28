import { eventTypes } from "@/lib/site-config";
import { todayInNewJersey } from "@/lib/events";

export const MIN_SUBMIT_MS = 3000;

export type BookingFields = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  location: string;
  guests: string;
  eventType: string;
  time: string;
  message: string;
  acknowledgment: boolean;
  companyWebsite: string;
  startedAt: string;
  submissionId: string;
};

export type FieldName =
  | "name"
  | "email"
  | "phone"
  | "eventDate"
  | "location"
  | "guests"
  | "eventType"
  | "acknowledgment"
  | "form";

export type FieldErrors = Partial<Record<FieldName, string>>;

const eventIds = new Set<string>(eventTypes.map((item) => item.id));

export function emptyBooking(): BookingFields {
  return {
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    guests: "",
    eventType: "",
    time: "",
    message: "",
    acknowledgment: false,
    companyWebsite: "",
    startedAt: "",
    submissionId: "",
  };
}

export function validateBooking(input: BookingFields, now = Date.now()) {
  const errors: FieldErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const eventDate = input.eventDate.trim();
  const location = input.location.trim();
  const guests = input.guests.trim();
  const eventType = input.eventType.trim();
  const time = input.time.trim();
  const message = input.message.trim();

  if (name.length < 2 || name.length > 120) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 180) {
    errors.email = "Enter a valid email.";
  }
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Enter a phone number.";
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(eventDate) || eventDate < todayInNewJersey()) {
    errors.eventDate = "Choose an event date.";
  }
  if (location.length < 3 || location.length > 160) {
    errors.location = "Enter a town or ZIP.";
  }
  if (!/^\d+$/.test(guests) || Number(guests) < 1 || Number(guests) > 5000) {
    errors.guests = "Enter the estimated number of guests.";
  }
  if (!eventIds.has(eventType)) errors.eventType = "Choose an event type.";
  if (time.length > 80) errors.form = "Keep the preferred time short.";
  if (message.length > 2000) errors.form = "Shorten the message and send it again.";
  if (!input.acknowledgment) {
    errors.acknowledgment = "Confirm that this request does not hold the date.";
  }

  const started = Number(input.startedAt);
  const tooFast = !Number.isFinite(started) || now - started < MIN_SUBMIT_MS;
  const tooOld = Number.isFinite(started) && now - started > 1000 * 60 * 60 * 12;
  const clockSkew = Number.isFinite(started) && started - now > 60_000;
  if (!input.companyWebsite && (tooFast || tooOld || clockSkew)) {
    errors.form = "Please wait a moment and send it again.";
  }

  return {
    errors,
    spam: input.companyWebsite.trim().length > 0,
    clean: {
      name,
      email,
      phone,
      eventDate,
      location,
      guests,
      eventType,
      time,
      message,
    },
  };
}
