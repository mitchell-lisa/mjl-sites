"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const interests = [
  "Available Properties",
  "Development",
  "Management",
  "Marketing and Leasing",
  "Acquisitions and Disposition",
  "Montchanin Builders",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interest: ${interest}`,
      "",
      message,
      "",
      "(Sent from the sample Commonwealth redesign. Preview only.)",
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Inquiry: ${interest || "The Commonwealth Group"}`,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("ready");
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="interest">Interest</label>
          <select id="interest" name="interest" defaultValue="Leasing">
            {interests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="How can the team help?"
        />
      </div>
      <button type="submit" className="btn btn-navy w-full md:w-auto">
        Send message
      </button>
      {status === "ready" ? (
        <p className="text-sm leading-6 text-muted">
          Your email application should open addressed to {site.email}. If it
          does not, write directly to that address or call {site.phoneDisplay}.
        </p>
      ) : (
        <p className="text-sm leading-6 text-muted">
          This preview form opens a message to {site.email}. It does not store
          submissions.
        </p>
      )}
    </form>
  );
}
