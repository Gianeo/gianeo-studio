"use client";

import Image from "next/image";
import { memo } from "react";
import { LogoGf } from "@/components/logo/LogoGf";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation/Navigation";

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
  return (
    <section
      className={`relative bg-background text-foreground dark:bg-background dark:text-white min-h-screen flex flex-col justify-between items-center pb-12 ${className}`}
    >
      <Navigation />
      <div className="flex items-center justify-center w-full h-[360px] md:h-[420px] lg:h-full pointer-events-none">
        <LogoGf
          className="w-32 md:w-40 lg:w-48 h-auto"
          aria-label="Gianeo Studio logo"
        />
      </div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-10 lg:px-12 space-y-12 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="body-label">
                Craftsmanship + Leadership
              </p>
              <h1
                id="hero-heading"
                className="heading-display leading-tight text-foreground dark:text-white"
              >
                Design+ expertise for growth.
              </h1>
            </div>
            <div>
              <Button asChild variant="accent" size="base" className="gap-2">
                <a href="mailto:giannijfavaretto@gmail.com">
                  <span className="inline-flex size-7 items-center justify-center rounded-full border border-black/10 text-xs dark:border-white/30">
                    ↗
                  </span>
                  Get in touch
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <p className="body-label">
              What I do
            </p>
            <ul className="space-y-1.5">
              {whatIDo.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-black/10 pb-2 flex flex-col last:border-0 last:pb-0 dark:border-white/8"
                >
                  <span className="heading-sm">
                    {item.title}
                  </span>
                  <span className="body-sm">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="body-label">
              Served
            </p>
            <ul className="space-y-1.5">
              {served.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-black/10 pb-2 flex flex-col last:border-0 last:pb-0 dark:border-white/8"
                >
                  <span className="heading-sm">
                    {item.title}
                  </span>
                  <span className="body-sm">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="body-label">
              History
            </p>
            <ul className="space-y-1.5">
              {history.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-black/10 pb-2 last:border-0 last:pb-0 dark:border-white/8"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="body-sm">
                      {item.label}
                    </span>
                    <span className="body-sm">
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
