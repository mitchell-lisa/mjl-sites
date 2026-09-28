import { pies } from "@/lib/menu";
import { site, serviceArea } from "@/lib/site-config";

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Caterer", "FoodEstablishment"],
    name: site.name,
    telephone: site.phoneE164,
    email: site.email,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/photos/hero-oven.jpg`,
    sameAs: [site.instagramUrl],
    servesCuisine: ["Pizza", "Italian"],
    areaServed: {
      "@type": "State",
      name: serviceArea.publicLabel,
    },
    hasMenu: {
      "@type": "Menu",
      name: "Bella Ciao pies",
      url: `${site.url}/pies`,
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Pies",
          hasMenuItem: pies.map((pie) => ({
            "@type": "MenuItem",
            name: pie.name,
            description: pie.listing,
          })),
        },
      ],
    },
  };
}
