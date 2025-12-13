"use client";

import { useMemo, memo } from "react";
import {
  ArrowRightIcon,
  CalendarIcon,
  TagIcon,
} from "@phosphor-icons/react";
import { SectionBanner } from "@/components/primitives/SectionBanner";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { MetaRow } from "@/components/primitives/MetaRow";
import { GalleryGrid } from "@/components/media/GalleryGrid";
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
  category: "Product ideation, Brand development, Go to Market.",
  client: "JustScore",
  date: "2025",
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
  
  // Memoize image organization to prevent recalculation
  const imageRows = useMemo(() => {
    return {
      allImages: project.images.slice(0, 9),
    };
  }, [project.images]);

  // Memoized image row component
  const ImageRow = memo(({ 
    images, 
    gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
  }: { 
    images: typeof project.images; 
    gridCols?: string;
  }) => {
    if (images.length === 0) return null;

    return (
      <div className={`grid gap-1 ${gridCols}`}>
        {images.map((image, index) => (
          <LazyImage
            key={`image-${image.id}`}
            image={image}
            className="w-full aspect-4/3"
            priority={index === 0} // Only first image is priority
          />
        ))}
      </div>
    );
  });

  ImageRow.displayName = 'ImageRow';

  return (
    <div className="bg-background text-foreground">
      <SectionBanner
        icon={<ArrowRightIcon size={16} />}
        label="Latest Ideation and Development"
      />
      <section className="relative grid grid-cols-12 py-8 lg:py-20 px-6 lg:px-1">
        <div className="col-span-12 lg:col-start-2 lg:col-span-5 xl:col-start-3 xl:col-span-4 space-y-6">
          <MetaRow
            className="mb-2"
            items={[
              { icon: <TagIcon size={16} />, label: project.category },
              { icon: <CalendarIcon size={16} />, label: project.date },
            ]}
          />
          <SectionIntro
            eyebrow={null}
            title={project.title}
            description={<p>{project.description}</p>}
            titleClassName="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
            className="space-y-4"
          />
        </div>
      </section>

      {/* Optimized Image Gallery */}
      <section className="px-6 lg:px-1 pb-20">
        <GalleryGrid images={imageRows.allImages} layout="simple" className="w-full" />
      </section>
    </div>
  );
}
