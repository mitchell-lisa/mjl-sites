'use client';

import { useState } from 'react';
import site from '@/site.config';

export default function PreviewBanner() {
  const [shown, setShown] = useState(true);
  if (site.status !== 'demo' || !shown) return null;
  return (
    <div className="bg-ink text-white text-[13px] leading-snug">
      <div className="mx-auto max-w-measure px-5 py-2 flex items-start justify-between gap-4">
        <p className="m-0">
          Preview built by MJL Collective. This is not the official{' '}
          {site.office.shortName} website.
        </p>
        <button
          type="button"
          onClick={() => setShown(false)}
          aria-label="Hide the preview notice"
          className="shrink-0 px-2 py-1 -my-1 text-white/70 hover:text-white"
        >
          Hide
        </button>
      </div>
    </div>
  );
}
