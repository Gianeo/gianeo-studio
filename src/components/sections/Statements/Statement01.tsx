"use client";

import clsx from "clsx";

export function Statement() {
  return (
    <section className="bg-background text-foreground pb-24">
      <div className="relative grid grid-cols-12">
        <div className="col-span-2 bg-muted/10 pointer-events-none" aria-hidden="true" />

        <div className="col-start-4 col-span-5 relative mx-auto w-full px-6 lg:px-0 flex flex-col gap-4">
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.5em] text-accent">
            Experience
          </p>
          <p
            className={clsx(
              "max-w-6xl font-heading heading-tight text-3xl font-bold sm:text-4xl lg:text-5xl",
              "text-muted-foreground/50 leading-tighter max-w-4xl"
            )}
          >
            Only seven years of actively producing cool shit. Other years were me
            messing around and navigating through my career.
          </p>
        </div>
        <div className="col-start-12 bg-muted/10 pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Statement;
