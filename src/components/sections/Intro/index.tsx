"use client";

import { useMemo, useRef, type ReactNode } from "react";
import { ArrowDownIcon } from "@phosphor-icons/react";
import { springPresets } from "@/system/motion-presets";
import { m, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

interface IntroProps {
  className?: string;
}

export function Intro({ className = "" }: IntroProps) {
  const fadeOffset: NonNullable<Parameters<typeof useScroll>[0]>["offset"] = [
    "start 90%",
    "start 60%",
  ];
  const fadeSpring = useMemo(() => springPresets.soft, []);

  const FadeBlock = ({
    className = "",
    children,
  }: {
    className?: string;
    children: ReactNode;
  }) => {
    const reduceMotion = useReducedMotion();
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: fadeOffset,
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
    const smoothOpacity = useSpring(opacity, fadeSpring);

    return (
      <m.div
        ref={ref}
        className={className}
        style={reduceMotion ? undefined : { opacity: smoothOpacity, willChange: "opacity" }}
      >
        {children}
      </m.div>
    );
  };

  return (
    <section className={`relative pb-0 lg:pb-24 z-0 bg-transparent ${className}`}>

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
              <FadeBlock className="body-label text-accent">
                Design Leadership
              </FadeBlock>
              <div>
                <FadeBlock>
                  <h2 className="heading-display text-primary">
                    With intention, action, and care.
                  </h2>
                </FadeBlock>
              </div>
            </div>

            <div className="md:col-start-5 xl:col-start-5 md:col-span-3 space-y-6 md:mt-24 xl:mt-32 md:pr-16">
              <FadeBlock>
                You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others... not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead.
              </FadeBlock>
              <FadeBlock>
                You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
              </FadeBlock>
            </div>

            <div className="md:col-start-8 xl:col-start-8 md:col-span-3 space-y-6 md:mt-24 xl:mt-32 md:pr-16">
              <FadeBlock className="heading-sm text-secondary">
                That&apos;s where I come in.
              </FadeBlock>
              <FadeBlock>
                I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.
              </FadeBlock>
            </div>

            <div className="hidden row-start-2 col-start-1 pb-6 md:flex flex-col justify-end items-end">
              <ArrowDownIcon className="size-8 text-accent animate-bounce" />
            </div>

          </div>
    </section >
  );
}

export default Intro;
