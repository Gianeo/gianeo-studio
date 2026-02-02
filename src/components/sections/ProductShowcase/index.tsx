"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  ArrowRightIcon,
  CalendarIcon,
  TagIcon,
} from "@phosphor-icons/react";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { MetaRow } from "@/components/primitives/MetaRow";
import { LazyImage } from "@/components/media/LazyImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { useInView, useReducedMotion, useMotionValue, useSpring } from "motion/react";
import { springPresets } from "@/system/motion-presets";
import { BlindReveal } from "@/components/motion";

interface ProjectData {
  title: string;
  description: string;
  category: string;
  client: string;
  date: string;
  images: {
    id: number;
    src: string;
    alt: string;
    aspectRatio: "square" | "landscape" | "portrait";
  }[];
}

const sampleProject: ProjectData = {
  title: "JustScore",
  description:
    "JustScore is an AI-powered performance management tool that helps team leaders score real-time actions and behaviours—turning quick observations into clear, data-driven insights. It replaces gut-feel evaluations and delayed feedback with a simple, human-friendly interface that delivers consistent, actionable reviews in minutes.",
  category: "Co-founder / Product & Brand development, GTM.",
  client: "JustScore",
  date: "2025-26",
  images: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/images/work/justscore/${i + 1}-test13.png`,
    // src: ``,
    alt: `Showcase image ${i + 1}`,
    aspectRatio: "square" as const,
  })),
};

interface ProjectShowcaseProps {
  project?: ProjectData;
}

export default function ProductShowcase({
  project = sampleProject,
}: ProjectShowcaseProps) {
  const reduceMotion = useReducedMotion();
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const galleryInView = useInView(galleryRef, {
    amount: 0.35,
    margin: "0px 0px -15% 0px",
    once: true,
  });
  const revealBase = useMotionValue(0);
  const revealProgress = useSpring(revealBase, springPresets.calm);
  useEffect(() => {
    if (reduceMotion || galleryInView) {
      revealBase.set(1);
    }
  }, [galleryInView, reduceMotion, revealBase]);
  const galleryItems = useMemo(() => ([
    {
      title: "Mobile App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project.images[0],
    },
    {
      title: "Web App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project.images[1],
    },
    {
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project.images[2],
    },
    {
      title: "Brand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project.images[3],
    },
  ]), [project.images]);

  const GalleryText = ({
    title,
    description,
    className = "",
  }: {
    title?: string;
    description?: string;
    className?: string;
  }) => (
    <div className={`flex h-full flex-col p-6 pb-16 md:px-16 md:py-0 xl:px-24 xl:py-0 space-y-4 md:space-y-0 ${className}`}>
      <div className="flex flex-1 items-center">
        <h3 className="heading-base text-primary">{title}</h3>
      </div>
      <p className="body-sm text-muted max-w-md mt-auto">{description}</p>
    </div>
  );

  const hasValidImage = (image?: ProjectData["images"][number]) =>
    Boolean(image?.src);

  const getHoverSrc = (src: string) => {
    const dotIndex = src.lastIndexOf(".");
    if (dotIndex === -1) return `${src}_hover`;
    return `${src.slice(0, dotIndex)}_hover${src.slice(dotIndex)}`;
  };

  const GalleryImage = ({
    image,
    index,
    total,
    priority,
  }: {
    image?: ProjectData["images"][number];
    index: number;
    total: number;
    priority?: boolean;
  }) => {
    const isOdd = index % 2 === 1;
    return (
      <BlindReveal
        className="relative overflow-hidden bg-background"
        index={index}
        total={total}
        progress={revealProgress}
      >
        {/* <div
          className={`absolute z-50 bottom-0 ${isOdd ? "left-0" : "right-0"} h-full w-px bg-neutral-darker`}
          aria-hidden="true"
        /> */}
        <div
          className={`absolute z-50 bottom-0 h-px w-full bg-neutral-darker`}
          aria-hidden="true"
        />
        <div
          className={`absolute z-50 bottom-0 ${isOdd ? "right-0" : "left-0"} h-1/2 w-px bg-neutral-darker`}
          aria-hidden="true"
        />
        <div className="relative z-10">
          {hasValidImage(image) ? (
            <LazyImage
              image={{ src: image?.src ?? "", alt: image?.alt ?? "" }}
              className="w-full aspect-4/3"
              containerClassName=""
              priority={priority}
              showPlaceholder={false}
              overlayClassName="opacity-0 group-hover:opacity-0"
              hoverSrc={image?.src ? getHoverSrc(image.src) : undefined}
              disableHoverScale
            />
          ) : (
            <div className="w-full aspect-4/3" aria-hidden="true" />
          )}
        </div>
      </BlindReveal>
    );
  };

  return (
    <section className="text-foreground bg-background pb-8 md:pb-32">
      <SectionHeader
        icon={<ArrowRightIcon size={16} />}
        label="Latest"
      />
      <div className="relative grid grid-cols-1 md:grid-cols-12 md:py-8 xl:py-20 px-6 md:px-0">
        <div className="md:col-start-2 md:col-span-8 xl:col-start-3 xl:col-span-5 space-y-6">
          <div className="space-y-2">
            <p className="body-label text-muted mb-8">
              {project.category}
            </p>
            <h1
              className="heading-display text-primary">
              {project.title}.
            </h1>
            <h2 className="heading-display text-muted/75">Where an idea found its form and voice.</h2>
          </div>
        </div>
        <div className="md:col-start-2 xl:col-start-3 py-8 md:py-24">
            <Button asChild size="lg" variant="accent" className="btn">
              <Link
                href="https://justscore.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Justscore website (opens in new tab)"
              >
                <ExternalLinkIcon size={16} aria-hidden="true" />
                justscore.com
              </Link>
            </Button>
        </div>
        <div className="md:col-start-6 xl:col-start-6 md:col-span-4 pb-8 md:pt-24 md:pb-16">
          <div className="font-copy text-lg md:text-lg text-muted-foreground leading-relaxed prose-optimized">
            {project.description}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-12 md:gap-24 md:pb-24 bg-background">

        <div className="md:col-start-1 xl:col-start-3 md:col-span-12 xl:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-6">
              <GalleryImage
                image={galleryItems[0]?.image}
                index={0}
                total={galleryItems.length}
                priority
              />
            </div>
            <div className="cols-start-7 col-span-5 self-stretch">
              <GalleryText
                title={galleryItems[0]?.title}
                description={galleryItems[0]?.description}
              />
            </div>
          </div>
        </div>

        <div className="md:col-start-1 xl:col-start-3 md:col-span-12 xl:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="order-2 md:order-0 col-span-4 self-stretch">
              <GalleryText
                title={galleryItems[1]?.title}
                description={galleryItems[1]?.description}
                className="md:text-right md:items-end"
              />
            </div>
            <div className="order-1 md:order-0 cols-start-5 col-span-8">
              <GalleryImage
                image={galleryItems[1]?.image}
                index={1}
                total={galleryItems.length}
              />
            </div>
          </div>
        </div>

        <div className="md:col-start-1 xl:col-start-3 md:col-span-12 xl:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-6">
              <GalleryImage
                image={galleryItems[2]?.image}
                index={2}
                total={galleryItems.length}
              />
            </div>
            <div className="cols-start-7 col-span-5 self-stretch">
              <GalleryText
                title={galleryItems[2]?.title}
                description={galleryItems[2]?.description}
              />
            </div>
          </div>
        </div>

        <div className="md:col-start-1 xl:col-start-3 md:col-span-12 xl:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="order-2 md:order-0 col-span-4 self-stretch">
              <GalleryText
                title={galleryItems[3]?.title}
                description={galleryItems[3]?.description}
                className="md:text-right md:items-end"
              />
            </div>
            <div className="order-1 md:order-0 cols-start-5 col-span-8">
              <GalleryImage
                image={galleryItems[3]?.image}
                index={3}
                total={galleryItems.length}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
