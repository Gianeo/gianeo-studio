import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";

/**
 * # Popover
 * 
 * **Purpose:** Displays floating content triggered by user interaction.
 * 
 * **When to use:**
 * - Additional options or settings
 * - Date pickers, color pickers
 * - Contextual menus
 * - Small forms or filters
 * 
 * **When NOT to use:**
 * - Critical information (use Dialog)
 * - Simple hints (use Tooltip)
 * - Long-form content (use separate page)
 * 
 * **Accessibility:**
 * - Keyboard accessible
 * - Focus management
 * - Escape key closes
 * 
 * **Design Philosophy:**
 * - *Function integrates with beauty* - Reveals complexity only when needed
 * - *Structure yields coherence* - Positioned intelligently to maintain context
 */
const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the component.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Settings</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Display Settings</h4>
            <p className="text-sm text-muted-foreground">
              Configure how content is displayed
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Theme</label>
            <select className="w-full rounded-md border bg-background px-3 py-2 text-sm">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <Button className="w-full" size="sm">
            Save
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
