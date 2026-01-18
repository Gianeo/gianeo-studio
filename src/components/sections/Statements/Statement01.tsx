"use client";

import clsx from "clsx";

export function Statement() {
  return (
    <section className="text-foreground py-16 md:pt-16 md:pb-40">
      <div className="relative grid grid-cols-1 md:grid-cols-12 px-6 md:px-0">
        <div className="hidden lg:block col-span-1 bg-decoration pointer-events-none" aria-hidden="true" />

        <div className="md:col-start-3 md:col-span-8 relative mx-auto w-full flex flex-col gap-4">
          <p className="body-label text-muted">
            Experience
          </p>
          <p className="heading-display text-muted/75 max-w-4xl">
            Playing at the intersection of design and technology.
          </p>
        </div>
        <div className="hidden md:block md:col-start-12 xl:col-start-11 xl:col-span-2 bg-decoration pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Statement;
