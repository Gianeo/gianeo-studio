"use client";

import { ArrowDownIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { motionTokens } from "@/system/motion-tokens";

interface IntroProps {
  className?: string;
}

export function Intro({ className = "" }: IntroProps) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const baseTransition = {
    duration: 1.1,
    ease: motionTokens.easeOut,
  };

  return (
    <section ref={sectionRef} className={`relative pb-24 z-0 bg-transparent ${className}`}>

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
              <m.p
                className="body-label text-accent"
                initial={reduceMotion ? false : { opacity: 0, y: -48 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, margin: "0px 0px -20% 0px", once: true }}
                transition={{ ...baseTransition, delay: 0 }}
              >
                Design Leadership
              </m.p>
              <m.div style={reduceMotion ? undefined : { y: parallaxY }}>
                <m.h2
                  className="heading-display text-primary"
                  initial={reduceMotion ? false : { opacity: 0, y: -80 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ amount: 0.5, margin: "0px 0px -20% 0px", once: true }}
                  transition={{ ...baseTransition, delay: 0.5 }}
                >
                  With intention, action, and care.
                </m.h2>
              </m.div>
            </div>

            <div className="md:col-start-5 xl:col-start-5 md:col-span-3 space-y-6 md:mt-24 xl:mt-32 md:pr-16">
              <m.p
                initial={reduceMotion ? false : { opacity: 0, y: -56 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, margin: "0px 0px -20% 0px", once: true }}
                transition={{ ...baseTransition, delay: 1.0 }}
              >
                You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others... not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead.
              </m.p>
              <m.p
                initial={reduceMotion ? false : { opacity: 0, y: -56 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, margin: "0px 0px -20% 0px", once: true }}
                transition={{ ...baseTransition, delay: 1.5 }}
              >
                You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
              </m.p>
            </div>

            <div className="md:col-start-8 xl:col-start-8 md:col-span-3 space-y-6 md:mt-24 xl:mt-32 md:pr-16">
              <m.p
                className="heading-sm text-secondary"
                initial={reduceMotion ? false : { opacity: 0, y: -48 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, margin: "0px 0px -20% 0px", once: true }}
                transition={{ ...baseTransition, delay: 2.0 }}
              >
                That&apos;s where I come in.
              </m.p>
              <m.p
                initial={reduceMotion ? false : { opacity: 0, y: -48 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, margin: "0px 0px -20% 0px", once: true }}
                transition={{ ...baseTransition, delay: 2.5 }}
              >
                I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.
              </m.p>
            </div>

            <div className="hidden row-start-2 col-start-1 pb-6 md:flex flex-col justify-end items-end">
              <ArrowDownIcon className="size-8 text-accent animate-bounce" />
            </div>

          </div>
    </section >
  );
}

export default Intro;
