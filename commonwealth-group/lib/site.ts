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
  previewUrl: "https://mjl-commonwealth-group.vercel.app",
  previewNotice:
    "Preview built by MJL Collective. This is not the official The Commonwealth Group website. Sample redesign - not affiliated. Preview only.",
  montchaninSite: "https://montchaninbuilders.net",
  montchaninMoveIn: "https://montchaninbuilders.net/move-in-ready/",
} as const;

export type NavItem = {
  href: string;
  label: string;
  match?: string[];
  children?: { href: string; label: string }[];
};

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/available-properties", label: "Available Properties" },
  {
    href: "/development",
    label: "Services",
    match: [
      "/development",
      "/management",
      "/management/marketing-leasing",
      "/management/acquisitions-disposition",
    ],
    children: [
      { href: "/development", label: "Development" },
      { href: "/management", label: "Management" },
      { href: "/management/marketing-leasing", label: "Marketing and Leasing" },
      {
        href: "/management/acquisitions-disposition",
        label: "Acquisitions and Disposition",
      },
    ],
  },
  { href: "/montchanin-builders", label: "Montchanin" },
  { href: "/clients", label: "Clients" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = [
  { href: "/about", label: "About Us" },
  { href: "/leadership", label: "Leadership" },
  { href: "/clients", label: "Clients" },
  { href: "/available-properties", label: "Available Properties" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/montchanin-builders", label: "Montchanin Builders" },
] as const;

export const serviceNav = [
  { href: "/development", label: "Development" },
  { href: "/management", label: "Management" },
  { href: "/management/marketing-leasing", label: "Marketing and Leasing" },
  {
    href: "/management/acquisitions-disposition",
    label: "Acquisitions and Disposition",
  },
] as const;

export const clients = [
  "American Express",
  "DuPont",
  "Computer Science Corporation",
  "Applied Extrusion Technologies",
  "Dade Behring",
  "Wesley College",
  "Christiana Care",
  "Chester County Hospital",
  "Penn Hospital",
  "Discover Card",
  "AIG",
  "Amtrak",
  "Alstom",
  "McCarter and English",
  "Deloitte",
  "State of Delaware",
] as const;
