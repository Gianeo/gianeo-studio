"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  image: { src: string; alt: string };
  className?: string;
  priority?: boolean;
  overlayClassName?: string;
  containerClassName?: string;
  sizes?: string;
  quality?: number;
}

/**
 * Shared lazy-loaded image with placeholder + optional hover overlay.
 * Keeps the design identical across sections while reducing duplication.
 */
export function LazyImage({
  image,
  className,
  priority = false,
  overlayClassName = "from-primary/10 to-accent/10",
  containerClassName,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 88,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority,
  });

  const handleLoad = useCallback(() => setIsLoaded(true), []);
  const handleError = useCallback(() => setHasError(true), []);

  const shouldLoad = priority || inView;

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-neutral-100",
        containerClassName,
        className
      )}
    >
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-neutral-200 to-neutral-300" />
      )}

      {isLoaded && !hasError && (
        <div
          className={cn(
            "absolute inset-0 z-20 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            overlayClassName
          )}
        />
      )}

      {shouldLoad && !hasError && (
        <div className="absolute inset-0 z-30">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              onLoad={handleLoad}
              onError={handleError}
              sizes={sizes}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              priority={priority}
              quality={quality}
            />
          </div>
        </div>
      )}
    </div>
  );
}
