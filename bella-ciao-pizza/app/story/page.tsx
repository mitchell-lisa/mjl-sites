import { BookingCTA } from "@/components/BookingCTA";
import { OurStory } from "@/components/OurStory";
import { PageIntro } from "@/components/PageIntro";
import { TeamSection } from "@/components/TeamSection";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Our Story",
  description:
    "Bella Ciao Pizza is a mobile wood-fired pizzeria in New Jersey. The oven comes to the event and pies are fired on site.",
  path: "/story",
});

export default function StoryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our story"
        title="The oven comes to you."
        lede="A traveling wood-fired pizzeria. The longer family story stays with the owners until they tell it."
      />
      <OurStory />
      <TeamSection />
      <BookingCTA />
    </>
  );
}
