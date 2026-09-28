export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const photos = {
  oven: {
    src: "/photos/hero-oven.jpg",
    alt: "Wood-fired pie on a peel in front of the Bella Ciao oven",
    width: 750,
    height: 1000,
  },
  zingaro: {
    src: "/photos/pizza-zingaro.jpg",
    alt: "Zingaro pie with heirloom tomatoes, basil, and fresh mozzarella",
    width: 749,
    height: 1000,
  },
  volcano: {
    src: "/photos/pizza-volcano.jpg",
    alt: "Volcano pie with chicken cutlet, mozzarella, and buffalo sauce",
    width: 749,
    height: 1000,
  },
} as const satisfies Record<string, Photo>;
