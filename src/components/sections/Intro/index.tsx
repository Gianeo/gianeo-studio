"use client";

import ClientsLogos from "../ClientsLogos";

export function Intro() {
  return (
    <section className="bg-background py-8 lg:py-8">
      <div className="flex flex-col px-6 lg:px-0 pt-6">
        <div className="space-y-6">
          <ClientsLogos />
        </div>

        <div className="grid grid-cols-12 body-base text-muted mt-6 space-y-8 py-24">
          <div className="col-start-7 col-span-4 space-y-8">
            <p className="body-label text-accent">Why me</p>
            <h2 className="heading-display text-primary">With intention, precision, and care.</h2>
          </div>
          <div className="row-start-2 col-start-7 col-span-4 space-y-8">
            <p className="">
              You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others... not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead.
            </p>
          </div>
          <p className="row-start-3 col-start-7 col-span-4">
            You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
          </p>
          <p className="row-start-4 col-start-7 col-span-4 space-y-8">
            <span className="heading-sm block text-secondary">That&apos;s where I come in.</span>
            <span>I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.</span>
          </p>
          <div className="row-start-4 col-start-4 col-span-1 flex flex-col justify-end">
            <div className="h-0.5 bg-neutral-lighter dark:bg-neutral-darker mb-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
