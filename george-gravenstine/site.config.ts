// site.config.ts
// Every fact the site renders lives here, with its source in a comment.
// Anything unknown is typed nullable and is null. A null renders nothing.
// Palette sampled from design/palette-source.jpg (the building at 119 N Church St,
// BrightMLS 1001209259 listing photograph, watermarked, color source only, never served)
// and from public/logo.png (the agency's own monogram).

export type Person = {
  name: string;
  role: string;
  email: string;
  phone: string | null;
  portrait: string | null; // path under /public, or null while no usable file exists
};

export type Office = {
  legalName: string;
  shortName: string;
  street: string;
  town: string;
  state: string;
  zip: string;
  phone: string; // the line that rings the office
  phoneHref: string;
  // numbers the agency accepts texts on, stated by George 2026-09-11
  textNumbers: string[];
  email: string;
  hours: string | null;
  directionsUrl: string;
  mapEmbedUrl: string;
  // Google's own Street View player, their imagery served through their embed
  // with their attribution. A stand in until the agency supplies a photograph.
  streetViewEmbedUrl: string | null;
};

export type SiteConfig = {
  domain: string;
  office: Office;
  owner: { name: string; designation: string | null; yearsInTrade: number };
  people: Person[];
  lines: { name: string; blurb: string }[];
  commercial: string[];
  carriers: string[];
  serviceArea: string | null;
  quote: { url: string; autoUrl: string; homeUrl: string; minutes: string };
  clientCenterUrl: string;
  record: { org: string; role: string }[];
  ownWords: string[];
  social: { label: string; url: string }[];
  // Deliberately null. Do not fill without a source in the prospect doc.
  foundingYear: number | null; // 38 years is his career, not the LLC's age
  licenseNumber: string | null; // no "licensed and insured" language without it
  googleRating: number | null; // no Google Business Profile exists at all
  googleReviewCount: number | null;
  buildingPhoto: string | null; // no photograph of 119 N Church that we may serve
  reviews: { text: string; author: string; source: string }[]; // none exist anywhere
};

