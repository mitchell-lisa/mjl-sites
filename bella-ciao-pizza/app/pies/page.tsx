import { BookingCTA } from "@/components/BookingCTA";
import { PageIntro } from "@/components/PageIntro";
import { PizzaMenu } from "@/components/PizzaMenu";
import { SicilyMap } from "@/components/SicilyMap";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Wood-Fired Pies",
  description:
    "Wood-fired pies named for towns in Sicily, from a mobile pizza truck for catering and private events in New Jersey.",
  path: "/pies",
});

export default function PiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="The board"
        title="Sicily, one pie at a time."
        lede="Thirteen pies. Town names from Sicily. Fired to order when the truck is at your event."
      />
      <PizzaMenu />
      <SicilyMap />
      <BookingCTA />
    </>
  );
}
