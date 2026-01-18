"use client";

import { ArrowDownIcon } from "@phosphor-icons/react";
import ClientsLogos from "../ClientsLogos";
import Image from "next/image";
import type { MotionValue } from "motion/react";

interface IntroProps {
  className?: string;
  logosProgress?: MotionValue<number>;
}

export function Intro({ className = "", logosProgress }: IntroProps) {
  return (
    <section className={`relative z-0 bg-transparent ${className}`}>
      <div className="flex flex-col">
        <div className="space-y-6">
          <ClientsLogos animationProgress={logosProgress} />
        </div>

        <div className="relative pt-8 pb-24">

          {/* <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/hero/14.png"
              alt="Hero background"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-background/20" />
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-12 body-base text-muted space-y-8 px-6 md:px-0 md:pt-24 relative">

            <div className="md:col-start-8 xl:col-start-8 md:col-span-7 xl:col-span-4 space-y-8 max-w-xl md:pt-8 xl:pt-24">
              <p className="body-label text-accent">Design Leadership</p>
              <h2 className="heading-display text-primary">With intention, action, and care.</h2>
            </div>

            <div className="md:col-start-5 xl:col-start-5 md:col-span-3 space-y-6 md:mt-24 xl:mt-32 md:pr-16">
              <p>
                You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others... not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead.
              </p>
              <p>
                You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
              </p>
            </div>

            <div className="md:col-start-8 xl:col-start-8 md:col-span-3 space-y-6 md:mt-24 xl:mt-32 md:pr-16">
              <p className="heading-sm text-secondary">That&apos;s where I come in.</p>
              <p>
                I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.
              </p>
            </div>

            <div className="hidden row-start-2 col-start-1 pb-6 md:flex flex-col justify-end items-end">
              <ArrowDownIcon className="size-8 text-accent animate-bounce" />
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}

export default Intro;
