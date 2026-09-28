import { BookingForm } from "@/components/BookingForm";
import { PageIntro } from "@/components/PageIntro";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site-config";

export const metadata = pageMeta({
  title: "Book the Pizza Truck",
  description:
    "Request the Bella Ciao truck for a private party or event. Wood-fired pizza catering in New Jersey.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageIntro
        eyebrow="Book the truck"
        title="Tell us about the event."
        lede="A date, a town, and a phone number. We follow up. The date is held when Bella Ciao confirms."
      />
      <div className="mx-auto grid max-w-page gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-16">
        <BookingForm />
        <aside className="h-fit border-t border-ink/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">Prefer the phone</p>
          <a href={site.phoneHref} className="mt-3 block font-display text-4xl leading-none">
            {site.phoneDisplay}
          </a>
          <a href={site.emailHref} className="mt-4 block underline decoration-gold decoration-2 underline-offset-4">
            {site.email}
          </a>
          <a
            href={site.instagramUrl}
            className="mt-4 block text-sm font-semibold uppercase tracking-[0.14em]"
            rel="noopener noreferrer"
            target="_blank"
          >
            {site.instagramHandle}
          </a>
        </aside>
      </div>
    </>
  );
}
