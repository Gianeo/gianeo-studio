"use client";

import Image from "next/image";
import { memo } from "react";
import { LogoGf } from "@/components/logo/LogoGf";

interface HeroSectionProps {
  className?: string;
}

const collageImages = [
  {
    id: "collage-1",
    src: "/images/work/intro/1.webp",
    alt: "Product dashboards and analytics overview",
    className: "left-[8%] top-[16%] w-[28%] md:w-[26%]",
  },
  {
    id: "collage-2",
    src: "/images/work/intro/2.webp",
    alt: "Mobile UI detail and interaction sample",
    className: "left-[36%] top-[8%] w-[30%] md:w-[28%]",
  },
  {
    id: "collage-3",
    src: "/images/work/intro/3.webp",
    alt: "Ecommerce experience and product grid",
    className: "left-[54%] top-[32%] w-[30%] md:w-[28%]",
  },
];

const floatingBlocks = [
  { id: "block-1", className: "left-[3%] top-[24%] size-10 md:size-12" },
  { id: "block-2", className: "left-[18%] top-[8%] size-5 md:size-6" },
  { id: "block-3", className: "right-[6%] top-[18%] size-8 md:size-10" },
  { id: "block-4", className: "right-[2%] top-[48%] size-7 md:size-8" },
  { id: "block-5", className: "left-[4%] bottom-[18%] size-9 md:size-10" },
  { id: "block-6", className: "right-[22%] bottom-[14%] size-9 md:size-10" },
];

const whatIDo = [
  { title: "Product", description: "Creation and building" },
  { title: "Leadership", description: "People and Performance Management" },
  { title: "User Interfaces", description: "Design and Engineering" },
  { title: "Coaching", description: "Talent development" },
  { title: "Brand", description: "Development" },
];

const served = [
  { title: "SaaS", description: "Subscriptions, Analytics, Services" },
  { title: "Fintech", description: "Banking, Payments" },
  { title: "Ecommerce", description: "General Merchandise, Grocery" },
  { title: "0-1, ScaleUp", description: "Best fit for" },
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

const Collage = memo(() => (
  <div
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
    aria-hidden="true"
  >
    <div className="relative w-[1100px] max-w-[94vw] aspect-[5/4]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white blur-[120px] dark:from-white/[0.06] dark:via-transparent dark:to-[#050507]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/5 to-transparent mix-blend-screen dark:from-white/[0.05] dark:via-white/[0.04] dark:to-transparent" />

      {collageImages.map((image) => (
        <div
          key={image.id}
          className={`absolute rounded-lg overflow-hidden shadow-xl shadow-black/20 dark:shadow-2xl dark:shadow-black/50 backdrop-blur-sm border border-black/5 dark:border-white/5 ${image.className}`}
        >
          <div className="relative w-full pb-[72%]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 320px, 40vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[360px] md:w-[420px] h-[360px] md:h-[420px] rounded-full bg-neutral-900/12 blur-[120px] dark:bg-white/10" />
        <LogoGf
          className="relative w-32 md:w-44 lg:w-56 h-auto opacity-90 drop-shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
          aria-label="Gianni Favaretto mark"
        />
      </div>
    </div>
  </div>
));

Collage.displayName = "Collage";

const FloatingBlocks = memo(() => (
  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
    {floatingBlocks.map((block) => (
      <span
        key={block.id}
        className={`absolute rounded-sm bg-neutral-900/8 mix-blend-screen backdrop-blur-[1px] dark:bg-white/5 ${block.className}`}
      />
    ))}
  </div>
));

FloatingBlocks.displayName = "FloatingBlocks";

export default function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-background text-foreground dark:bg-[#050507] dark:text-white min-h-screen flex items-end pb-16 lg:pb-24 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,0,0,0.08),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(0,0,0,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,245,247,0.95))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.04),transparent_24%),linear-gradient(180deg,rgba(5,5,7,0.8),rgba(5,5,7,0.95))]" />

      <FloatingBlocks />
      <Collage />

      <div className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-10 lg:px-12 space-y-12 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          <div className="space-y-8">
            <p className="text-sm font-mono uppercase tracking-[0.34em] text-neutral-600 dark:text-white/50">
              Gianni G. Favaretto
            </p>
            <h1
              id="hero-heading"
              className="font-heading font-semibold heading-tight text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground dark:text-white"
            >
              Design+ expertise for growth.
            </h1>
            <a
              href="mailto:giannijfavaretto@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-[#ff1957] px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-[0_10px_40px_rgba(255,25,87,0.35)] transition hover:translate-y-[-1px] hover:shadow-[0_12px_42px_rgba(255,25,87,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="inline-flex size-7 items-center justify-center rounded-full border border-black/10 text-xs dark:border-white/30">
                ↗
              </span>
              Get in touch
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-mono uppercase tracking-[0.5em] text-neutral-600 dark:text-white/50">
              What I do
            </p>
            <ul className="space-y-2">
              {whatIDo.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-black/10 pb-3 flex flex-col gap-1 last:border-0 last:pb-0 dark:border-white/8"
                >
                  <span className="text-lg font-semibold text-foreground dark:text-white">
                    {item.title}
                  </span>
                  <span className="text-xs text-neutral-600 dark:text-white/60">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-mono uppercase tracking-[0.5em] text-neutral-600 dark:text-white/50">
              Served
            </p>
            <ul className="space-y-2">
              {served.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-black/10 pb-3 flex flex-col gap-1 last:border-0 last:pb-0 dark:border-white/8"
                >
                  <span className="text-lg font-semibold text-foreground dark:text-white">
                    {item.title}
                  </span>
                  <span className="text-xs text-neutral-600 dark:text-white/60">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-mono uppercase tracking-[0.5em] text-neutral-600 dark:text-white/50">
              History
            </p>
            <ul className="space-y-2">
              {history.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-black/10 pb-3 last:border-0 last:pb-0 dark:border-white/8"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wide dark:text-white/70">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground dark:text-white">
                      {item.company}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
