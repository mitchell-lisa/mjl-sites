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

Share URL: https://mjl-commonwealth-group.vercel.app

Root Directory is `commonwealth-group`. The preview banner and `noindex` / `robots.txt` disallow stay on. The header uses the live Commonwealth logo (maroon frame, stacked serif lockup). The footer uses a vector wordmark on black so the 254×88 raster lockup is not upscaled.

## Pages

- `/` Home
- `/available-properties` Availability handled by the Wilmington office
- `/portfolio` All properties, grouped by asset type, with listing galleries
- `/portfolio/{office|multifamily|residential|industrial|family-business}`
- `/portfolio/{type}/{slug}` Property pages
- `/development`
- `/management`
- `/management/marketing-leasing`
- `/management/acquisitions-disposition`
- `/montchanin-builders` plus link to [move-in ready](https://montchaninbuilders.net/move-in-ready/)
- `/clients` Named client list; no invented logos
- `/about` Restored firm story
- `/leadership` Management-team biographies and published headshots
- `/contact` Phone, email, and a mailto form

A preview banner reads that this is a sample redesign. The site sends `noindex`. There is no sticky CALL/INQUIRE bar.

## Facts used

Copy, service lists, property names, and client names come from the live site. No listings, awards, services, or metrics were invented. Where a WordPress listing page is broken or empty, the property is named only.

Photographs come from the matching listing page on commonwealthltd.net. Leadership portraits are the published headshots for Brock J. Vinton, Donald S. Robitzer, Jr., Timothy L. Jones, Kyle Holmbeck, and Kevin M. Quinn.

## Contact

- Phone: 302.472.7200
- Email published on the live site: drobitzer@commonwealthltd.net
- Headquarters listed on the live Commonwealth Building page: 300 Water Street, Wilmington, DE 19801
