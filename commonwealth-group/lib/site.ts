export const site = {
  name: "The Commonwealth Group, LLC",
  shortName: "The Commonwealth Group",
  phoneDisplay: "302.472.7200",
  phoneHref: "tel:+13024727200",
  email: "drobitzer@commonwealthltd.net",
  founded: 1973,
  region: "Mid-Atlantic",
  address: {
    line1: "300 Water Street",
    line2: "Wilmington, DE 19801",
  },
  liveSite: "https://commonwealthltd.net",
  previewNotice:
    "Sample redesign for The Commonwealth Group. Not affiliated. Preview only.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
] as const;
