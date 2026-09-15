# The Commonwealth Group, sample redesign

Institutional sample redesign of [commonwealthltd.net](https://commonwealthltd.net) for Mitchell Lisa to share with Kyle Holmbeck (CFO) ahead of an insurance and risk workshop.

This is a relationship preview. It is **not** Spec-50 cold outreach. It is **not affiliated** with The Commonwealth Group.

## Open the site

```bash
cd commonwealth-group
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Deploy on Vercel

This repo did not already have a Vercel project pattern. The app is a standard Next.js 16 site.

1. Import `mitchell-lisa/mjl-sites` in Vercel.
2. Set **Root Directory** to `commonwealth-group`.
3. Framework preset: Next.js. Build command: `npm run build`. Output: default.
4. After the GitHub integration is connected, this branch should receive a preview URL automatically.

## Pages

- `/` Home
- `/portfolio` All properties, grouped by asset type
- `/portfolio/{office|multifamily|residential|industrial|family-business}`
- `/portfolio/{type}/{slug}` Property pages
- `/about` Restored firm story (the live About URL currently errors)
- `/leadership` Published management-team biographies
- `/contact` Phone, email, and a mailto form

A preview banner reads: “Sample redesign for The Commonwealth Group. Not affiliated. Preview only.” The site sends `noindex`.

## Facts used

Copy and property names come from the live site and the brief. No listings, awards, or metrics were invented. Where a WordPress listing page is broken or empty, the property is named only.

Photographs are atmospheric Unsplash images used as category imagery. They are not photographs of Commonwealth buildings. Leadership cards use initials, not generated portraits.

Optional quote: the Darley Green homeowner line published on the current site, attributed to Milton D.

## Contact

- Phone: 302.472.7200
- Email published on the live site: drobitzer@commonwealthltd.net
- Headquarters listed on the live Commonwealth Building page: 300 Water Street, Wilmington, DE 19801
