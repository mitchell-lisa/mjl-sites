import { events, type BellaEvent } from "@/data/events";

export function todayInNewJersey(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function splitEvents(now = new Date()) {
  const today = todayInNewJersey(now);
  const upcoming: BellaEvent[] = [];
  const past: BellaEvent[] = [];
  for (const item of events) {
    if (item.date >= today) upcoming.push(item);
    else past.push(item);
  }
  upcoming.sort((a, b) => a.date.localeCompare(b.date));
  past.sort((a, b) => b.date.localeCompare(a.date));
  return { upcoming, past };
}

export function formatEventDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(Date.UTC(year, month - 1, day, 16)));
}
