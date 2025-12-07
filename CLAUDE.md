# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Gianni Favaretto, a design leader and product strategist. The site showcases work experience, services, client logos, and design philosophy.

**Tech Stack:**
- Next.js 15.3.2 with App Router
- React 19
- TypeScript
- Tailwind CSS v4 (with CSS @theme inline configuration)
- Lenis for smooth scrolling

## Development Commands

```bash
# Development
npm run dev              # Start Next.js dev server with Turbopack

# Build & Production
npm run build           # Build for production
npm start               # Start production server

# Code Quality
npm run lint            # Run ESLint
```

## Architecture & Code Organization

### App Structure
- **App Router**: Uses Next.js 15 App Router with file-based routing in `src/app/`
- **Layout Pattern**: Root layout (`src/app/layout.tsx`) contains comprehensive SEO metadata, structured data (JSON-LD), and font configuration
- **Main Page**: `src/app/page.tsx` composes all sections with semantic HTML and ARIA labels

### Component Architecture

**Section Components** (`src/components/sections/`)
- Self-contained page sections: Hero, ClientsLogos, ProductShowcase, Profile, Services, WorkHistory
- Each section is a default export from its index file
- Data for sections stored in co-located `data.ts` files when needed

**UI Components** (`src/components/ui/`)
- Reusable UI primitives built on Radix UI primitives
- Follow shadcn/ui patterns with Tailwind styling
- Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging

**Layout Components** (`src/components/layout/`)
- `SmoothScrollLayout.tsx`: Lenis smooth scroll implementation with context provider
- Exports `ScrollContext` and `useScroll()` hook for programmatic scrolling

### Styling System

**Tailwind CSS v4**
- Configuration in `src/app/globals.css` using `@theme inline` directive
- Design tokens defined as CSS custom properties (e.g., `--radius`, `--background`)
- Dark mode using class-based variant: `@custom-variant dark (&:is(.dark *))`
- Uses OKLCH color space for better color accuracy

**Typography**
- Fonts loaded via Next.js `localFont()` in `src/lib/fonts.ts`
- **Switzer**: Body copy and headings (weights: 400, 500, 600, 700)
- **Azeret Mono**: Monospace text (weight: 300)
- Applied via CSS variables: `--font-copy`, `--font-heading`, `--font-mono`
- Usage: `font-copy`, `font-heading`, `font-mono` Tailwind classes

**Animations**
- Uses `tw-animate-css` package for utility-based animations
- Custom animations available: `animate-fade-in`, `animate-slide-up`, `animate-scale-in`

### Key Patterns

**Smooth Scrolling**
- Lenis is initialized in `SmoothScrollLayout` component
- Access via `useScroll()` hook to call `scrollToSection(target)`
- Navigation component should use this for anchor links

**SEO & Metadata**
- Comprehensive metadata in `src/app/layout.tsx` including OpenGraph, Twitter Card, structured data
- Page-specific metadata exported from individual pages
- Replace placeholder values: Google Analytics ID, verification codes, domain URL

**Accessibility**
- Skip-to-content link in root layout
- Semantic HTML with proper heading hierarchy
- ARIA labels and roles on sections
- Screen reader-only headings using `sr-only` class

**Icon System**
- Primary: Phosphor Icons via `phosphor-react` package
- Alternative: Lucide React icons available
- Usage: Import and render as React components

## Important Notes

- **Font Files**: Located in `public/fonts/` - do not move or rename
- **Dark Mode**: Applied via `dark` class on `<html>` element
- **Responsive**: Mobile-first approach with standard Tailwind breakpoints
- **Images**: Work-related images in `public/images/work/`, client logos in `public/images/logos/clients/`
- **Type Safety**: Strict TypeScript configuration - ensure all components are properly typed