export const site: SiteConfig = {
  domain: 'georgeinsurance.agency',

  office: {
    legalName: 'George Gravenstine Agency, LLC',
    shortName: 'George Gravenstine Agency',
    street: '119 N Church St',
    town: 'Moorestown',
    state: 'NJ',
    zip: '08057',
    // source: George's email signature, "Office". Confirmed by Mitchell 2026-09-10
    // as the number that ships. His cell, 609-304-0031, stays off the site.
    phone: '609-430-8275',
    phoneHref: 'tel:+16094308275',
    // George's own wording: "you can text us at 856-430-8276 or 856-430-8278".
    // NOTE the area code. These are 856 and sequential with the office line,
    // which his signature gives as 609-430-8275. One of the two is likely wrong.
    textNumbers: ['856-430-8276', '856-430-8278'],
    email: 'george@georgeinsurance.agency', // source: mailto link on the current site
    // source: George's signature and Stephanie's signature, stated independently
    hours: 'Monday to Friday, 9am to 5pm',
    // The Google pin for the street address. There is no Google Business Profile
    // for the agency, confirmed three ways 2026-09-10.
    directionsUrl:
      'https://www.google.com/maps/place/119+N+Church+St,+Moorestown,+NJ+08057/@39.9633508,-74.950175,17z',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=119%20N%20Church%20St%20Moorestown%20NJ%2008057&z=16&output=embed',
    // coordinates, heading and pitch taken from the May 2026 capture
    streetViewEmbedUrl:
      'https://maps.google.com/maps?q=&layer=c&cbll=39.9632723,-74.9504064&cbp=12,58.71,,0,-11.38&output=svembed'
  },

  owner: {
    name: 'George Gravenstine',
    designation: 'CRIS', // source: LinkedIn headline
    yearsInTrade: 38 // source: his own About page, "Over 38 years"
  },

  // All three portraits in hand as of 2026-09-11. George calls Lauren "Laurel"
  // in writing; Mitchell confirms they are the same person. Her photograph is on
  // a blurred office background rather than the grey the other two share.
  people: [
    {
      name: 'George Gravenstine',
      role: 'Owner',
      email: 'george@georgeinsurance.agency',
      phone: '609-430-8275',
      // supplied 2026-09-10. Source file is 190px, an Outlook inline thumbnail,
      // so 112 CSS pixels is the largest honest display size.
      portrait: '/photos/george-gravenstine.jpg'
    },
    {
      name: 'Stephanie Svensson', // spelling confirmed by Mitchell 2026-09-10
      role: 'Customer service',
      email: 'stephanie@georgeinsurance.agency',
      phone: '609-430-8275',
      // corrected 2026-09-11. The first file George was sent was Laurel, not
      // Stephanie. This is Stephanie, 728 by 794, grey studio background that
      // matches George's.
      portrait: '/photos/stephanie-svensson.jpg'
    },
    {
      name: 'Lauren Albert',
      role: 'Licensed account executive',
      email: 'lauren@georgeinsurance.agency',
      phone: null,
      // the file first labelled Stephanie. George corrected it 2026-09-11.
      portrait: '/photos/lauren-albert.jpg'
    }
  ],

  lines: [
    {
      name: 'Auto',
      blurb:
        'Your car quoted against several companies at once rather than sold off one shelf, with the coverage read back to you in plain words before you buy it.'
    },
    {
      name: 'Home',
      blurb:
        'Homeowners insurance for the houses in this town, including the old ones that need more thought than a website form gives them.'
    },
    {
      name: 'Business',
      blurb:
        'Insurance for locally owned businesses, which is the work this agency has done longest.'
    }
  ],

  // source: current site, commercial copy
  commercial: [
    'General liability',
    'Property',
    'Commercial auto',
    "Workers' compensation"
  ],

  // source: the agency's own Consumer Quoting portal at agentinsure.com, read 2026-09-10.
  // Cleared for print by Mitchell 2026-09-10. Names only, no carrier marks.
  carriers: [
    'Progressive',
    'Plymouth Rock Assurance',
    'Plymouth Rock Assurance Teachers Plan of NJ',
    'Hanover'
  ],

  // same source, same clearance
  serviceArea: 'New Jersey and Pennsylvania',

  quote: {
    url: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/georgegra/quote.aspx',
    autoUrl:
      'https://www.agentinsure.com/compare/auto-insurance-home-insurance/georgegra/quote.aspx?lob=auto',
    homeUrl:
      'https://www.agentinsure.com/compare/auto-insurance-home-insurance/georgegra/quote.aspx?lob=home',
    // his portal's own wording
    minutes: 'Three to five minutes, and it does not affect your credit score.'
  },

  // final URL, after the redirect the old one returns
  clientCenterUrl:
    'https://customerservice.agentinsure.com/EzLynxCustomerService/web/georgegra/account/login',

  // all from his own About page
  record: [
    { org: 'Moorestown Breakfast Rotary', role: 'President, two terms' },
    { org: 'The Strawbridge Lake Beautification Committee, Inc.', role: 'Founder' },
    { org: 'Burlington County Independent Agents', role: 'Past president' },
    { org: 'Cinnaminson Business Association', role: 'Past president' },
    { org: 'Palmyra Riverton Cinnaminson Rotary', role: 'Past treasurer' },
    { org: 'Moorestown Economic Advisory Committee', role: 'Current member' },
    {
      org: 'Moorestown Township Environmental Advisory Committee',
      role: 'Former member'
    }
  ],

  // verbatim from his About page
  ownWords: [
    'Over 38 years of commercial and personal insurance program management for a locally owned business.',
    'Community engagement is at the heart of my professional philosophy.'
  ],

  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100089127046130' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/george-gravenstine-cris-54480ab' }
  ],

  foundingYear: null,
  licenseNumber: null,
  googleRating: null,
  googleReviewCount: null,
  buildingPhoto: null,
  reviews: []
};

export const siteOrigin = `https://${site.domain}`;

/** Absolute production URL for a route. The apex has no trailing slash. */
export function pageUrl(path: string): string {
  return path === '/' ? siteOrigin : `${siteOrigin}${path}`;
}

export default site;
