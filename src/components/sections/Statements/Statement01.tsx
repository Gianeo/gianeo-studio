"use client";

import clsx from "clsx";

export function Statement() {
  return (
    <section className="bg-background text-foreground pb-24">
      <div className="relative grid grid-cols-12">
        <div className="col-span-2 bg-muted pointer-events-none" aria-hidden="true" />

        <div className="col-start-4 col-span-5 relative mx-auto w-full px-6 lg:px-0 flex flex-col gap-4">
          <p className="body-label text-accent">
            Experience
          </p>
          <p className="heading-display max-w-4xl">
            Only seven years of actively producing cool shit. Other years were me
            messing around and navigating through my career.
          </p>
        </div>
        <div className="col-start-12 bg-muted pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Statement;
