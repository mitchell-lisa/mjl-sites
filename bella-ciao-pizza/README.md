# Bella Ciao Pizza

Mobile wood-fired pizza site for Bella Ciao Pizza LLC. Preview by default. This folder is the Next.js app.

## Run

```bash
cd bella-ciao-pizza
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Modes

`NEXT_PUBLIC_SITE_MODE=preview` is the default. Preview shows the MJL banner and footer credit, and the site is `noindex`. Set `NEXT_PUBLIC_SITE_MODE=production` to remove that language and allow indexing.

See `.env.example` for the booking email variables. Do not commit secrets. Do not deploy this folder to Vercel production from an unconfirmed pass.

## Contact on the site

- Phone: (732) 309-3034
- Email: bellaciaopizzallc@gmail.com
- Instagram: [@bellaciaopizzallc](https://www.instagram.com/bellaciaopizzallc/)

No street address is published. Service area, a second phone number, fees, and the family story are flagged in `AUDIT.md`.
