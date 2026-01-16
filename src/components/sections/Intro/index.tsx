"use client";

import { ArrowDownIcon } from "@phosphor-icons/react";
import ClientsLogos from "../ClientsLogos";
import Image from "next/image";

export function Intro() {
  return (
    <section className="bg-background pt-8">
      <div className="flex flex-col">
        <div className="space-y-6 py-1">
          <ClientsLogos />
        </div>

        <div className="relative pt-8">

          <div className="absolute inset-0">
            <Image
              src="/images/hero/14.png"
              alt="Hero background"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-background/90" />
          </div>
          <div className="grid grid-cols-12 body-base text-muted space-y-8 md:pt-24 relative">

            <div className="col-start-2 md:col-start-5 xl:col-start-8 col-span-10 md:col-span-7 lg:col-span-5 xl:col-span-4 space-y-8 max-w-lg pt-24">
              <p className="body-label text-accent">Design Leadership</p>
              <h2 className="heading-base text-primary">With intention, precision, and care.</h2>
            </div>

            <div className="col-start-5 col-span-3 space-y-6 mt-40 pr-24">
              <p>
                You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others... not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead.
              </p>
              <p>
                You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
              </p>
            </div>

            <div className="col-start-8 col-span-3 space-y-6 mt-40 pr-24">
              <p className="heading-sm text-secondary">That&apos;s where I come in.</p>
              <p>
                I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.
              </p>
            </div>
          </div>

          <div className="hidden row-start-1 col-start-1 px-6 md:px-12 pb-8 md:flex flex-col justify-end">
            <ArrowDownIcon className="size-8 text-accent animate-bounce" />
          </div>
        </div>
      </div>
    </section >
  );
}

export default Intro;
