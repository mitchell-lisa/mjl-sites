export type BellaEvent = {
  date: string;
  event: string;
  city: string;
  time: string;
  link?: string;
  image?: string;
};

/**
 * Only appearances that can be tied to a public source.
 * The Whit reported Bella Ciao at this festival. The borough vendor list
 * does not name the truck, so the owner should confirm it stays.
 */
export const events: BellaEvent[] = [
  {
    date: "2026-09-12",
    event: "Saint Anthony's Italian Festival",
    city: "Glassboro, NJ",
    time: "2:00 PM to 10:00 PM",
    link: "https://thewhitonline.com/91935/features/glassboro-hosts-13th-annual-saint-anthonys-italian-festival/",
  },
];
