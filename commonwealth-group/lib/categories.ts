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
    image: "/images/portfolio/category-office.jpg",
    imageAlt: "The Renaissance Centre in Wilmington, from the Commonwealth office portfolio",
  },
  {
    slug: "multifamily",
    label: "Multifamily / Mixed Use",
    shortLabel: "Multifamily",
    summary:
      "Apartment and mixed-use communities in Delaware, Pennsylvania, and Colorado, including energy-conscious communities and urban infill.",
    image: "/images/portfolio/category-multifamily.jpg",
    imageAlt: "Corner 2nd in Philadelphia, from the Commonwealth multifamily portfolio",
  },
  {
    slug: "residential",
    label: "Residential",
    shortLabel: "Residential",
    summary:
      "Townhome, custom home, and neighborhood communities developed with associated entities including Montchanin Builders.",
    image: "/images/portfolio/category-residential.jpg",
    imageAlt: "Darley Green in Claymont, from the Commonwealth residential portfolio",
  },
  {
    slug: "industrial",
    label: "Industrial",
    shortLabel: "Industrial",
    summary:
      "Industrial parks and related facilities in the Mid-Atlantic, including projects developed under Commonwealth-Emory Hill and as lead industrial developer.",
    image: "/images/portfolio/category-industrial.jpg",
    imageAlt: "Riveredge Industrial Park, from the Commonwealth industrial portfolio",
  },
  {
    slug: "family-business",
    label: "Family Business",
    shortLabel: "Family Business",
    summary:
      "Family ventures connected to the firm, including White Horse Winery in New Jersey and Chaddsford Winery in Pennsylvania.",
    image: "/images/portfolio/category-family-business.jpg",
    imageAlt: "White Horse Winery, from the Commonwealth family-business portfolio",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
