import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";
import Image from "next/image";

/**
 * # AspectRatio
 * 
 * **Purpose:** Maintains consistent width-to-height ratios for media content.
 * 
 * **When to use:**
 * - Image containers requiring specific proportions
 * - Video embeds with defined aspect ratios
 * - Responsive media that must maintain shape
 * 
 * **Accessibility:**
 * - Wrapper component - ensure child content has appropriate alt text
 * - Does not affect keyboard navigation
 * 
 * **Design Philosophy:**
 * - *Structure yields coherence* - Maintains visual rhythm through consistent proportions
 * - *Function integrates with beauty* - Prevents layout shift, serves responsive design
 */
const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays content in a consistent aspect ratio. Built on Radix UI AspectRatio primitive.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Square aspect ratio (1:1) - Common for profile images, thumbnails, and social media posts
 */
export const Square: Story = {
  args: {
    ratio: 1 / 1,
  },
  render: (args) => (
    <div className="w-64">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-sm text-muted-foreground">1:1 Square</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * Video aspect ratio (16:9) - Standard for video content, hero images, and wide media
 */
export const Video: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-96">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-sm text-muted-foreground">16:9 Video</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * Portrait aspect ratio (4:5) - Common for Instagram posts and portrait photography
 */
export const Portrait: Story = {
  args: {
    ratio: 4 / 5,
  },
  render: (args) => (
    <div className="w-64">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-sm text-muted-foreground">4:5 Portrait</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * Cinematic aspect ratio (21:9) - For ultra-wide content and cinematic displays
 */
export const Cinematic: Story = {
  args: {
    ratio: 21 / 9,
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-sm text-muted-foreground">21:9 Cinematic</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * With actual image content - Shows real-world usage
 */
export const WithImage: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-96">
      <AspectRatio {...args} className="overflow-hidden rounded-lg">
        <div className="relative h-full w-full bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-sm text-muted-foreground">Image Placeholder</span>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
};
