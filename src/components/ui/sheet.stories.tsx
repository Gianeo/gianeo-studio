import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";

/**
 * # Sheet
 * 
 * **Purpose:** Side panel that slides in from the edge of the screen.
 * 
 * **When to use:**
 * - Navigation menus
 * - Filters and settings panels
 * - Secondary content that supplements the main view
 * - Form inputs that don't require full focus
 * 
 * **Accessibility:**
 * - Focus trapped within sheet
 * - Escape key closes
 * - Returns focus on close
 */
const meta = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a description of the sheet content.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm">Sheet content goes here.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const FromLeft: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open from Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Main menu and navigation links</SheetDescription>
        </SheetHeader>
        <nav className="py-4 space-y-2">
          <a href="#" className="block py-2 text-sm hover:text-primary">Home</a>
          <a href="#" className="block py-2 text-sm hover:text-primary">About</a>
          <a href="#" className="block py-2 text-sm hover:text-primary">Services</a>
          <a href="#" className="block py-2 text-sm hover:text-primary">Contact</a>
        </nav>
      </SheetContent>
    </Sheet>
  ),
};
