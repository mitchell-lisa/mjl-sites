import { site } from "@/lib/site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    name: site.name,
    legalName: site.legalName,
    alternateName: site.legalName,
    description: `${site.storyLead} ${site.storyGc}`,
    slogan: site.tagline,
    url: site.liveSite,
    image: `${site.previewUrl}/images/hero.jpeg`,
    telephone: "+1-856-488-8070",
    email: site.email,
    foundingDate: String(site.founded),
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Southern New Jersey",
      },
      {
        "@type": "AdministrativeArea",
        name: "South Jersey",
      },
      {
        "@type": "City",
        name: "Philadelphia",
      },
    ],
    knowsAbout: [
      "Real estate investment",
      "General contracting",
      "Cash property purchases",
      "Premium flooring",
      "Interior trim",
      "Tile",
    ],
    sameAs: [site.facebook, site.instagram, site.youtube],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-856-488-8070",
        email: site.email,
        contactType: "customer service",
        areaServed: "US-NJ",
        availableLanguage: "English",
      },
    ],
    siblingOrganization: {
      "@type": "Organization",
      name: site.hblName,
      url: site.hblUrl,
    },
  };
}
