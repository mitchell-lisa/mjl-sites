export type CategorySlug =
  | "office"
  | "multifamily"
  | "residential"
  | "industrial"
  | "family-business";

export type Category = {
  slug: CategorySlug;
  label: string;
  shortLabel: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const categories: Category[] = [
  {
    slug: "office",
    label: "Office",
    shortLabel: "Office",
    summary:
      "Class A and historic office properties across Wilmington and the broader Mid-Atlantic, from riverfront headquarters to suburban professional campuses.",
    image: "/images/office.jpg",
    imageAlt: "Atmospheric photograph of a professional office interior",
  },
  {
    slug: "multifamily",
    label: "Multifamily / Mixed Use",
    shortLabel: "Multifamily",
    summary:
      "Apartment and mixed-use communities in Delaware, Pennsylvania, and Colorado, including energy-conscious communities and urban infill.",
    image: "/images/multifamily.jpg",
    imageAlt: "Atmospheric photograph of a multifamily residential building",
  },
  {
    slug: "residential",
    label: "Residential",
    shortLabel: "Residential",
    summary:
      "Townhome, custom home, and neighborhood communities developed with associated entities including Montchanin Builders.",
    image: "/images/residential.jpg",
    imageAlt: "Atmospheric photograph of a residential streetscape",
  },
  {
    slug: "industrial",
    label: "Industrial",
    shortLabel: "Industrial",
    summary:
      "Industrial parks and related facilities in the Mid-Atlantic, including projects developed under Commonwealth-Emory Hill and as lead industrial developer.",
    image: "/images/industrial.jpg",
    imageAlt: "Atmospheric photograph of an industrial warehouse facility",
  },
  {
    slug: "family-business",
    label: "Family Business",
    shortLabel: "Family Business",
    summary:
      "Family ventures connected to the firm, including White Horse Winery in New Jersey and Chaddsford Winery in Pennsylvania.",
    image: "/images/vineyard.jpg",
    imageAlt: "Atmospheric photograph of a vineyard landscape",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
