export const site = {
  name: "Bella Ciao Pizza LLC",
  shortName: "Bella Ciao Pizza",
  tagline: "Mobile wood-fired pizza",
  city: "Dayton, NJ",
  region: "Dayton and South Brunswick, New Jersey",
  phoneDisplay: "(732) 309-3034",
  phoneHref: "tel:+17323093034",
  email: "bellaciaopizzallc@gmail.com",
  emailHref: "mailto:bellaciaopizzallc@gmail.com",
  instagramHandle: "@bellaciaopizzallc",
  instagramUrl: "https://www.instagram.com/bellaciaopizzallc/",
  address: {
    line1: "1601 Blossom Circle",
    city: "Dayton",
    region: "NJ",
    postalCode: "08810",
    display: "1601 Blossom Circle, Dayton, NJ 08810",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1601+Blossom+Circle+Dayton+NJ+08810",
  previewUrl: "https://mjl-bella-ciao-pizza.vercel.app",
  previewNotice:
    "Preview built by MJL Collective. This is not the official Bella Ciao Pizza LLC website. Sample redesign - not affiliated. Preview only.",
} as const;

export const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#events", label: "Events" },
  { href: "#about", label: "About" },
] as const;
