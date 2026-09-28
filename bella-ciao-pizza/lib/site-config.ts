export type SiteMode = "preview" | "production";

export const siteMode: SiteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === "production" ? "production" : "preview";

export const isPreview = siteMode !== "production";

export const site = {
  name: "Bella Ciao Pizza LLC",
  shortName: "Bella Ciao Pizza",
  tagline: "Mobile wood-fired pizza",
  description:
    "Bella Ciao brings a wood-fired oven to private parties, weddings, and events in New Jersey. The truck arrives and pies are made live.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://mjl-bella-ciao-pizza.vercel.app",
  phoneDisplay: "(732) 309-3034",
  phoneHref: "tel:+17323093034",
  phoneE164: "+17323093034",
  email: "bellaciaopizzallc@gmail.com",
  emailHref: "mailto:bellaciaopizzallc@gmail.com",
  instagramHandle: "@bellaciaopizzallc",
  instagramUrl: "https://www.instagram.com/bellaciaopizzallc/",
} as const;

/**
 * Tighter geography is unconfirmed. Dayton, South Brunswick, Central Jersey,
 * and Somerset / Route 27 all show up in source material. No street is published.
 */
export const serviceArea = {
  publicLabel: "New Jersey",
  confirmed: false,
  showUnconfirmedLine: true,
  heroLine: "New Jersey. Service area to confirm.",
  detail:
    "The truck travels for events in New Jersey. The exact towns and radius are still to be confirmed.",
} as const;

export const previewCopy = {
  banner:
    "Preview built by MJL Collective. This is not the official Bella Ciao Pizza LLC website. Sample redesign, not affiliated. Preview only.",
  footerCredit:
    "Preview built by MJL Collective. This is not the official Bella Ciao Pizza LLC website.",
} as const;

export const nav = [
  { href: "/pies", label: "Pies" },
  { href: "/events", label: "Events" },
  { href: "/story", label: "Our Story" },
  { href: "/events#upcoming", label: "Find Us" },
] as const;

export const eventTypes = [
  {
    id: "backyard",
    label: "Backyard parties",
    confirmed: false,
    copy: "The truck pulls in, the oven is lit, and the pies come out while the party stays outside.",
  },
  {
    id: "weddings",
    label: "Weddings",
    confirmed: false,
    copy: "Cocktail hour or the meal itself, fired while guests are on their feet.",
  },
  {
    id: "corporate",
    label: "Corporate",
    confirmed: false,
    copy: "Lunches and team days, with a steady line of hot pies.",
  },
  {
    id: "graduations",
    label: "Graduations",
    confirmed: false,
    copy: "A backyard or a rented room, marked with pies straight from the fire.",
  },
  {
    id: "festivals",
    label: "Festivals and pop-ups",
    confirmed: false,
    copy: "The oven on site, Sicilian town names on the board, a line at the window.",
  },
  {
    id: "community",
    label: "Community events",
    confirmed: false,
    copy: "Block parties, fundraisers, and local gatherings around the truck.",
  },
] as const;

export const dietary = {
  confirmed: false,
  statements: [
    "Vegan options available.",
    "Gluten-free options may be available by advance request.",
  ],
  caution:
    "Ask when you book. The oven is shared, and Bella Ciao does not make allergen guarantees.",
} as const;

/** Held in config so the numbers exist in one place. Nothing here is published. */
export const operations = {
  travelFee: null as string | null,
  minimumSpend: null as string | null,
  capacity: null as string | null,
} as const;

export type Review = {
  name: string;
  platform: string;
  stars: number;
  quote: string;
  url?: string;
};

/** Anonymous listing quotes were not promoted. Add sourced reviews before turning this on. */
export const reviews: { show: boolean; items: Review[] } = {
  show: false,
  items: [],
};

export type Person = {
  name: string;
  role: string;
  photo?: string;
  alt?: string;
};

/** No names or roles are published until the owners supply them. */
export const people: Person[] = [];

export const lines = {
  experience: [
    "Wood-fired",
    "Mobile",
    "Made to order",
    "Private events",
    "Catering",
  ],
  partyOven: "Your party. Our oven.",
  sicily: "Sicily, one pie at a time.",
  footerMark: "Wood-fired. Mobile. Sicilian.",
  closing: "Ci vediamo presto.",
} as const;
