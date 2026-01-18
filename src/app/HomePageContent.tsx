"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { motionTokens } from "@/system/motion-tokens";
import { LogoGf } from "@/components/logo/LogoGf";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Statement from "@/components/sections/Statements/Statement01";
import ProductShowcase from "@/components/sections/ProductShowcase";
import WorkHistory from "@/components/sections/WorkHistory";
import PersonalProfile from "@/components/sections/Profile";

export default function HomePageContent() {
  const prefersReducedMotion = useReducedMotion();
  const [viewportHeight, setViewportHeight] = useState(1);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateHeight = () => setViewportHeight(window.innerHeight || 1);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const logoOpacity = useTransform(scrollY, [0, viewportHeight * 0.75], [1, 0]);
  const logoY = useTransform(scrollY, [0, viewportHeight], [0, -8]);
  const logoScale = useTransform(scrollY, [0, viewportHeight * 0.75], [1, 0.7]);
  const bgScale = useTransform(scrollY, [0, viewportHeight], [1, 1.02]);
  const logosProgress = useTransform(scrollY, [0, viewportHeight * 0.75], [0, 1]);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig transition={{ duration: motionTokens.durationShort, ease: motionTokens.easeOut }}>
        <div className="relative">
          <div className="fixed inset-0 z-0 pointer-events-none">
            <m.div
              className="absolute inset-0"
              style={prefersReducedMotion ? { scale: 1 } : { scale: bgScale }}
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

            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <m.div
                className="relative w-full max-w-5xl aspect-video flex items-center justify-center"
                style={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: logoOpacity, y: logoY, scale: logoScale, transformOrigin: "center", willChange: "transform, opacity" }
                }
              >
                <LogoGf
                  className="relative z-10 w-32 md:w-40 lg:w-48 h-auto"
                  aria-label="Gianeo Studio logo"
                />
              </m.div>
            </div>
          </div>

          <div className="relative z-10">
            <section
              id="hero"
              aria-labelledby="hero-heading"
              role="region"
              aria-label="Introduction and overview"
            >
              <Hero />
            </section>

            <main
              id="main-content"
              role="main"
              className="space-y-8 lg:space-y-32 pb-24 px-0"
            >
              <section
                id="intro"
                aria-label="Intro overview"
                role="region"
              >
                <Intro logosProgress={logosProgress} />
              </section>

              <section
                id="statement"
                aria-label="Statement"
                role="region"
              >
                <Statement />
              </section>

              <section
                id="product-showcase"
                aria-labelledby="products-heading"
                role="region"
                aria-label="Featured product work and case studies"
              >
                <h2 id="products-heading" className="sr-only">
                  Featured Product Work
                </h2>
                <ProductShowcase />
              </section>

              <section
                id="history"
                aria-labelledby="history-heading"
                role="region"
                aria-label="History"
              >
                <h2 id="history-heading" className="sr-only">
                  History
                </h2>
                <WorkHistory />
              </section>

              <section
                id="profile"
                aria-labelledby="profile-heading"
                role="region"
                aria-label="Personal background and philosophy"
              >
                <h2 id="profile-heading" className="sr-only">
                  Personal Profile and Background
                </h2>
                <PersonalProfile />
              </section>
            </main>
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
