import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

/**
 * # ScrollArea
 * 
 * **Purpose:** Provides custom-styled scrollbars with consistent design across browsers.
 * 
 * **When to use:**
 * - Content areas with overflow (chat windows, code blocks, lists)
 * - Maintaining visual consistency across operating systems
 * - Custom scrollbar styling that matches your design system
 * 
 * **Accessibility:**
 * - Keyboard navigation (arrow keys, page up/down)
 * - Focus indicators on scroll viewport
 * - Maintains scroll position on focus
 * 
 * **Design Philosophy:**
 * - *Consistency builds trust* - Unified scrollbar appearance across all browsers
 * - *Function integrates with beauty* - Custom design that doesn't compromise usability
 * - *Simplicity through subtraction* - Minimal visual weight when not in use
 */
const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Augments native scroll functionality for custom, cross-browser styling. Built on Radix UI ScrollArea primitive.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

/**
 * Vertical scrolling - Most common use case for lists and content
 */
export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm py-2">{tag}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

/**
 * Horizontal scrolling - Useful for wide content like code or tables
 */
export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="h-24 w-24 rounded-md bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground">{i + 1}</span>
            </div>
          </figure>
        ))}
      </div>
    </ScrollArea>
  ),
};

/**
 * With rich content - Shows text formatting and structure
 */
export const WithContent: Story = {
  render: () => (
    <ScrollArea className="h-96 w-96 rounded-md border p-4">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Design System Principles</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every design decision starts with understanding the purpose, context, and audience. 
            This semantic foundation informs structure, layout, and every detail that follows.
          </p>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="font-semibold mb-2">Structure Yields Coherence</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Grids, hierarchy, typographic scale, and spatial rhythm serve as the grammar of design. 
            These systems ensure consistency and visual logic across all elements.
          </p>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="font-semibold mb-2">Function Integrates with Beauty</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Design must work. Usability, clarity, and accessibility are non-negotiable. 
            Beauty emerges from purpose fulfilled, not decoration added for its own sake.
          </p>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="font-semibold mb-2">Simplicity Through Subtraction</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Constantly ask: What can be removed? What is truly essential? 
            Minimal design isn't barren—it's intentional and refined.
          </p>
        </div>
      </div>
    </ScrollArea>
  ),
};

/**
 * Chat interface example - Real-world messaging pattern
 */
export const ChatInterface: Story = {
  render: () => (
    <div className="w-80 rounded-lg border">
      <div className="border-b p-3">
        <h4 className="font-semibold text-sm">Messages</h4>
      </div>
      <ScrollArea className="h-64">
        <div className="p-4 space-y-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="flex gap-3">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                U{i + 1}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">User {i + 1}</span>
                  <span className="text-xs text-muted-foreground">2m ago</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  This is message number {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};

/**
 * Code block with syntax - Common in documentation
 */
export const CodeBlock: Story = {
  render: () => (
    <ScrollArea className="h-64 w-96 rounded-md border bg-muted">
      <div className="p-4 font-mono text-xs">
        <pre>{`function calculateDesignTokens() {
  const baseScale = 8;
  const spacingScale = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64];
  
  return spacingScale.map(step => ({
    name: \`space-\${step}\`,
    value: \`\${step * baseScale}px\`,
    rem: \`\${(step * baseScale) / 16}rem\`,
  }));
}

const tokens = calculateDesignTokens();
console.log(tokens);

// Output:
// [
//   { name: 'space-0', value: '0px', rem: '0rem' },
//   { name: 'space-1', value: '8px', rem: '0.5rem' },
//   { name: 'space-2', value: '16px', rem: '1rem' },
//   ...
// ]`}</pre>
      </div>
    </ScrollArea>
  ),
};
