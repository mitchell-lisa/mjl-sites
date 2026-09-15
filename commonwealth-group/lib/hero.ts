export type HeroSlide = {
  src: string;
  alt: string;
  label: string;
  objectClass?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/cover-renaissance.jpg",
    alt: "The Renaissance Centre street façade in Wilmington",
    label: "The Renaissance Centre",
    objectClass: "object-center",
  },
  {
    src: "/images/commonwealth-building-hq.jpg",
    alt: "The Commonwealth Building at 300 Water Street",
    label: "The Commonwealth Building",
    objectClass: "object-center",
  },
  {
    src: "/images/portfolio/little-falls/hero.jpg",
    alt: "Little Falls Centre, from the Commonwealth office portfolio",
    label: "Little Falls Centre",
    objectClass: "object-[center_62%]",
  },
  {
    src: "/images/portfolio/one-river-place/04.jpg",
    alt: "One River Place in Wilmington, from the Commonwealth office portfolio",
    label: "One River Place",
    objectClass: "object-[center_42%]",
  },
  {
    src: "/images/portfolio/liberty-square/hero.jpg",
    alt: "Liberty Square Apartments in Philadelphia, from the Commonwealth portfolio",
    label: "Liberty Square",
    objectClass: "object-[center_40%]",
  },
  {
    src: "/images/portfolio/darley-green/03.jpg",
    alt: "Darley Green townhomes, from the Commonwealth residential listing",
    label: "Darley Green",
    objectClass: "object-[center_45%]",
  },
  {
    src: "/images/portfolio/kennett-pointe/hero.jpg",
    alt: "Kennett Pointe, from the Commonwealth multifamily listing",
    label: "Kennett Pointe",
    objectClass: "object-center",
  },
];
