import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";

/**
 * # Dialog
 * 
 * **Purpose:** Interrupts the user's workflow to display critical information or request input.
 * 
 * **When to use:**
 * - Confirmations (destructive actions, important decisions)
 * - Forms that require focused attention
 * - Critical alerts or warnings
 * - Information that requires acknowledgment
 * 
 * **When NOT to use:**
 * - Non-critical information (use toast or inline messages)
 * - Complex multi-step workflows (use dedicated pages)
 * - Frequent interruptions (causes user frustration)
 * 
 * **Accessibility:**
 * - Focus trap (keeps focus within dialog)
 * - Escape key closes dialog
 * - Background scroll prevented
 * - ARIA labels and descriptions
 * - Returns focus to trigger on close
 * 
 * **Design Philosophy:**
 * - *One emotional moment counts* - Dialog is THE moment that matters
 * - *User-centred, human-first* - Use sparingly to respect attention
 * - *Function integrates with beauty* - Clear purpose, elegant execution
 */
const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modal dialog that interrupts the user with important content and expects a response. Built on Radix UI Dialog primitive.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic dialog with title and description
 */
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of what this dialog is about. It provides context to help users understand the purpose.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm">Dialog content goes here.</p>
        </div>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Confirmation dialog - Most common use case for critical actions
 */
export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the item and remove it from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Form dialog - Collecting user input in a focused context
 */
export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              defaultValue="Gianni Favaretto"
              className="rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              defaultValue="email@example.com"
              className="rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Alert dialog - Critical information requiring acknowledgment
 */
export const Alert: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Alert</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>⚠️ System Maintenance</DialogTitle>
          <DialogDescription>
            Scheduled maintenance will begin in 15 minutes. Please save your work and log out to avoid data loss.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>I Understand</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Rich content dialog - Shows complex layout within dialog
 */
export const RichContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Component Documentation</DialogTitle>
          <DialogDescription>
            Comprehensive guide to using this component effectively
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <h4 className="font-medium mb-2">Purpose</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This component serves as a modal overlay that captures user attention for critical interactions or information display.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Best Practices</h4>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
              <li>Use for critical actions only</li>
              <li>Keep content focused and concise</li>
              <li>Always provide a clear way to dismiss</li>
              <li>Avoid nesting dialogs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Accessibility</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Keyboard accessible, focus trapped, ARIA labels provided automatically.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button>Got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
