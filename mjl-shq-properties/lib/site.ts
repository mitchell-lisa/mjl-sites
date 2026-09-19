export const site = {
  name: "SHQ Properties",
  legalName: "SHQ Properties",
  tagline: "Building Dreams Together",
  description:
    "South Jersey's Best Home Buyer and Premium Home Improvement Services",
  storyLead:
    "SHQ Properties is a family owned and operated Real Estate Investment and General Contracting company based in Southern New Jersey.",
  storyBody:
    "Since 1999, SHQ Properties has been in the investment industry purchasing, renovating, building, and selling numerous properties throughout the New Jersey and Philadelphia market, while also ensuring high yielding returns to our Private Investors.",
  storyGc:
    "We also perform General Contracting services for multi family investment firms, and residential homeowners that are looking to update their properties.",
  weBuyLead: "Need or looking to sell your home?",
  weBuyOffer: "SHQ Properties offers a no questions asked solution.",
  weBuyProcess:
    "Our 8 step process makes solving your problem or headache very easy.",
  contractorLead:
    "Are you ready to transform your living space into a masterpiece of style and sophistication?",
  contractorBody:
    "SHQ understands that a home should be a reflection of the homeowner's personality and taste. That is why we are thrilled to offer our premium flooring, interior trim, and tile services to help elevate your home.",
  hblName: "Constructora HBL",
  hblBody:
    "SHQ Properties is a sister company to our international development company Constructora HBL, based in Colombia, South America. HBL focuses on creating and building innovative projects throughout South and Central America.",
  hblUrl: "https://constructorahbl.com",
  phoneDisplay: "(856) 488-8070",
  phoneHref: "tel:+18564888070",
  email: "administration@shqproperties.com",
  founded: 1999,
  region: "Southern New Jersey",
  market: "New Jersey and Philadelphia",
  liveSite: "https://shqproperties.com",
  previewUrl: "https://mjl-shq-properties.vercel.app",
  previewNotice:
    "Preview built by MJL Collective. This is not the official SHQ Properties website.",
  facebook: "https://www.facebook.com/shqproperties/",
  instagram: "https://www.instagram.com/shqproperties/",
  youtube: "https://www.youtube.com/watch?v=wWb2q30Jn4A",
} as const;

export const nav = [
  { href: "#story", label: "Our Story" },
  { href: "#we-buy", label: "We Buy" },
  { href: "#contracting", label: "Contracting" },
  { href: "#hbl", label: "HBL" },
  { href: "#contact", label: "Contact" },
] as const;

export const contractorServices = [
  {
    name: "Premium flooring",
    copy: "Flooring work for multifamily investment firms and residential homeowners.",
  },
  {
    name: "Interior trim",
    copy: "Interior trim that helps a home reflect the homeowner's personality and taste.",
  },
  {
    name: "Tile",
    copy: "Tile services to help elevate a living space.",
  },
] as const;

export const projectPhotos = [
  {
    src: "/images/photo1.jpeg",
    alt: "Single-story South Jersey property with a circular entry and wooded lot.",
  },
  {
    src: "/images/photo2.jpeg",
    alt: "Two-story gray shingle home with a white bay and metal-roof porch.",
  },
  {
    src: "/images/photo3.jpeg",
    alt: "Light gray colonial with a front porch and dormers.",
  },
] as const;
