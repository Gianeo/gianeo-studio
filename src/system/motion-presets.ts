export const springPresets = {
  calm: { stiffness: 140, damping: 26, mass: 0.9 },
  soft: { stiffness: 110, damping: 24, mass: 1 },
  snappy: { stiffness: 180, damping: 22, mass: 0.8 },
} as const;

export const revealPresets = {
  slow: { range: 0.16, fromY: -60 },
  medium: { range: 0.12, fromY: -48 },
  fast: { range: 0.1, fromY: -36 },
} as const;

export const parallaxPresets = {
  subtle: [-10, 10] as [number, number],
  medium: [-16, 16] as [number, number],
} as const;

export const staggerPresets = {
  blinds: { range: 0.16, overlap: 0.08 },
  quickBlinds: { range: 0.12, overlap: 0.06 },
} as const;

export const getStaggerRange = (
  index: number,
  total: number,
  preset: { range: number; overlap: number } = staggerPresets.blinds
) => {
  const safeTotal = Math.max(1, total);
  const start = Math.min(1, index / safeTotal);
  const end = Math.min(1, start + preset.range + preset.overlap);
  return [start, end] as const;
};

export const getBlindClipPath = (value: number) =>
  `inset(0% 0% ${Math.max(0, 100 - value * 100)}% 0%)`;

export const introRevealSequence = [
  { label: "tag", start: 0.18 },
  { label: "title", start: 0.26 },
  { label: "p1", start: 0.34 },
  { label: "p2", start: 0.42 },
  { label: "p3", start: 0.5 },
  { label: "p4", start: 0.58 },
] as const;

export const revealSequences = {
  intro: introRevealSequence,
} as const;

export type RevealSequenceKey = keyof typeof revealSequences;

export const getRevealSequence = (key: RevealSequenceKey) => revealSequences[key];

export const createRevealSequence = (
  sequence: readonly { label: string; start: number }[],
  range: number
) =>
  sequence.map((item) => ({
    label: item.label,
    start: item.start,
    end: item.start + range,
  }));
