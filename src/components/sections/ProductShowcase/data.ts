"use client";

export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  aspectRatio: "square" | "landscape" | "portrait";
}

export interface ProjectData {
  title: string;
  description: string;
  category: string;
  client: string;
  date: string;
  images: ProjectImage[];
}

export interface GalleryItem {
  title: string;
  description: string;
  imageIndex: number;
}

export const sampleProject: ProjectData = {
  title: "JustScore",
  description:
    "JustScore is an AI-powered performance management tool that helps team leaders score real-time actions and behaviours—turning quick observations into clear, data-driven insights. It replaces gut-feel evaluations and delayed feedback with a simple, human-friendly interface that delivers consistent, actionable reviews in minutes.",
  category: "Co-founder / Product & Brand development, GTM.",
  client: "JustScore",
  date: "2025-26",
  images: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/images/work/justscore/${i + 1}.webp`,
    alt: `Showcase image ${i + 1}`,
    aspectRatio: "square",
  })),
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Mobile App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageIndex: 0,
  },
  {
    title: "Web App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageIndex: 1,
  },
  {
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageIndex: 2,
  },
  {
    title: "Brand",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageIndex: 3,
  },
];

export const getHoverSrc = (src: string) => {
  const dotIndex = src.lastIndexOf(".");
  if (dotIndex === -1) return `${src}_hover`;
  return `${src.slice(0, dotIndex)}_hover${src.slice(dotIndex)}`;
};
