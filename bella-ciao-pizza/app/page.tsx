import { BookingCTA } from "@/components/BookingCTA";
import { EventsOverview } from "@/components/EventsOverview";
import { ExperienceStrip } from "@/components/ExperienceStrip";
import { Hero } from "@/components/Hero";
import { InstagramGallery } from "@/components/InstagramGallery";
import { PizzaMenu } from "@/components/PizzaMenu";
import { ProcessSection } from "@/components/ProcessSection";
import { ReviewSection } from "@/components/ReviewSection";
import { StoryIntro } from "@/components/StoryIntro";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Wood-Fired Pizza Catering in New Jersey",
  description:
    "Bella Ciao brings a wood-fired oven to private parties, weddings, and events in New Jersey. The truck arrives and pies are made live.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceStrip />
      <StoryIntro />
      <PizzaMenu variant="preview" />
      <ProcessSection />
      <EventsOverview />
      <UpcomingEvents />
      <InstagramGallery />
      <ReviewSection />
      <BookingCTA />
    </>
  );
}
