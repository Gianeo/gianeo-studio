"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { LogoGf } from "@/components/logo/LogoGf";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation/Navigation";
import { ArrowDownIcon } from "@phosphor-icons/react";
import { motionTokens } from "@/system/motion-tokens";

interface HeroSectionProps {
  className?: string;
}

const whatIDo = [
  { title: "Product", description: "Creation and building" },
  { title: "User Interfaces", description: "Design and Engineering" },
  { title: "Leadership", description: "People and Performance" },
  { title: "Coaching", description: "Talent development" },
  { title: "Brand", description: "Development" },
];

const served = [
  { title: "SaaS", description: "Subscriptions, Analytics, Services" },
  { title: "Fintech", description: "Banking, Payments" },
  { title: "Ecommerce", description: "General Merchandise, Grocery" },
  { title: "0-1 to ScaleUp", description: "Best fit for" },
  { title: "Global", description: "From the US, UK, EU, to India" },
];

const history = [
  { label: "Today", company: "JustScore" },
  { label: "2020-24", company: "Chargebee" },
  { label: "2019-20", company: "Zopa Bank" },
  { label: "2019", company: "Sainsbury's Argos" },
  { label: "2010-19", company: "Ocado Technology" },
  { label: "Since 1999", company: "Freelance" },
];

export default function HeroSection({ className = "" }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const shouldReduceMotion = prefersReducedMotion || isMobile;
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "start end"],
  });

  const logoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig transition={{ duration: motionTokens.durationShort, ease: motionTokens.easeOut }}>
        <section
          ref={heroRef}
          className={`relative bg-background text-primary min-h-[160vh] md:min-h-[180vh] ${className}`}
        >
          <div className="sticky top-0 z-10">
            <Navigation />
          </div>

          <div className="h-[70vh] min-h-[calc(8rem+40px)] w-full overflow-hidden md:sticky md:top-0 md:h-screen md:min-h-[calc(10rem+40px)] lg:min-h-[calc(12rem+40px)]">
            <m.div
              className="absolute inset-0"
              style={shouldReduceMotion ? { scale: 1 } : { scale: bgScale }}
              aria-hidden="true"
            >
              <Image
                src="/images/hero/16.png"
                alt="Hero background"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-background/80" />
            </m.div>

            <m.div
              className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
              style={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: logoOpacity, y: logoY }}
            >
              <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
                <LogoGf
                  className="relative z-10 w-32 md:w-40 lg:w-48 h-auto"
                  aria-label="Gianeo Studio logo"
                />
              </div>
            </m.div>
          </div>

          <m.div
            className="relative z-30 -mt-[70vh] min-h-screen w-full flex items-end md:-mt-[110vh] md:min-h-screen"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full p-6 md:p-10 lg:px-12 space-y-12 lg:space-y-16 backdrop-blur-md bg-background/20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="col-span-12 lg:col-span-4 space-y-12 flex flex-col justify-between pb-8 lg:pb-0">
                <div className="space-y-6">
                  <p className="body-label text-muted">
                    Craftsmanship + Leadership
                  </p>
                  <h1
                    id="hero-heading"
                    className="heading-display leading-tight text-primary"
                  >
                    Design+ for growth.
                  </h1>
                </div>
                <div>
                  <Button asChild variant="accent" size="base" className="gap-2">
                    <a href="mailto:giannijfavaretto@gmail.com">
                      <span className="inline-flex size-7 items-center justify-center">
                        ↗
                      </span>
                      Hire me
                    </a>
                  </Button>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <p className="body-label text-muted">
                    What I do
                  </p>
                  <ul className="space-y-1.5">
                    {whatIDo.map((item) => (
                      <li
                        key={item.title}
                        className="border-b border-black/10 pb-2 flex flex-col last:border-0 last:pb-0 dark:border-white/8"
                      >
                        <span className="heading-sm text-secondary">
                          {item.title}
                        </span>
                        <span className="body-sm text-muted">
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden md:block space-y-6">
                  <p className="body-label text-muted">
                    Served
                  </p>
                  <ul className="space-y-1.5">
                    {served.map((item) => (
                      <li
                        key={item.title}
                        className="border-b border-black/10 pb-2 flex flex-col last:border-0 last:pb-0 dark:border-white/8"
                      >
                        <span className="heading-sm text-secondary">
                          {item.title}
                        </span>
                        <span className="body-sm text-muted">
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6 relative">
                  <p className="body-label text-muted">
                    History
                  </p>
                  <ul className="space-y-1.5">
                    {history.map((item) => (
                      <li
                        key={item.label}
                        className="border-b border-black/10 pb-2 last:border-0 last:pb-0 dark:border-white/8"
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="body-sm text-muted whitespace-nowrap">
                            {item.label}
                          </span>
                          <span className="body-sm text-secondary text-right">
                            {item.company}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ArrowDownIcon className="absolute bottom-0 size-8 right-0 text-accent animate-bounce" />
                </div>
              </div>
            </div>
            </div>
          </m.div>
        </section>
      </MotionConfig>
    </LazyMotion>
  );
}
