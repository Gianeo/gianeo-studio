"use client";

import { useMemo } from "react";
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
    // src: `/images/work/justscore/${i + 1}.webp`,
    src: ``,
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
  const galleryItems = useMemo(() => ([
    {
      title: "Mobile Native App",
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
    <div className={`flex h-full flex-col p-6 pb-16 md:p-0 space-y-4 md:space-y-0 ${className}`}>
      <div className="flex flex-1 items-center">
        <h3 className="heading-base text-primary">{title}</h3>
      </div>
      <p className="body-sm text-muted max-w-md mt-auto">{description}</p>
    </div>
  );

  const hasValidImage = (image?: ProjectData["images"][number]) =>
    Boolean(image?.src);

  return (
    <section className="bg-background text-foreground">
      <SectionHeader
        icon={<ArrowRightIcon size={16} />}
        label="Latest"
      />
      <div className="relative grid grid-cols-1 md:grid-cols-12 md:py-8 lg:py-20 px-6 lg:px-1">
        <div className="col-span-12 lg:col-start-2 lg:col-span-5 xl:col-start-3 xl:col-span-5 space-y-6">
          {/* <MetaRow
            className="mb-2"
            items={[
              { icon: <TagIcon size={16} />, label: project.category },
              { icon: <CalendarIcon size={16} />, label: project.date },
            ]}
          /> */}
          <div className="space-y-2">
            <p className="body-label text-muted mb-8">
              {project.category}
            </p>
            <h1
              className="heading-display text-primary">
              {project.title}
            </h1>
            <h2 className="heading-display text-muted/75">Where an idea found its form and voice.</h2>
          </div>
        </div>
        <div className="col-start-3 py-16">
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
        <div className="col-start-6 col-span-4 py-16">
          <div className="font-copy text-lg md:text-lg text-muted-foreground leading-relaxed prose-optimized">
            {project.description}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-24 md:pb-24">

        <div className="md:col-start-3 md:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-24">
            <div className="col-span-6">
              <div className="overflow-hidden bg-neutral-lighter dark:bg-neutral-darker">
                {hasValidImage(galleryItems[0]?.image) ? (
                  <LazyImage
                    image={galleryItems[0].image}
                    className="w-full aspect-4/3"
                    priority
                    showPlaceholder={false}
                  />
                ) : (
                  <div className="w-full aspect-4/3" aria-hidden="true" />
                )}
              </div>
            </div>
            <div className="cols-start-7 col-span-5 self-stretch">
              <GalleryText
                title={galleryItems[0]?.title}
                description={galleryItems[0]?.description}
              />
            </div>
          </div>
        </div>

        <div className="md:col-start-3 md:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-24">
            <div className="order-2 md:order-0 col-span-4 self-stretch">
              <GalleryText
                title={galleryItems[1]?.title}
                description={galleryItems[1]?.description}
                className="md:text-right md:items-end"
              />
            </div>
            <div className="order-1 md:order-0 cols-start-5 col-span-8">
              <div className="overflow-hidden bg-neutral-lighter dark:bg-neutral-darker">
                {hasValidImage(galleryItems[1]?.image) ? (
                  <LazyImage
                    image={galleryItems[1].image}
                    className="w-full aspect-4/3"
                    showPlaceholder={false}
                  />
                ) : (
                  <div className="w-full aspect-4/3" aria-hidden="true" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-start-3 md:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-24">
            <div className="col-span-6">
              <div className="overflow-hidden bg-neutral-lighter dark:bg-neutral-darker">
                {hasValidImage(galleryItems[2]?.image) ? (
                  <LazyImage
                    image={galleryItems[2].image}
                    className="w-full aspect-4/3"
                    showPlaceholder={false}
                  />
                ) : (
                  <div className="w-full aspect-4/3" aria-hidden="true" />
                )}
              </div>
            </div>
            <div className="cols-start-7 col-span-5 self-stretch">
              <GalleryText
                title={galleryItems[2]?.title}
                description={galleryItems[2]?.description}
              />
            </div>
          </div>
        </div>

        <div className="md:col-start-3 md:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-24">
            <div className="order-2 md:order-0 col-span-4 self-stretch">
              <GalleryText
                title={galleryItems[3]?.title}
                description={galleryItems[3]?.description}
                className="md:text-right md:items-end"
              />
            </div>
            <div className="order-1 md:order-0 cols-start-5 col-span-8">
              <div className="overflow-hidden bg-neutral-lighter dark:bg-neutral-darker">
                {hasValidImage(galleryItems[3]?.image) ? (
                  <LazyImage
                    image={galleryItems[3].image}
                    className="w-full aspect-4/3"
                    showPlaceholder={false}
                  />
                ) : (
                  <div className="w-full aspect-4/3" aria-hidden="true" />
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
