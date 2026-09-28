"use client";

import { useState } from "react";
import { pieByName } from "@/lib/menu";

type Town = {
  name: string;
  x: number;
  y: number;
};

/**
 * Positions are lon/lat projected onto the silhouette.
 * Northwest towns sit close together because they are close on the coast.
 */
const towns: Town[] = [
  { name: "Trapani", x: 84.8, y: 139.4 },
  { name: "Terrasini", x: 182.5, y: 110.1 },
  { name: "Cinisi", x: 186.8, y: 107 },
  { name: "Carini", x: 199.7, y: 113.1 },
  { name: "Montelepre", x: 198.1, y: 122.8 },
  { name: "Palermo", x: 230.2, y: 116.9 },
  { name: "Cefalu", x: 343.8, y: 134.4 },
  { name: "Taormina", x: 560.7, y: 176.8 },
  { name: "Catania", x: 526.7, y: 254.8 },
];

const silhouette =
  "M73.8,188.6 L82.4,154.6 L103,131.9 L125.3,104.7 L168.2,102.4 L199.2,97.9 L230.1,102.4 L262.7,118.3 L305.6,125.1 L343.4,131.9 L391.5,138.7 L434.5,125.1 L486,107 L537.5,93.3 L580.5,84.3 L623.4,82 L606.2,120.6 L571.9,177.2 L546.1,229.4 L528.9,256.6 L537.5,301.9 L549.6,347.3 L537.5,404 L535.8,451.6 L494.6,433.5 L434.5,404 L382.9,358.6 L331.4,347.3 L288.5,324.6 L254.1,297.4 L202.6,267.9 L159.6,245.3 L116.7,222.6 L82.4,199.9 L73.8,188.6 Z";

export function SicilyMap() {
  const [locked, setLocked] = useState("Palermo");
  const [hover, setHover] = useState<string | null>(null);
  const activeName = hover ?? locked;
  const pie = pieByName(activeName);

  return (
    <section className="mx-auto max-w-page px-5 py-16 sm:px-8 lg:py-24" aria-labelledby="sicily-map-title">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.7fr)] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            37° N to 38° N
          </p>
          <h2 id="sicily-map-title" className="mt-3 font-display text-4xl font-medium leading-none sm:text-5xl">
            The towns on the board
          </h2>
          <p className="mt-4 max-w-xl text-mute">
            A simple silhouette of Sicily. Choose a town and the matching pie opens beside it.
          </p>
          <div className="mt-6 border border-ink/15 bg-flour p-3 sm:p-5">
            <svg
              viewBox="0 0 680 520"
              role="img"
              aria-label="Simplified map of Sicily with pie towns marked"
              className="h-auto w-full"
            >
              <path d={silhouette} fill="#e7dccb" stroke="#17130f" strokeWidth="1.25" />
              {towns.map((town) => {
                const selected = town.name === activeName;
                return (
                  <g key={town.name}>
                    <circle
                      cx={town.x}
                      cy={town.y}
                      r={selected ? 7 : 4.5}
                      fill={selected ? "#8f2e2a" : "#6b4a1e"}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2" role="group" aria-label="Sicilian towns">
            {towns.map((town) => {
              const selected = town.name === activeName;
              return (
                <button
                  key={town.name}
                  id={`town-${town.name}`}
                  type="button"
                  aria-pressed={selected}
                  className={`map-town min-h-12 px-3 text-left text-sm font-semibold uppercase tracking-[0.12em] ${
                    selected ? "bg-ink text-cream" : "bg-white text-ink hover:bg-flour"
                  }`}
                  onMouseEnter={() => setHover(town.name)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(town.name)}
                  onBlur={() => setHover(null)}
                  onClick={() => setLocked(town.name)}
                >
                  {town.name}
                </button>
              );
            })}
          </div>
          <div aria-live="polite" className="mt-5 border-t border-ink/15 pt-5">
            {pie ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  {pie.number} · {activeName}
                </p>
                <p className="mt-2 font-display text-4xl font-medium">{pie.name}</p>
                <p className="mt-2 leading-relaxed text-mute">{pie.ingredients.join(" · ")}</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
