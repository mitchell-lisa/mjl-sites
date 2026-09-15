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

export type ClientMark = {
  name: string;
  /** Published collage crop or official mark. Omitted when no verified mark exists. */
  src?: string;
  /** Official homepage only when verified. */
  href?: string;
};

export const clientMarks: ClientMark[] = [
  {
    name: "American Express",
    src: "/images/clients/marks/american-express.png",
    href: "https://www.americanexpress.com",
  },
  {
    name: "DuPont",
    src: "/images/clients/marks/dupont.png",
    href: "https://www.dupont.com",
  },
  {
    name: "Computer Science Corporation",
    src: "/images/clients/marks/csc.png",
  },
  {
    name: "Applied Extrusion Technologies",
  },
  {
    name: "Dade Behring",
    src: "/images/clients/marks/dade-behring.png",
  },
  {
    name: "Wesley College",
    src: "/images/clients/marks/wesley-college.png",
  },
  {
    name: "Christiana Care",
    src: "/images/clients/marks/christiana-care.png",
    href: "https://christianacare.org",
  },
  {
    name: "Chester County Hospital",
    href: "https://www.chestercountyhospital.org",
  },
  {
    name: "Penn Hospital",
    src: "/images/clients/marks/penn-hospital.svg",
    href: "https://www.pennmedicine.org/locations/pennsylvania-hospital",
  },
  {
    name: "Discover Card",
    src: "/images/clients/marks/discover.svg",
    href: "https://www.discover.com",
  },
  {
    name: "AIG",
    src: "/images/clients/marks/aig.png",
    href: "https://www.aig.com",
  },
  {
    name: "Amtrak",
    src: "/images/clients/marks/amtrak.svg",
    href: "https://www.amtrak.com",
  },
  {
    name: "Alstom",
    src: "/images/clients/marks/alstom.png",
    href: "https://www.alstom.com",
  },
  {
    name: "McCarter and English",
    src: "/images/clients/marks/mccarter-english.png",
    href: "https://www.mccarter.com",
  },
  {
    name: "Deloitte",
    src: "/images/clients/marks/deloitte.svg",
    href: "https://www.deloitte.com",
  },
  {
    name: "State of Delaware",
    src: "/images/clients/marks/delaware.png",
    href: "https://delaware.gov",
  },
];

export const clients = clientMarks.map((client) => client.name);
