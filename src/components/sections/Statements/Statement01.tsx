"use client";

import clsx from "clsx";

export function Statement() {
  return (
    <section className="bg-background text-foreground pb-24">
      <div className="relative grid grid-cols-12">
        <div className="col-span-2 bg-muted pointer-events-none" aria-hidden="true" />

        <div className="col-start-4 col-span-5 relative mx-auto w-full px-6 lg:px-0 flex flex-col gap-4">
          <p className="body-label text-primary">
            Experience
          </p>
          <p className="heading-display max-w-4xl">
            Merging design and technology, with obsession and care.
          </p>
        </div>
        <div className="col-start-12 bg-muted pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Statement;
