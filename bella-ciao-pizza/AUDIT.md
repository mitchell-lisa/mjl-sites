# Bella Ciao Pizza audit

Snapshot check, 28 Sep 2026. The live tarball’s `bella-ciao-pizza/` tree matches this branch file for file, including `public/logo.png`, the oven photo, and the Zingaro and Volcano pies. The only source difference is `.gitignore`: the live copy also lists `.env*.local` (already covered here by `.env*`; the explicit line is kept). `bella-preview/` was not on the site. Those logo proofs, menu-board scans, and the pizza collage are now in `brand-archive/` so they are not lost. The public mark stays the transparent lockup that is already live (`prod-logo-now.png` / `logo-transparent.png`).

## 1. What to preserve

- The business is a mobile wood-fired operation, not a dining room. The hero idea “Wood-fired pizza that comes to you.” is the right promise.
- Verified pie names and topping lists: Zingaro, Carini, Cinisi, Baaria, Terrasini, Cefalu, Taormina, Montelepre, Palermo, Catania, Sanpieri, Trapani, Volcano. No prices were ever published in this repo.
- Real photographs only: wood oven and peel, Zingaro, Volcano. The Trinacria lockup (gold script, black field, “Est. 2021”, “Handcrafted Pizza”).
- Phone already on the preview: (732) 309-3034. Email: bellaciaopizzallc@gmail.com. Instagram: @bellaciaopizzallc.
- Preview posture: MJL Collective disclaimer, and noindex until someone deliberately ships production mode.
- Booking still happens with a person. The phone stays next to the form.

## 2. What feels generic

- Basil green buttons, Playfair + DM Sans, and a three-column card grid read as a concept template. Green plus red would also slide into flag branding. The truck is black, gold, brick, fire, and cream.
- “Guest” review cards, identical event cards, and a basil band for the closing call to action.
- One long homepage with hash links. Search has nothing to rank for catering, weddings, or the menu.
- Copy hedges (“and more”) and a few stock phrases (“crisp undercarriage”) instead of the arrival, the fire, and pies coming out in front of people.

## 3. What feels unfinished

- No booking form, no event calendar, no story or people structure, no per-route metadata.
- Service area is asserted as Dayton, South Brunswick, and Central Jersey in the same breath as a street address.
- Reviews have no names, no platform, and no star rating on the page.
- Dietary line promises vegan and gluten-free without a limit.
- Footer says the preview has no forms, which will be false after this pass.
- Only three photographs, so the layout has to crop them differently instead of pretending there is a full shoot.

## 4. Conflicts that need owner confirmation

Do not treat any of these as settled.

- **Phone.** This site keeps (732) 309-3034, the number on the current preview, MapQuest, MenuPix, and Yahoo Local. Restaurantji lists (732) 718-7703 for the same Somerset listing. Both stay flagged. The second number is not published.
- **Base and address.** The previous preview printed 1601 Blossom Circle, Dayton, NJ 08810. That street is removed from the site, metadata, JSON-LD, and the README. Public listings instead use 1613 NJ-27 / State Route 27 / Highway 27, Somerset, NJ 08873. Dayton, South Brunswick, Central Jersey, and Somerset / Route 27 all appear in the source material. None of them is published as the base. No street address is published.
- **Service area and radius.** Unknown. The public line is “New Jersey,” marked unconfirmed, until the owners pick towns or a radius.
- **Hours.** Yahoo, Restaurantji, and other listings disagree, and a mobile truck’s parked hours are not the same as event hours. Hours are not published.
- **Travel fees, minimums, capacity.** Not in the repo. Not invented.
- **Dietary.** The old line said vegan and gluten-free options. Public copy is now limited to “Vegan options available.” and “Gluten-free options may be available by advance request.” Plus a no-guarantee line. Still needs a yes or no from the owners.
- **Menu and prices.** Toppings are the verified list. Prices are absent on purpose.
- **People and origin.** The repo and snapshot do not say why the name is Bella Ciao, where the family is from, why towns name the pies, who designed the truck art, or who works the oven. Francesco Russo does not appear in the repo or the snapshot. A Whit article (16 Sep 2026) quotes Giovanna Russo as an operator at the Glassboro festival. She is not added to the site.
- **Events.** One past appearance is sourced: Saint Anthony’s Italian Festival, Glassboro, 12 Sep 2026, festival hours 2:00 PM to 10:00 PM, reported by The Whit. The borough’s own vendor list for that date does not name Bella Ciao, so the owner should confirm the credit stays. No upcoming date was verifiable. The homepage shows the empty state and points to Instagram.
- **Reviews.** Restaurantji repeats the old anonymous lines and does not name the writers. Yelp snippets name Anna H. and Tim C., but the public excerpts are cut off or do not show a per-review star count. Those are not published. The review block is behind `reviews.show` until someone can supply name, platform, stars, and the exact words.
- **Official URL.** No owned domain is in the repo. `NEXT_PUBLIC_SITE_URL` defaults to the Vercel preview host.

## 5. Planned changes

- One config module for public facts, flags, preview copy, and the unpublished gaps.
- Routes: `/`, `/pies`, `/events`, `/story`, `/book`. Nav: Pies, Events, Our Story, Find Us. Primary action: Book the truck.
- Brand system from the truck: charcoal, flour cream, aged gold, a little tomato, brick. Bodoni Moda for display, Source Sans 3 for UI. No flag green, no icon cards, no fake people.
- Editorial numbered menu, Sicily map tied to real pies, process crops of the real photos, event types flagged unconfirmed, Instagram gallery from local files.
- Booking form with labels, errors, honeypot, time check, and Resend when `RESEND_API_KEY` and `BOOKING_TO_EMAIL` are set.
- `NEXT_PUBLIC_SITE_MODE=preview|production`, preview by default. Preview banner and footer credit only in preview. Preview noindex. Production can be indexed.
- JSON-LD without a street address. Sitemap and robots follow the mode.
- One verified past event in `data/events.ts`. Upcoming dates stay empty until the owners add them.
