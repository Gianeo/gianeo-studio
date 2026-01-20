"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { BlindReveal, Reveal } from "@/components/motion";
import { getRevealSequence, revealPresets, springPresets } from "@/system/motion-presets";
import { useRevealSequence } from "@/hooks/useRevealSequence";

export function Statement() {
  const reduceMotion = useReducedMotion();
  const revealBase = useMotionValue(0);
  const revealProgress = useSpring(revealBase, springPresets.calm);
  const statementSequence = getRevealSequence("statement");
  const { getStart } = useRevealSequence(statementSequence, revealPresets.slow.range);
  const totalSlots = 3;
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.4,
    margin: "0px 0px -20% 0px",
    once: true,
  });

  useEffect(() => {
    if (reduceMotion || isInView) {
      revealBase.set(1);
    }
  }, [isInView, reduceMotion, revealBase]);

  return (
    <section ref={sectionRef} className="text-foreground py-16 md:pt-16 md:pb-40">
      <div className="relative grid grid-cols-1 md:grid-cols-12 px-6 md:px-0">

        {/* Decoration 1 */}
        <BlindReveal
          className="hidden lg:block col-span-1 bg-decoration pointer-events-none"
          index={0}
          total={totalSlots}
          progress={revealProgress}
        >
          <div className="h-full w-full" aria-hidden="true" />
        </BlindReveal>

        {/* main content */}
        <div className="md:col-start-3 md:col-span-8 relative mx-auto w-full flex flex-col gap-4">
          <Reveal
            className="body-label text-muted"
            preset="slow"
            spring="calm"
            start={getStart("tag")}
            progress={revealProgress}
          >
            Experience
          </Reveal>
          <Reveal
            className="heading-display text-muted/75 max-w-4xl"
            preset="slow"
            spring="calm"
            start={getStart("title")}
            progress={revealProgress}
          >
            Playing at the intersection of design and technology.
          </Reveal>
        </div>

        {/* Decoration 2 */}
        <BlindReveal
          className="hidden md:block md:col-start-12 xl:col-start-11 xl:col-span-2 bg-decoration pointer-events-none"
          index={2}
          total={totalSlots}
          progress={revealProgress}
        >
          <div className="h-full w-full" aria-hidden="true" />
        </BlindReveal>
      </div>
    </section>
  );
}

export default Statement;
