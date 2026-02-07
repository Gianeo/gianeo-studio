"use client";

import { m, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useMemo, useRef, type PropsWithChildren } from "react";
import { getBlindClipPath, getStaggerRange, springPresets, staggerPresets } from "@/system/motion-presets";

type SpringPreset = keyof typeof springPresets;
type StaggerPreset = keyof typeof staggerPresets;
type BlindStagger = StaggerPreset | "none";

interface BlindRevealProps extends PropsWithChildren {
  className?: string;
  index: number;
  total: number;
  progress?: MotionValue<number>;
  spring?: SpringPreset;
  stagger?: BlindStagger;
}

export function BlindReveal({
  children,
  className,
  index,
  total,
  progress,
  spring = "calm",
  stagger = "blinds",
}: BlindRevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 40%"],
  });
  const springConfig = useMemo(() => springPresets[spring], [spring]);
  const resolvedProgress = progress ?? useSpring(scrollYProgress, springConfig);

  const [start, end] =
    stagger === "none"
      ? ([0, 1] as const)
      : getStaggerRange(index, total, staggerPresets[stagger]);
  const reveal = useTransform(
    resolvedProgress,
    [start, end],
    [0, 1],
    { clamp: true }
  );
  const clipPath = useTransform(reveal, (value) => getBlindClipPath(value));

  return (
    <m.div
      ref={ref}
      className={className}
      style={
        reduceMotion
          ? undefined
          : { clipPath, willChange: "clip-path" }
      }
    >
      {children}
    </m.div>
  );
}
