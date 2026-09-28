import { BookingCTA } from "@/components/BookingCTA";
import { EventsOverview } from "@/components/EventsOverview";
import { PageIntro } from "@/components/PageIntro";
import { ServiceArea } from "@/components/ServiceArea";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Pizza Truck for Weddings and Private Parties",
  description:
    "Book the Bella Ciao pizza truck for weddings, backyard parties, corporate events, and festivals in New Jersey.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Find us"
        title="The oven, at the event."
        lede="Private parties, weddings, corporate days, graduations, festivals, and community gatherings."
      />
      <div className="mx-auto max-w-page px-5 pt-10 sm:px-8">
        <ServiceArea />
      </div>
      <EventsOverview />
      <UpcomingEvents showPast />
      <BookingCTA />
    </>
  );
}
