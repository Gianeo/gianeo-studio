# Animation Guide

This project uses **Motion for React** (`motion/react`, formerly Framer Motion) to build scroll‑linked parallax and subtle entrance animations. Motion is already a dependency in `package.json`, and it provides GPU‑friendly transforms with `useScroll`, `useTransform`, and `LazyMotion` for smaller bundles.

## Why Motion
- **Scroll‑linked animation without jank**: Motion exposes motion values that update outside React state.
- **Declarative + composable**: Motion components (`m.div`) wrap existing markup with minimal changes.
- **Reduced bundle**: `LazyMotion` + `domAnimation` loads only what we need.

## Animation Tokens
Tokens live in `src/system/motion-tokens.ts` for consistent durations/easings across the site.

```ts
// src/system/motion-tokens.ts
export const motionTokens = {
  durationShort: 0.35,
  durationMedium: 0.6,
  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.4, 0, 0.2, 1],
} as const;
```

CSS‑level motion tokens are also defined in `src/system/design-tokens.css` if you need to use them in styles.

## Where Motion Is Used

### Hero parallax + layered scroll
- File: `src/components/sections/Hero/index.tsx`
- Goal: keep the center background/logo pinned, while the bottom content scrolls over it with subtle parallax.

Key pieces:

1) **LazyMotion + MotionConfig**

```tsx
<LazyMotion features={domAnimation}>
  <MotionConfig transition={{ duration: motionTokens.durationShort, ease: motionTokens.easeOut }}>
    {/* animated content */}
  </MotionConfig>
</LazyMotion>
```

2) **Scroll‑linked motion values**

```tsx
const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "start end"],
});

const logoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
const logoY = useTransform(scrollYProgress, [0, 1], [0, -8]);
const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
```

3) **Pinned background layer + logo**

```tsx
<m.div
  className="absolute inset-0"
  style={shouldReduceMotion ? { scale: 1 } : { scale: bgScale }}
  aria-hidden="true"
/>

<m.div
  className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
  style={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: logoOpacity, y: logoY }}
>
  <LogoGf ... />
</m.div>
```

4) **Reduced‑motion handling**

```tsx
const shouldReduceMotion = prefersReducedMotion || isMobile;
```

When `shouldReduceMotion` is true, transforms are disabled.

## How the layered scroll works
- The hero section has a **pinned layer** (background + logo).
- The bottom content is positioned so it appears to slide up over the pinned layer.
- The header is set to `position: sticky`, so it remains fixed until the bottom content reaches it and pushes it out.

Look at:
- `src/components/sections/Hero/index.tsx` for the pinned layer and bottom content setup.
- `Navigation` is rendered inside the pinned container so it sticks until the pinned layer ends.

## Patterns to follow
- Prefer `useScroll` + `useTransform` for parallax.
- Avoid setState in scroll handlers.
- Animate with transforms and opacity only.
- Respect `prefers-reduced-motion` by short‑circuiting styles.

## How to modify behavior

### Adjust parallax strength
In `src/components/sections/Hero/index.tsx`:
- `logoOpacity`: change end opacity (e.g., `0.9` for subtler fade).
- `logoY`: change translate amount (e.g., `-4` for softer move).
- `bgScale`: reduce scale (e.g., `1.01`).

### Adjust the pinned layer
- Change `md:h-screen` on the pinned container to alter how long the background stays fixed.
- Adjust `md:-mt-[110vh]` on the bottom content to change how soon it overlaps the pinned layer.

### Add new animated sections
- Wrap the component in `LazyMotion` if not already.
- Use `m.div` + `initial/whileInView` for subtle entrance animations.
- Use `motionTokens` for durations/easing.

---

If you want this doc updated as we change behavior, tell me and I’ll keep it in sync.
