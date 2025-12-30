"use client";

import { ArrowDownIcon } from "@phosphor-icons/react";
import ClientsLogos from "../ClientsLogos";
import Image from "next/image";

export function Intro() {
  return (
    <section className="bg-background py-8">
      <div className="flex flex-col pt-6">
        <div className="space-y-6">
          <ClientsLogos />
        </div>

        <div className="grid grid-cols-12 body-base text-muted mt-6 space-y-8 md:py-24">
          {/* <div className="row-start-1 row-span-4 relative">
            <div className="relative w-[500px] aspect-3/4 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/abstract/intro.avif"
                alt="Portrait"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />

              <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]" />
            </div>
          </div> */}

          <div className="col-start-2 md:col-start-5 xl:col-start-7 col-span-10 md:col-span-7 lg:col-span-5 xl:col-span-4 space-y-8 max-w-lg">
            <p className="body-label text-accent">Why me</p>
            <h2 className="heading-base text-primary">With intention, precision, and care.</h2>
            <p>
              You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others... not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead.
            </p>
            <p>
              You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
            </p>
            <p className="heading-sm text-secondary">That&apos;s where I come in.</p>
            <p>
              I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.
            </p>
          </div>
          <div className="hidden row-start-1 col-start-3 col-span-1 xl:flex flex-col justify-end">
            <div className="size-24 bg-decoration"></div>
          </div>
          <div className="hidden row-start-1 col-start-1 px-6 md:px-12 pb-8 md:flex flex-col justify-end">
            <ArrowDownIcon className="size-8 text-accent " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
