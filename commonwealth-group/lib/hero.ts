export type HeroSlide = {
  src: string;
  alt: string;
  label: string;
  objectClass?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/portfolio/little-falls/hero.jpg",
    alt: "Little Falls Center, from the Commonwealth office portfolio",
    label: "Little Falls Center",
    objectClass: "object-[center_70%]",
  },
  {
    src: "/images/portfolio/liberty-square/hero.jpg",
    alt: "Liberty Square Apartments in Philadelphia, from the Commonwealth multifamily portfolio",
    label: "Liberty Square",
    objectClass: "object-[center_40%]",
  },
  {
    src: "/images/portfolio/darley-green/03.jpg",
    alt: "Darley Green townhomes, from the Commonwealth residential listing",
    label: "Darley Green",
    objectClass: "object-[center_38%]",
  },
  {
    src: "/images/portfolio/riveredge-industrial-park/hero.jpg",
    alt: "Riveredge Industrial Park, from the Commonwealth industrial portfolio",
    label: "Riveredge Industrial Park",
    objectClass: "object-[62%_38%]",
  },
  {
    src: "/images/portfolio/white-horse-winery/hero.jpg",
    alt: "White Horse Winery, from the Commonwealth family-business portfolio",
    label: "White Horse Winery",
    objectClass: "object-[center_40%]",
  },
  {
    src: "/images/portfolio/category-natural-resources.jpg",
    alt: "Natural resources photograph published on the Commonwealth portfolio",
    label: "Natural Resources",
    objectClass: "object-[center_46%]",
  },
];
