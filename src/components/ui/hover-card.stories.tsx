import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Button } from "./button";

/**
 * # HoverCard
 * 
 * **Purpose:** Displays rich preview content when hovering over an element.
 * 
 * **When to use:**
 * - User profiles or avatars
 * - Link previews
 * - Rich tooltips with formatted content
 * - Preview information without navigation
 * 
 * **When NOT to use:**
 * - Mobile interfaces (no hover state)
 * - Critical information (might be missed)
 * - Simple tooltips (use Tooltip component)
 * 
 * **Accessibility:**
 * - Keyboard accessible
 * - Can be triggered on focus
 * - Escape key dismisses
 * 
 * **Design Philosophy:**
 * - *Simplicity through subtraction* - Progressive disclosure of information
 * - *User-centred, human-first* - Reduces navigation burden
 */
const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@gianeo</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">@gianeo</h4>
          <p className="text-sm text-muted-foreground">
            Designer and Developer – creating design systems and digital experiences.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <div>
              <span className="font-medium text-foreground">12</span> Projects
            </div>
            <div>
              <span className="font-medium text-foreground">1.2k</span> Followers
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="inline-flex items-center gap-2 cursor-pointer">
          <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
            GF
          </div>
          <span className="text-sm">Gianni Favaretto</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center font-medium">
            GF
          </div>
          <div className="space-y-1 flex-1">
            <h4 className="text-sm font-semibold">Gianni Favaretto</h4>
            <p className="text-sm text-muted-foreground">
              Design leader focused on systems, craft, and human-centered experiences.
            </p>
            <div className="flex gap-2 pt-2">
              <Button size="sm">Follow</Button>
              <Button size="sm" variant="outline">
                Message
              </Button>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
