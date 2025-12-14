"use client";

import clsx from "clsx";

export function Statement() {
  return (
    <section className="bg-background text-foreground py-20 lg:py-24">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 lg:w-32 bg-muted/10 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-24 lg:w-32 bg-muted/10 pointer-events-none" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-0 flex flex-col gap-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.5em] text-accent">
            Experience
          </p>
          <p
            className={clsx(
              "font-heading heading-tight text-3xl font-bold sm:text-4xl lg:text-5xl",
              "text-muted-foreground/65 leading-tighter max-w-4xl"
            )}
          >
            Only seven years of actively producing cool shit. Other years were me
            messing around and navigating through my career.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Statement;
