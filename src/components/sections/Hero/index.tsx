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

export default function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-background text-foreground dark:bg-background dark:text-white min-h-screen flex items-end pb-16 lg:pb-24 ${className}`}
    >
      <div className="" />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-12 space-y-12 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          <div className="space-y-8">
            <p className="body-label text-neutral-600 dark:text-white/50">
              Gianni G. Favaretto
            </p>
            <h1
              id="hero-heading"
              className="heading-display leading-tight text-foreground dark:text-white"
            >
              Design+ expertise for growth.
            </h1>
            <a
              href="mailto:giannijfavaretto@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-[#ff1957] px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-[0_10px_40px_rgba(255,25,87,0.35)] transition hover:translate-y-[-1px] hover:shadow-[0_12px_42px_rgba(255,25,87,0.45)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="inline-flex size-7 items-center justify-center rounded-full border border-black/10 text-xs dark:border-white/30">
                ↗
              </span>
              Get in touch
            </a>
          </div>

          <div className="space-y-4">
            <p className="body-label text-neutral-600 dark:text-white/50">
              What I do
            </p>
            <ul className="space-y-2">
              {whatIDo.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-black/10 pb-3 flex flex-col gap-1 last:border-0 last:pb-0 dark:border-white/8"
                >
                  <span className="heading-sm text-foreground dark:text-white">
                    {item.title}
                  </span>
                  <span className="body-sm text-neutral-600 dark:text-white/60">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="body-label text-neutral-600 dark:text-white/50">
              Served
            </p>
            <ul className="space-y-2">
              {served.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-black/10 pb-3 flex flex-col gap-1 last:border-0 last:pb-0 dark:border-white/8"
                >
                  <span className="heading-sm text-foreground dark:text-white">
                    {item.title}
                  </span>
                  <span className="body-sm text-neutral-600 dark:text-white/60">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="body-label text-neutral-600 dark:text-white/50">
              History
            </p>
            <ul className="space-y-2">
              {history.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-black/10 pb-3 last:border-0 last:pb-0 dark:border-white/8"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="body-label text-neutral-600 dark:text-white/70">
                      {item.label}
                    </span>
                    <span className="body-sm text-foreground dark:text-white">
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
