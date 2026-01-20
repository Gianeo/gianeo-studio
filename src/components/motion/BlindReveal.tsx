"use client";

import { m, useInView, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import { useEffect, useMemo, useRef, type PropsWithChildren } from "react";
import { getBlindClipPath, getStaggerRange, springPresets, staggerPresets } from "@/system/motion-presets";

type SpringPreset = keyof typeof springPresets;
type StaggerPreset = keyof typeof staggerPresets;

interface BlindRevealProps extends PropsWithChildren {
  className?: string;
  index: number;
  total: number;
  progress?: MotionValue<number>;
  spring?: SpringPreset;
  stagger?: StaggerPreset;
  inViewOnce?: boolean;
  inViewAmount?: number | "some" | "all";
  inViewMargin?: string;
}

export function BlindReveal({
  children,
  className,
  index,
  total,
  progress,
  spring = "calm",
  stagger = "blinds",
  inViewOnce = true,
  inViewAmount = 0.35,
  inViewMargin = "0px 0px -15% 0px",
}: BlindRevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    amount: inViewAmount,
    margin: inViewMargin,
    once: inViewOnce,
  });

  const revealBase = useMotionValue(0);
  const springConfig = useMemo(() => springPresets[spring], [spring]);
  const revealProgress = useSpring(revealBase, springConfig);
  const resolvedProgress = progress ?? revealProgress;

  useEffect(() => {
    if (reduceMotion || isInView) {
      revealBase.set(1);
    } else {
      revealBase.set(0);
    }
  }, [isInView, reduceMotion, revealBase]);

  const [start, end] = getStaggerRange(index, total, staggerPresets[stagger]);
  const reveal = useTransform(resolvedProgress, [start, end], [0, 1]);
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
