import { useMemo, useRef } from "react";
import { useScroll, useSpring, type MotionValue } from "motion/react";
import { springPresets } from "@/system/motion-presets";

type SpringPreset = keyof typeof springPresets;

interface ScrollRangeOptions {
  offset?: Parameters<typeof useScroll>[0]["offset"];
  spring?: SpringPreset;
}

export function useScrollRange<T extends HTMLElement>(
  options: ScrollRangeOptions = {}
) {
  const ref = useRef<T | null>(null);
  const { offset = ["start end", "center center"], spring = "calm" } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const springConfig = useMemo(() => springPresets[spring], [spring]);
  const progress = useSpring(scrollYProgress, springConfig);

  return { ref, progress };
}
