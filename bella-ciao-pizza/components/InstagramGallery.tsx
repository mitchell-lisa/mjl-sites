import Image from "next/image";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site-config";

const frames = [
  {
    photo: photos.oven,
    className: "col-span-2 aspect-[4/5] md:col-span-5 md:aspect-[3/4]",
    sizes: "(min-width: 768px) 40vw, 100vw",
  },
  {
    photo: photos.zingaro,
    className: "aspect-square md:col-span-3",
    sizes: "(min-width: 768px) 24vw, 50vw",
  },
  {
    photo: photos.volcano,
    className: "aspect-[4/5] md:col-span-4",
    sizes: "(min-width: 768px) 32vw, 50vw",
  },
] as const;

export function InstagramGallery() {
  return (
    <section className="mx-auto max-w-page px-5 py-16 sm:px-8 lg:py-24" aria-labelledby="instagram-title">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Instagram
          </p>
          <h2 id="instagram-title" className="mt-3 font-display text-4xl font-medium sm:text-5xl">
            The truck, the oven, the pies.
          </h2>
        </div>
        <a
          href={site.instagramUrl}
          className="btn btn-line-dark"
          rel="noopener noreferrer"
          target="_blank"
        >
          {site.instagramHandle}
        </a>
      </div>
      <ul className="mt-8 grid grid-cols-2 items-end gap-3 md:grid-cols-12">
        {frames.map((frame) => (
          <li key={frame.photo.src} className={`relative overflow-hidden bg-flour ${frame.className}`}>
            <Image
              src={frame.photo.src}
              alt={frame.photo.alt}
              fill
              sizes={frame.sizes}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
