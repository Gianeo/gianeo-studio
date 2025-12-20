"use client";

import clsx from "clsx";

export function Statement() {
  return (
    <section className="bg-background text-foreground pb-24">
      <div className="relative grid grid-cols-12">
        <div className="col-span-1 bg-decoration pointer-events-none" aria-hidden="true" />

        <div className="col-start-3 col-span-6 relative mx-auto w-full px-6 lg:px-0 flex flex-col gap-4">
          <p className="body-label text-muted">
            Experience
          </p>
          <p className="heading-display text-muted/75 max-w-4xl">
            Merging design and technology, with obsession and care.
          </p>
        </div>
        <div className="col-start-11 col-span-2 bg-decoration pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Statement;
