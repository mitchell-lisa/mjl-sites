import { categories, type CategorySlug } from "./categories";

export type Property = {
  slug: string;
  name: string;
  category: CategorySlug;
  location?: string;
  summary: string;
  description?: string[];
  specs?: { label: string; value: string }[];
  amenities?: string[];
  tenants?: string[];
  notes?: string[];
  featured?: boolean;
  sourcePath: string;
};

export const properties: Property[] = [
  {
    slug: "renaissance-centre",
    name: "The Renaissance Centre",
    category: "office",
    location: "405 North King Street, Wilmington, Delaware",
    summary:
      "An eight-story office building in Wilmington's Central Business District that blends late nineteenth-century architecture with contemporary construction.",
    description: [
      "The Renaissance Centre is described on the current Commonwealth site as a premier location in Wilmington's Central Business District. The building blends late nineteenth-century architecture with modern construction and design.",
      "It sits in the LOMA District, adjacent to the New Castle County Courthouse and a short walk to the Wilmington Riverfront, with close access to I-95, Route 13, and the Wilmington Train Station.",
    ],
    specs: [
      { label: "Size", value: "236,000 total SF" },
      { label: "Office", value: "149,802 SF" },
      { label: "Parking", value: "86,000 SF garage" },
      { label: "Floors", value: "8" },
      { label: "Year built", value: "2007" },
    ],
    amenities: [
      "Central location in the LOMA District",
      "Adjacent to the New Castle County Courthouse",
      "Short walk to the Wilmington Riverfront",
      "Two blocks from the Wilmington Train Station (Amtrak and SEPTA)",
      "Three-story, 184-space parking facility",
      "On-site café",
    ],
    tenants: ["Amtrak (Accenture)", "McCarter & English"],
    featured: true,
    sourcePath: "/development-portfolio/office/renaissance-center/",
  },
  {
    slug: "commonwealth-building",
    name: "The Commonwealth Building",
    category: "office",
    location: "300 Water Street, Wilmington, DE 19801",
    summary:
      "Headquarters of The Commonwealth Group in a restored 1912 Harlan and Hollingsworth building on the Wilmington Riverfront.",
    description: [
      "The Commonwealth Building is the result of a restoration of the historic headquarters for the former Harlan and Hollingsworth Shipbuilding Corporation. Originally constructed in 1912, the building was central to Wilmington's shipbuilding industry until the 1950s.",
      "It later served as a print production and office facility. The Commonwealth Group made 300 Water Street its headquarters in 2002 after renovating the facility for office use.",
    ],
    specs: [
      { label: "Size", value: "22,000 SF" },
      { label: "Floors", value: "3" },
      { label: "Year built", value: "1912 / 2002" },
    ],
    amenities: [
      "Dining and entertainment along the Wilmington Riverfront",
      "On-site parking",
      "Historic presence at a main entry to the Riverfront",
      "Walking distance to the Wilmington Train Station",
      "Access to I-95 and Route 13",
    ],
    tenants: [
      "The Commonwealth Group",
      "Montchanin Builders",
      "New Venture Fund",
      "Upstream USA",
      "Westside Health",
    ],
    featured: true,
    sourcePath: "/development-portfolio/office/100-s-west-associates/",
  },
  {
    slug: "little-falls",
    name: "Little Falls",
    category: "office",
    location: "2711 Centerville Road, Wilmington, DE",
    summary:
      "A Class A office campus of two four-story buildings on Centerville Road, minutes from downtown Wilmington.",
    description: [
      "Little Falls Centre is a Class A office complex on Centerville Road, minutes from downtown Wilmington. The property consists of two four-story office buildings, Little Falls I and Little Falls II, each approximately 100,000 square feet.",
      "Built in 1985, the campus is described as featuring neoclassical granite and blue-green glass façades overlooking a landscaped courtyard, with 9-foot ceilings, full-height mahogany doors, marble lobbies, high-speed elevators, and card-access security.",
    ],
    specs: [
      { label: "Buildings", value: "Little Falls I and II" },
      { label: "Size", value: "Approx. 100,000 SF each" },
      { label: "Floors", value: "4 per building" },
      { label: "Year built", value: "1985" },
      { label: "Parking", value: "Over 600 surface spaces" },
    ],
    amenities: [
      "On-site management",
      "Café",
      "Fitness center",
      "Common conference rooms",
      "Over 600 surface parking spaces",
      "Access to major routes, public transit, and Philadelphia International Airport",
    ],
    featured: true,
    sourcePath: "/development-portfolio/office/little-falls/",
  },
  {
    slug: "one-river-place",
    name: "One River Place",
    category: "office",
    location: "One River Place, Wilmington, DE 19801",
    summary:
      "A 157,000-square-foot riverfront building constructed in 2004 as a build-to-suit for AAA Mid-Atlantic.",
    description: [
      "Built on the banks of the Christiana River in Wilmington, One River Place was designed by Tevebaugh and Associates. It was constructed in 2004 as a build-to-suit for AAA Mid-Atlantic and is described on the current site as 100% leased to AAA as a national headquarters, with a small retail outlet for members.",
    ],
    specs: [
      { label: "Size", value: "157,000 SF" },
      { label: "Floors", value: "6" },
      { label: "Year built", value: "2004" },
    ],
    amenities: [
      "Presence on the Wilmington Riverfront",
      "Nearby dining and entertainment",
      "Walking distance to hotels and Frawley Stadium",
      "Access to I-95 and Route 13",
      "On-site cafeteria",
      "On-site parking",
    ],
    tenants: ["AAA"],
    featured: true,
    sourcePath: "/development-portfolio/office/one-river-place/",
  },
  {
    slug: "delaware-center-health-wellness",
    name: "Delaware Center for Health & Wellness",
    category: "office",
    summary:
      "Office property listed in the current Commonwealth office portfolio.",
    sourcePath: "/development-portfolio/office/",
  },
  {
    slug: "jenners-village-medical-center",
    name: "Jenners Village Medical Center",
    category: "office",
    summary:
      "Medical office property listed in the current Commonwealth office portfolio.",
    sourcePath: "/development-portfolio/office/",
  },
  {
    slug: "301-n-market-street",
    name: "301 N. Market Street",
    category: "office",
    location: "301 N. Market Street, Wilmington, DE",
    summary:
      "Office property listed in the current Commonwealth office portfolio.",
    sourcePath: "/development-portfolio/office/",
  },
  {
    slug: "1352-marrows-road",
    name: "1352 Marrows Road",
    category: "office",
    location: "1352 Marrows Road",
    summary:
      "Office property listed in the current Commonwealth office portfolio.",
    sourcePath: "/development-portfolio/office/",
  },
  {
    slug: "new-castle-corporate-commons",
    name: "New Castle Corporate Commons",
    category: "office",
    location: "New Castle, Delaware",
    summary:
      "Developed, leased, and managed under the Commonwealth-Emory Hill joint venture, according to the firm's About page.",
    description: [
      "The firm's About page states that under the joint venture of Commonwealth-Emory Hill, Commonwealth is responsible for the development, leasing, and management of The New Castle Corporate Commons and Omega Professional Center.",
    ],
    sourcePath: "/us/",
  },
  {
    slug: "chestnut-run",
    name: "Chestnut Run",
    category: "office",
    summary:
      "Office property listed in the current Commonwealth office portfolio.",
    sourcePath: "/development-portfolio/office/",
  },
  {
    slug: "robscott-office-building",
    name: "Robscott Office Building",
    category: "office",
    summary:
      "Office property listed in the current Commonwealth office portfolio.",
    sourcePath: "/development-portfolio/office/",
  },
  {
    slug: "solaire",
    name: "Solaire Energy Smart Apartment Homes",
    category: "multifamily",
    location: "1287 South 8th Avenue, Brighton, Colorado 80601",
    summary:
      "A Brighton, Colorado apartment community built over a privately constructed geothermal system, with one-, two-, and three-bedroom homes.",
    description: [
      "Solaire is described as sitting over one of the nation's largest privately built geothermal systems. The community offers one-, two-, and three-bedroom apartments with modern finishes and private patios or balconies with Trex flooring.",
    ],
    notes: [
      "The current Commonwealth site lists Solaire among National Association of Home Builders Pillars of the Industry recognition for Most Sustainable Community, along with Metro Denver Apartment Association recognition.",
    ],
    featured: true,
    sourcePath: "/development-portfolio/multi-family/solaire-smart-apartment-homes/",
  },
  {
    slug: "christiana-meadows",
    name: "Christiana Meadows Apartments",
    category: "multifamily",
    location: "265 Bear Christiana Road, Bear, Delaware 19701",
    summary:
      "A gated community of 648 one-, two-, and three-bedroom apartment homes near Christiana Mall, the University of Delaware, and downtown Wilmington.",
    description: [
      "Christiana Meadows is a gated community of 648 apartment homes, minutes from Christiana Mall, the University of Delaware, and downtown Wilmington, with access to I-95 and Routes 1, 7, and 40.",
      "The on-site Activities Center includes a fitness center, lighted tennis court, Olympic-size pool, game room, and an updated clubhouse with a kitchen and social lounge. Homes include electric appliances, a full-size washer and dryer, a private patio or balcony, and Verizon internet. The community also lists EV charging, a children's play area, and a 24-hour manned gatehouse.",
    ],
    specs: [
      { label: "Homes", value: "648 apartment homes" },
      { label: "Plans", value: "1, 2, and 3 bedrooms" },
    ],
    featured: true,
    sourcePath: "/development-portfolio/multi-family/christiana-meadows-apartments/",
  },
  {
    slug: "kennett-pointe",
    name: "Kennett Pointe",
    category: "multifamily",
    location: "East Cypress Street & Ways Lane, Kennett Square, PA",
    summary:
      "A mixed-use gateway project in Kennett Square with shoppes, commercial space, and The Lofts at Kennett Pointe.",
    description: [
      "Kennett Pointe is located at the gateway to Kennett Square. Commonwealth developed a roughly 49,000-square-foot mixed-use building with 13,375 square feet of ground-floor commercial space known as The Shoppes at Kennett Pointe.",
      "The Shoppes are described as fully leased to Hangry Bear Creamery, Calabrese Arts Co., NovaCare Physical Therapy, Studio 22 Pilates & Wellness, Cypress Club Indoor Simulator Golf Center, and Centered Clay Studio.",
      "Above the Shoppes, The Lofts at Kennett Pointe are described as 24 one- and two-bedroom apartments ranging from 910 to 1,152 square feet. Community amenities include outdoor gathering spaces, walking trails, a 6,000-square-foot plaza, pavilions, gazebos, and tree-lined streets.",
    ],
    specs: [
      { label: "Mixed-use building", value: "+/- 49,000 SF" },
      { label: "Ground-floor commercial", value: "13,375 SF" },
      { label: "Lofts", value: "24 apartments" },
      { label: "Loft sizes", value: "910 to 1,152 SF" },
    ],
    featured: true,
    sourcePath: "/development-portfolio/multi-family/kennett-pointe/",
  },
  {
    slug: "lofts-at-kennett-pointe",
    name: "The Lofts at Kennett Pointe",
    category: "multifamily",
    location: "Kennett Square, PA",
    summary:
      "Twenty-four one- and two-bedroom apartments above The Shoppes at Kennett Pointe.",
    description: [
      "The Lofts at Kennett Pointe are described as 24 one- and two-bedroom apartments with high-end finishes, ranging from 910 to 1,152 square feet, within walking distance of Kennett Square.",
    ],
    sourcePath: "/development-portfolio/multi-family/kennett-pointe/",
  },
  {
    slug: "corner-2nd",
    name: "Corner 2nd",
    category: "multifamily",
    location: "1222 N 2nd Street, Philadelphia, PA",
    summary:
      "An apartment building in Philadelphia's Northern Liberties neighborhood with 11-foot ceilings and expansive glass walls.",
    description: [
      "Corner 2nd is described as an apartment complex in Northern Liberties known for its architectural design and location. Apartments feature 11-foot ceilings and expansive glass walls. The current site notes nearby restaurants, cafes, and bars.",
    ],
    sourcePath: "/development-portfolio/multi-family/corner-2nd/",
  },
  {
    slug: "liberty-square",
    name: "Liberty Square Apartments",
    category: "multifamily",
    location: "1203 Germantown Avenue, Philadelphia, PA",
    summary:
      "A 300,000-square-foot Northern Liberties development with 201 apartments and a 153-car underground garage.",
    description: [
      "Liberty Square is described as a development in Philadelphia's Northern Liberties neighborhood. The complex consists of three buildings totaling 300,000 square feet, with 201 residential apartments and a 153-car underground parking garage.",
      "The current site notes floor-to-ceiling windows, designer kitchens, rooftop terraces, a lobby, a fitness center, and ground-floor retail.",
    ],
    specs: [
      { label: "Size", value: "300,000 SF" },
      { label: "Homes", value: "201 apartments" },
      { label: "Parking", value: "153-car underground garage" },
    ],
    featured: true,
    sourcePath: "/development-portfolio/multi-family/liberty-square-apartments/",
  },
  {
    slug: "riverfront-at-royersford",
    name: "Riverfront at Royersford",
    category: "multifamily",
    location: "Main Street, Royersford, PA",
    summary:
      "A mixed-use redevelopment of a former industrial site along the Schuylkill River Trail.",
    description: [
      "The Riverfront at Royersford is described as a mixed-use development designed to transform a former industrial site into a residential and commercial destination. Planned homes include studio, one-bedroom, two-bedroom, and loft apartments with access to the Schuylkill River Trail.",
      "The current site describes entertainment venues, restaurants, 15,000 square feet of outdoor deck space, and retail spaces ranging from 1,000 to 10,000 square feet, with pedestrian and bike connections to Main Street Royersford, Spring City, and the surrounding trail network. The project is described as minutes from Routes 422 and 724.",
    ],
    sourcePath: "/development-portfolio/multi-family/riverfront-at-royersford/",
  },
  {
    slug: "ponds-at-village-green",
    name: "Ponds at Village Green",
    category: "multifamily",
    location: "8800 Chiefs Way, Sinking Spring, PA",
    summary:
      "A 216-unit apartment community on 32 acres as part of the redevelopment of the former Village Greens Golf Course.",
    description: [
      "The Ponds at Village Green is part of a redevelopment of the former Village Greens Golf Course in the Borough of Sinking Spring. Set on 32 acres, the 216-unit apartment complex is part of a larger development that includes a 131-unit continuing care facility and a proposed 5,500-square-foot medical office building.",
      "The apartments are described as being within the Wilson School District, with one- and two-bedroom homes, private entrances, and a 5,000-square-foot clubhouse with indoor/outdoor entertainment space, a fitness center, dog wash, bike repair shop, business center, fire pit and grills, and sport courts.",
    ],
    specs: [
      { label: "Site", value: "32 acres" },
      { label: "Homes", value: "216 apartments" },
      { label: "Plans", value: "1 and 2 bedrooms" },
    ],
    sourcePath: "/development-portfolio/multi-family/ponds-at-village-green/",
  },
  {
    slug: "elements-at-prairie-center",
    name: "Elements at Prairie Center",
    category: "multifamily",
    location: "Brighton, Colorado",
    summary:
      "A 288-unit apartment community described as part of the region's largest geothermal system.",
    description: [
      "Elements at Prairie Center is described as a 288-unit apartment community that emphasizes a sustainable lifestyle as part of the region's largest geothermal system. Homes include one-, two-, and three-bedroom plans.",
      "The current site notes energy-saving features, wood-style flooring, open layouts, private balconies, and kitchens with granite countertops, stainless steel appliances, and islands. Community amenities listed include a swimming pool with cabanas, an off-leash dog park, and a fitness center, with Prairie Center retail nearby.",
    ],
    specs: [
      { label: "Homes", value: "288 apartments" },
      { label: "Plans", value: "1, 2, and 3 bedrooms" },
    ],
    sourcePath: "/development-portfolio/multi-family/elements-at-prairie-center-2/",
  },
  {
    slug: "darley-green",
    name: "Darley Green",
    category: "residential",
    location: "Claymont, Delaware",
    summary:
      "A Claymont community of Delaware townhomes and condominiums with access along the Northeast Corridor.",
    description: [
      "Darley Green is presented on the current site as a community of Delaware townhomes and condominiums in Claymont, with access to cities along the Northeast Corridor.",
      "Associated construction is credited to Montchanin Builders. A homeowner quote published on the current Commonwealth site describes an open floor plan and the role of the sales team from concept to completion.",
    ],
    featured: true,
    sourcePath: "/development-portfolio/residential/darley-green/",
  },
  {
    slug: "townes-at-kennett-pointe",
    name: "The Townes at Kennett Pointe",
    category: "residential",
    location: "Kennett Square, PA",
    summary:
      "Residential component listed in the current Commonwealth residential portfolio, related to Kennett Pointe.",
    sourcePath: "/development-portfolio/residential/",
  },
  {
    slug: "parke-at-foulkstone",
    name: "The Parke at Foulkstone",
    category: "residential",
    summary:
      "Residential community listed in the current Commonwealth residential portfolio.",
    sourcePath: "/development-portfolio/residential/",
  },
  {
    slug: "aspen-custom-homes",
    name: "Aspen Custom Homes",
    category: "residential",
    summary:
      "Custom home offering listed in the current Commonwealth residential portfolio.",
    sourcePath: "/development-portfolio/residential/",
  },
  {
    slug: "montchanin-builders-homesites",
    name: "Montchanin Builders, Available Homesites",
    category: "residential",
    summary:
      "Available homesites listed in the current Commonwealth residential portfolio and associated with Montchanin Builders.",
    sourcePath: "/development-portfolio/residential/",
  },
  {
    slug: "town-of-whitehall",
    name: "The Town of Whitehall",
    category: "residential",
    summary:
      "Residential community listed in the current Commonwealth residential portfolio.",
    sourcePath: "/development-portfolio/residential/",
  },
  {
    slug: "overlook-at-rockford-falls",
    name: "The Overlook at Rockford Falls",
    category: "residential",
    summary:
      "Residential community listed in the current Commonwealth residential portfolio.",
    sourcePath: "/development-portfolio/residential/",
  },
  {
    slug: "river-road-industrial-park",
    name: "River Road Industrial Park",
    category: "industrial",
    summary:
      "Industrial park listed in the current Commonwealth industrial portfolio.",
    sourcePath: "/development-portfolio/industrial/",
  },
  {
    slug: "riveredge-industrial-park",
    name: "Riveredge Industrial Park",
    category: "industrial",
    summary:
      "Industrial park identified on the firm's About page as a project where Commonwealth was the lead industrial developer.",
    description: [
      "The About page states that, as industrial developers, Commonwealth was the lead entity responsible for the Riveredge Industrial Park along with other individual projects.",
    ],
    sourcePath: "/us/",
  },
  {
    slug: "milford-industrial-park",
    name: "Milford Industrial Park",
    category: "industrial",
    location: "Milford, Delaware",
    summary:
      "Industrial park listed in the current Commonwealth industrial portfolio.",
    sourcePath: "/development-portfolio/industrial/",
  },
  {
    slug: "brewers-row-ksq",
    name: "Brewers Row KSQ",
    category: "industrial",
    location: "Kennett Square, PA",
    summary:
      "Industrial or adaptive project listed in the current Commonwealth industrial portfolio.",
    sourcePath: "/development-portfolio/industrial/",
  },
  {
    slug: "sunset-lake",
    name: "Sunset Lake, LLC",
    category: "industrial",
    summary:
      "Industrial holding listed in the current Commonwealth industrial portfolio.",
    sourcePath: "/development-portfolio/industrial/",
  },
  {
    slug: "aeropark",
    name: "AeroPark",
    category: "industrial",
    summary:
      "Industrial property listed in the current Commonwealth industrial portfolio.",
    sourcePath: "/development-portfolio/industrial/",
  },
  {
    slug: "white-horse-winery",
    name: "White Horse Winery",
    category: "family-business",
    location: "Hammonton, New Jersey",
    summary:
      "A family-owned winery in Hammonton, New Jersey, built by Brock Vinton and BJ Vinton.",
    description: [
      "White Horse Winery is a family-owned business in Hammonton, New Jersey, built by Brock Vinton and his son, BJ Vinton. The current site describes a modern winemaking facility with 19 acres planted in 10 grape varieties, including Merlot, Cabernet Franc, Chardonnay, Vidal Blanc, Chambourcin, and Albariño, with a plan to ultimately cover 60 acres.",
      "The winery produces varietal-specific New Jersey wines and special blends made with grapes from a Lodi, California family connection. The tasting room hosts events with live music.",
    ],
    featured: true,
    sourcePath: "/development-portfolio/family-business/white-horse-winery/",
  },
  {
    slug: "chaddsford-winery",
    name: "Chaddsford Winery",
    category: "family-business",
    location: "632 Baltimore Pike, Chadds Ford, PA",
    summary:
      "Historic Brandywine Valley winery acquired by the Vinton family in 2024.",
    description: [
      "In 2024, the Vinton family acquired Chaddsford Winery, described on the current site as premium winemakers with historic roots in the Brandywine Valley agricultural community. A tasting room is located in Chadds Ford, Pennsylvania.",
    ],
    featured: true,
    sourcePath: "/development-portfolio/family-business/chaddsford-winery/",
  },
];

export function getProperty(category: string, slug: string) {
  return properties.find(
    (property) => property.category === category && property.slug === slug,
  );
}

export function getPropertiesByCategory(category: CategorySlug) {
  return properties.filter((property) => property.category === category);
}

export function getFeaturedProperties() {
  return properties.filter((property) => property.featured);
}

export function getCategoryLabel(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug)?.label ?? slug;
}

export function propertyHref(property: Property) {
  return `/portfolio/${property.category}/${property.slug}`;
}
