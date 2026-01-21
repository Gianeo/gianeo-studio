"use client";

import { m, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useMemo, useRef, type PropsWithChildren } from "react";
import { revealPresets, springPresets } from "@/system/motion-presets";

type RevealPreset = keyof typeof revealPresets;
type SpringPreset = keyof typeof springPresets;

interface RevealProps extends PropsWithChildren {
  className?: string;
  preset?: RevealPreset;
  spring?: SpringPreset;
  start?: number;
  progress?: MotionValue<number>;
  smooth?: boolean;
}

export function Reveal({
  children,
  className,
  preset = "slow",
  spring = "calm",
  start = 0.2,
  progress,
  smooth = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const targetProgress = progress ?? scrollYProgress;
  const { range, fromY } = revealPresets[preset];
  const springConfig = useMemo(() => springPresets[spring], [spring]);
  const end = Math.min(1, start + range);

  const opacity = useTransform(targetProgress, [start, end], [0, 1]);
  const y = useTransform(targetProgress, [start, end], [fromY, 0]);
  const shouldSpring = smooth && !progress;
  const smoothOpacity = shouldSpring ? useSpring(opacity, springConfig) : opacity;
  const smoothY = shouldSpring ? useSpring(y, springConfig) : y;

  return (
    <m.div
      ref={ref}
      className={className}
      style={
        reduceMotion
          ? undefined
          : { opacity: smoothOpacity, y: smoothY, willChange: "transform, opacity" }
      }
    >
      {children}
    </m.div>
  );
}
