"use client";

import { SectionIntro } from "@/components/primitives/SectionIntro";
import ClientsLogos from "../ClientsLogos";

export function Intro() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid w-full grid-cols-1 lg:grid-cols-12 px-6 lg:px-0 pt-6">
        <div className="lg:col-span-8 space-y-6">
          <ClientsLogos />
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center lg:px-12 xl:px-16 2xl:px-24">
          <div className="space-y-6 max-w-sm md:mx-auto">
            <p className="body-label text-accent">Why me</p>
            <SectionIntro
              eyebrow={null}
              title="With intention, precision, and care."
              description={(
                <div className="space-y-4 body-base mt-6">
                  <p>
                    You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others... not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead.
                  </p>
                  <p>
                    You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
                  </p>
                  <p className="heading-sm">That&apos;s where I come in.</p>
                  <p>
                    I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.
                  </p>
                </div>
              )}
              titleClassName="heading-display"
              className="space-y-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
