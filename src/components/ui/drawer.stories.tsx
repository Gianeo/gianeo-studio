import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose,
} from "./drawer";
import { Button } from "./button";

/**
 * # Drawer
 * 
 * **Purpose:** Mobile-optimized bottom sheet with drag-to-dismiss.
 * 
 * **When to use:**
 * - Mobile interfaces
 * - Quick actions or selections
 * - Filter panels on mobile
 * - Bottom sheets for mobile apps
 * 
 * **Accessibility:**
 * - Drag to dismiss (touch-friendly)
 * - Keyboard accessible
 * - Focus management
 */
const meta = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a mobile-optimized drawer.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm">Drawer content goes here. Try dragging it down to dismiss.</p>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
