"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  emptyBooking,
  validateBooking,
  type BookingFields,
  type FieldErrors,
} from "@/lib/booking";
import { eventTypes, site } from "@/lib/site-config";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; delivered: boolean }
  | { state: "error"; message: string };

export function BookingForm() {
  const [fields, setFields] = useState<BookingFields>(emptyBooking);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const headingRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(0);
  const submissionRef = useRef("");
  const formId = useId();

  useEffect(() => {
    startedRef.current = Date.now();
    submissionRef.current = crypto.randomUUID();
  }, []);

  useEffect(() => {
    if (status.state === "sent") headingRef.current?.focus();
    if (status.state === "error" || (status.state === "idle" && Object.keys(errors).length)) {
      errorRef.current?.focus();
    }
  }, [status, errors]);

  function update<K extends keyof BookingFields>(key: K, value: BookingFields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = {
      ...fields,
      startedAt: String(startedRef.current),
      submissionId: submissionRef.current,
    };
    const nextErrors = validateBooking(payload).errors;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ state: "idle" });
      return;
    }

    setStatus({ state: "sending" });
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        delivered?: boolean;
        errors?: FieldErrors;
      };
      if (result.errors && Object.keys(result.errors).length > 0) {
        setErrors(result.errors);
        setStatus({ state: "idle" });
        return;
      }
      if (!response.ok || !result.ok) {
        setStatus({
          state: "error",
          message: "The request did not go through. Call and we will take the date.",
        });
        return;
      }
      setStatus({ state: "sent", delivered: Boolean(result.delivered) });
    } catch {
      setStatus({
        state: "error",
        message: "The request did not go through. Call and we will take the date.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div className="border border-ink/15 bg-white px-5 py-8 sm:px-8" role="status">
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-4xl font-medium outline-none"
        >
          {status.delivered ? "Request received." : "Call to hold the date."}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">
          {status.delivered
            ? "Bella Ciao has your event note and will follow up. If the date is soon, call so it does not wait on an inbox."
            : "This site cannot email the request yet. Call or write, and have the date, the town, and the guest count ready."}
        </p>
        <p className="mt-6">
          <a href={site.phoneHref} className="font-display text-3xl text-ink">
            {site.phoneDisplay}
          </a>
        </p>
        <p className="mt-2">
          <a href={site.emailHref} className="underline decoration-gold decoration-2 underline-offset-4">
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  const errorItems = Object.entries(errors) as [keyof FieldErrors, string][];

  return (
    <form className="grid gap-5" onSubmit={onSubmit} noValidate>
      <h2 className="font-display text-3xl font-medium sm:text-4xl">Request Bella Ciao</h2>
      <p className="max-w-xl text-mute">
        Name, a way to reach you, the date, and the town. A person confirms the booking. This form does not hold the date by itself.
      </p>

      {errorItems.length > 0 ? (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="border border-tomato/40 bg-white px-4 py-3 text-sm text-tomato outline-none"
        >
          <p className="font-semibold">Check the form.</p>
          <ul className="mt-2 list-disc pl-5">
            {errorItems.map(([key, message]) => (
              <li key={key}>
                <a href={`#${formId}-${key === "form" ? "name" : key}`} className="underline">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {status.state === "error" ? (
        <p role="alert" className="text-sm text-tomato">
          {status.message}{" "}
          <a href={site.phoneHref} className="underline">
            {site.phoneDisplay}
          </a>
        </p>
      ) : null}

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={fields.companyWebsite}
            onChange={(event) => update("companyWebsite", event.target.value)}
          />
        </label>
      </div>

      <Field
        id={`${formId}-name`}
        label="Name"
        error={errors.name}
        value={fields.name}
        autoComplete="name"
        onChange={(value) => update("name", value)}
      />
      <Field
        id={`${formId}-email`}
        label="Email"
        type="email"
        error={errors.email}
        value={fields.email}
        autoComplete="email"
        onChange={(value) => update("email", value)}
      />
      <Field
        id={`${formId}-phone`}
        label="Phone"
        type="tel"
        error={errors.phone}
        value={fields.phone}
        autoComplete="tel"
        onChange={(value) => update("phone", value)}
      />
      <Field
        id={`${formId}-eventDate`}
        label="Event date"
        type="date"
        error={errors.eventDate}
        value={fields.eventDate}
        onChange={(value) => update("eventDate", value)}
      />
      <Field
        id={`${formId}-location`}
        label="Location or ZIP"
        error={errors.location}
        value={fields.location}
        autoComplete="postal-code"
        onChange={(value) => update("location", value)}
      />
      <Field
        id={`${formId}-guests`}
        label="Estimated guests"
        type="number"
        error={errors.guests}
        value={fields.guests}
        onChange={(value) => update("guests", value)}
      />
      <div className="field">
        <label htmlFor={`${formId}-eventType`} className="text-sm font-semibold">
          Event type
        </label>
        <select
          id={`${formId}-eventType`}
          name="eventType"
          value={fields.eventType}
          aria-invalid={errors.eventType ? true : undefined}
          aria-describedby={errors.eventType ? `${formId}-eventType-error` : undefined}
          onChange={(event) => update("eventType", event.target.value)}
        >
          <option value="">Choose one</option>
          {eventTypes.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        {errors.eventType ? (
          <p id={`${formId}-eventType-error`} className="text-sm text-tomato">
            {errors.eventType}
          </p>
        ) : null}
      </div>
      <Field
        id={`${formId}-time`}
        label="Preferred time (optional)"
        error={undefined}
        value={fields.time}
        onChange={(value) => update("time", value)}
      />
      <div className="field">
        <label htmlFor={`${formId}-message`} className="text-sm font-semibold">
          Message (optional)
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed">
          <input
            id={`${formId}-acknowledgment`}
            type="checkbox"
            className="mt-1 h-5 w-5"
            checked={fields.acknowledgment}
            aria-invalid={errors.acknowledgment ? true : undefined}
            onChange={(event) => update("acknowledgment", event.target.checked)}
          />
          <span>I understand this request does not hold the date until Bella Ciao confirms.</span>
        </label>
        {errors.acknowledgment ? (
          <p className="mt-2 text-sm text-tomato">{errors.acknowledgment}</p>
        ) : null}
      </div>
      <button type="submit" className="btn btn-dark w-full sm:w-auto" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending" : "Request Bella Ciao"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="field">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-tomato">
          {error}
        </p>
      ) : null}
    </div>
  );
}
