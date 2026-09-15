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

## Live preview

Public Vercel preview (anonymous, claim to keep):

- Site: https://temporary-nimble-lyra-28vilul.vercel.app
- Claim to Mitchell's Vercel account: https://vercel.com/claim-deployment?code=856d5554-8eca-4103-8616-f922f549b6fe

Root Directory for a permanent Vercel project must be `commonwealth-group`. Import `mitchell-lisa/mjl-sites` in Vercel, set that root, and the next production URL will look like the other MJL samples (`*.vercel.app`).

The preview banner and `noindex` / `robots.txt` disallow stay on.

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
