# SHQ Properties, sample redesign

Warm Spec preview remake of [shqproperties.com](https://shqproperties.com) for Mitchell Lisa to text to a warm lead.

This is **not** Spec-50 cold outreach. It is **not** the official SHQ Properties website.

## Open the site

```bash
cd mjl-shq-properties
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

Intended production alias: https://mjl-shq-properties.vercel.app

Vercel project name: `mjl-shq-properties`. Root Directory is `mjl-shq-properties`.

The preview banner and `noindex` / `robots.txt` disallow stay on.

## Deploy from this box

If `VERCEL_TOKEN` is available:

```bash
cd mjl-shq-properties
npm run deploy
```

`scripts/deploy.sh` creates or updates the Vercel project `mjl-shq-properties` and tries to attach the production alias `mjl-shq-properties.vercel.app`.

If credentials are missing, run the same script on a machine that is logged into Vercel, or:

```bash
cd mjl-shq-properties
npx vercel --yes --prod --name mjl-shq-properties
npx vercel alias set <deployment-url> mjl-shq-properties.vercel.app
```

## Facts used

Copy comes from the live SHQ site and the warm-Spec brief. No listings, awards, addresses, or cash-offer step names were invented. The live site mentions an 8-step process without publishing the steps, so this preview says that and points to phone/email.

Photographs and the logo are the uploaded SHQ assets.

## Contact

- Phone: (856) 488-8070 / `tel:+18564888070`
- Email: administration@shqproperties.com
- Facebook: https://www.facebook.com/shqproperties/
- Instagram: https://www.instagram.com/shqproperties/
- Sister company: [Constructora HBL](https://constructorahbl.com)
