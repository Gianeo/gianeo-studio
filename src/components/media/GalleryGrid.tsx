"use client";

import clsx from "clsx";
import { LazyImage } from "@/components/media/LazyImage";

export type GalleryImage = {
  id: string | number;
  src: string;
  alt: string;
};

type GalleryLayout = "simple" | "highlight";

interface GalleryGridProps {
  images: GalleryImage[];
  layout?: GalleryLayout;
  className?: string;
}

const highlightSlots = [
  { span: "md:col-span-4 md:row-span-2", aspect: "aspect-square" },
  { span: "md:col-span-8 md:row-span-2", aspect: "aspect-[7/4]" },
  { span: "md:col-span-6 md:row-span-3", aspect: "aspect-[3/4]" },
  { span: "md:col-span-6 md:row-span-3", aspect: "aspect-[4/3]" },
  { span: "md:col-span-6 md:row-span-2", aspect: "aspect-[4/3]" },
  { span: "md:col-span-6 md:row-span-2", aspect: "aspect-[4/3]" },
];

export function GalleryGrid({ images, layout = "simple", className }: GalleryGridProps) {
  const normalized = images.map((img, idx) => ({
    ...img,
    id: img.id ?? idx,
  }));

  if (layout === "highlight") {
    return (
      <div
        className={clsx(
          "grid w-full h-full gap-2 md:grid-cols-12 auto-rows-[120px] md:auto-rows-[140px]",
          className
        )}
      >
        {normalized.map((image, idx) => {
          const slot = highlightSlots[idx % highlightSlots.length];
          return (
            <div
              key={image.id}
              className={clsx("overflow-hidden rounded-lg", slot.span, slot.aspect)}
            >
              <LazyImage
                image={{ src: image.src, alt: image.alt }}
                className="h-full"
                containerClassName="h-full"
                overlayClassName="from-primary/10 to-accent/10"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={88}
              />
            </div>
          );
        })}
      </div>
    );
  }

  // Simple grid
  return (
    <div className={clsx("grid w-full h-full gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3", className)}>
      {normalized.map((image, idx) => (
        <LazyImage
          key={image.id}
          image={{ src: image.src, alt: image.alt }}
          className="w-full aspect-[4/3]"
          priority={idx === 0}
        />
      ))}
    </div>
  );
}

export default GalleryGrid;
