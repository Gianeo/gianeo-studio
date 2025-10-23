import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";
import { Button } from "./button";
import { Info } from "lucide-react";

/**
 * # Tooltip
 * 
 * **Purpose:** Provides contextual information on hover/focus without cluttering the interface.
 * 
 * **When to use:**
 * - Brief explanations of icons or buttons
 * - Additional context that's helpful but not critical
 * - Keyboard shortcuts or hotkey hints
 * 
 * **When NOT to use:**
 * - Critical information (use visible text instead)
 * - Long explanations (use a popover or modal)
 * - Mobile-primary interfaces (tooltips require hover)
 * 
 * **Accessibility:**
 * - Keyboard accessible (focus triggers tooltip)
 * - Automatic ARIA labels
 * - Respects prefers-reduced-motion
 * - Escape key to dismiss
 * 
 * **Design Philosophy:**
 * - *Simplicity through subtraction* - Reveals info only when needed
 * - *Function integrates with beauty* - Unobtrusive yet discoverable
 * - *User-centred, human-first* - Respects cognitive load
 */
const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. Built on Radix UI Tooltip primitive.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic tooltip with simple text content
 */
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * Tooltip on an icon button - Common pattern for toolbar actions
 */
export const OnIconButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>More information</p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * Different positioning options - Tooltip can appear on any side
 */
export const Positions: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top (default)</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Appears above</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Appears to the right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Appears below</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Appears to the left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip with keyboard shortcut hint - Common pattern for power users
 */
export const WithShortcut: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Save</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="flex items-center gap-2">
          Save document
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
            <span className="text-xs">⌘</span>S
          </kbd>
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * Longer text with text-balance for better readability
 */
export const LongerContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Complex action</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This action will process all selected items and may take a few moments to complete.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * Multiple tooltips in a toolbar - Shows real-world usage pattern
 */
export const Toolbar: Story = {
  render: () => (
    <div className="flex gap-1 rounded-lg border bg-background p-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <span className="font-bold">B</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Bold</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <span className="italic">I</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Italic</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <span className="underline">U</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Underline</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Disabled button with tooltip - Explains why action is unavailable
 */
export const OnDisabledElement: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span tabIndex={0}>
          <Button disabled>Disabled action</Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This action is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  ),
};
