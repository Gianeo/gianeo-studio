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
  category: "Product & Brand development, Go to Market.",
  client: "JustScore",
  date: "2025-26",
  images: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/images/work/justscore/${i + 1}.webp`,
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

  return (
    <section className="bg-background text-foreground">
      <SectionHeader
        icon={<ArrowRightIcon size={16} />}
        label="Latest"
      />
      <div className="relative grid grid-cols-12 py-8 lg:py-20 px-6 lg:px-1">
        <div className="col-span-12 lg:col-start-2 lg:col-span-5 xl:col-start-3 xl:col-span-5 space-y-6">
          <MetaRow
            className="mb-2"
            items={[
              { icon: <TagIcon size={16} />, label: project.category },
              { icon: <CalendarIcon size={16} />, label: project.date },
            ]}
          />
          <div className="space-y-2 mt-8">
            <h1
              className="heading-display text-primary">
              {project.title}
            </h1>
            <h2 className="heading-display text-muted/75">Where an idea found its form and voice.</h2>
          </div>
        </div>
        <div className="col-start-6 col-span-4 pb-16">
            <div className="font-copy text-lg md:text-lg text-muted-foreground leading-relaxed prose-optimized">
              {project.description}
            </div>
        </div>
      </div>

      {/* Alternating gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-24">

        <div className="col-start-3 col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
            <div className="col-span-6">
              {galleryItems[0]?.image && (
                <div className="overflow-hidden  bg-neutral-darker/60">
                  <LazyImage
                    image={galleryItems[0].image}
                    className="w-full aspect-4/3"
                    priority
                  />
                </div>
              )}
            </div>
            <div className="cols-start-7 col-span-5 flex flex-col justify-end">
              <h3 className="heading-base text-primary mb-4">{galleryItems[0]?.title}</h3>
              <p className="body-sm text-muted max-w-md">{galleryItems[0]?.description}</p>
            </div>
          </div>
        </div>

        <div className="col-start-3 col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
            <div className="col-span-4 flex flex-col justify-end">
              <h3 className="heading-base text-primary mb-4">{galleryItems[1]?.title}</h3>
              <p className="body-sm text-muted max-w-md">{galleryItems[1]?.description}</p>
            </div>
            <div className="cols-start-5 col-span-8">
              {galleryItems[1]?.image && (
                <div className="overflow-hidden  bg-neutral-darker/60">
                  <LazyImage
                    image={galleryItems[1].image}
                    className="w-full aspect-4/3"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-start-3 col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
            <div className="col-span-6">
              {galleryItems[2]?.image && (
                <div className="overflow-hidden  bg-neutral-darker/60">
                  <LazyImage
                    image={galleryItems[2].image}
                    className="w-full aspect-4/3"
                  />
                </div>
              )}
            </div>
            <div className="cols-start-7 col-span-5 flex flex-col justify-end">
              <h3 className="heading-base text-primary mb-4">{galleryItems[2]?.title}</h3>
              <p className="body-sm text-muted max-w-md">{galleryItems[2]?.description}</p>
            </div>
          </div>
        </div>

        <div className="col-start-3 col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
            <div className="col-span-4 flex flex-col justify-end">
              <h3 className="heading-base text-primary mb-4">{galleryItems[3]?.title}</h3>
              <p className="body-sm text-muted max-w-md">{galleryItems[3]?.description}</p>
            </div>
            <div className="cols-start-5 col-span-8">
              {galleryItems[3]?.image && (
                <div className="overflow-hidden  bg-neutral-darker/60">
                  <LazyImage
                    image={galleryItems[3].image}
                    className="w-full aspect-4/3"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
