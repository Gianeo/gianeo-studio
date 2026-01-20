import { useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";
import { springPresets } from "@/system/motion-presets";

type SpringPreset = keyof typeof springPresets;

interface ScrollRangeOptions {
  offset?: Parameters<typeof useScroll>[0]["offset"];
  spring?: SpringPreset;
  endOffsetPx?: number;
  endOffsetRem?: number;
}

export function useScrollRange<T extends HTMLElement>(
  options: ScrollRangeOptions = {}
) {
  const ref = useRef<T | null>(null);
  const {
    offset = ["start end", "end end"],
    spring = "calm",
    endOffsetPx,
    endOffsetRem = 10,
  } = options;
  const [viewportHeight, setViewportHeight] = useState(1);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  useEffect(() => {
    const update = () => setViewportHeight(window.innerHeight || 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const rootRem =
    typeof window === "undefined"
      ? 16
      : parseFloat(getComputedStyle(document.documentElement).fontSize || "16");
  const resolvedOffsetPx =
    endOffsetPx ?? (endOffsetRem ? endOffsetRem * rootRem : 0);
  const endShift = Math.min(0.95, resolvedOffsetPx / viewportHeight);

  const springConfig = useMemo(() => springPresets[spring], [spring]);
  const rawProgress = useSpring(scrollYProgress, springConfig);
  const adjustedProgress = useTransform(
    rawProgress,
    [0, Math.max(0.01, 1 - endShift)],
    [0, 1]
  );
  const progress = endShift > 0 ? adjustedProgress : rawProgress;

  return { ref, progress };
}
