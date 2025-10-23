import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from './card'
import { Button } from './button'
import { MoreHorizontal, Star } from 'lucide-react'

/**
 * Card Component
 * 
 * Purpose: Container for grouped content with clear visual boundaries
 * Philosophy: "Structure yields coherence" - Clear hierarchy, consistent spacing, semantic composition
 * 
 * Design Decisions:
 * - Compositional API: Flexible sub-components vs monolithic props
 * - data-slot attributes: Enable parent styling based on children
 * - rounded-xl: Softer than full circle, more intentional than sm
 * - 6-unit gap: Consistent vertical rhythm
 * 
 * Composition Pattern:
 * Card acts as container, sub-components handle specific content types.
 * This allows for flexibility while maintaining visual consistency.
 * 
 * Accessibility:
 * - Semantic HTML structure
 * - Proper heading hierarchy via CardTitle
 * - Color contrast maintained across themes
 */
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card container with compositional sub-components for headers, content, and footers.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic Card
 * Minimal card with just content
 */
export const Basic: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>This is a basic card with content only.</p>
      </CardContent>
    </Card>
  )
}

/**
 * With Header
 * Card with title and description
 */
export const WithHeader: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your card content here. This can be any React node.</p>
      </CardContent>
    </Card>
  )
}

/**
 * With Footer
 * Card with action footer
 */
export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Project Update</CardTitle>
        <CardDescription>Review the latest changes</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your project has been updated with new features and improvements.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View Changes</Button>
      </CardFooter>
    </Card>
  )
}

/**
 * With Action Button
 * Card with header action (e.g., menu button)
 */
export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages</CardDescription>
        <CardAction>
          <Button size="icon" variant="ghost">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm">• New comment on your post</p>
          <p className="text-sm">• Team meeting in 30 minutes</p>
          <p className="text-sm">• Project deadline approaching</p>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * Complete Card
 * All components together
 */
export const Complete: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Complete Example</CardTitle>
        <CardDescription>Shows all card sub-components</CardDescription>
        <CardAction>
          <Button size="icon" variant="ghost">
            <Star />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This card demonstrates the full compositional API with header, content, actions, and footer.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">Cancel</Button>
        <Button className="flex-1">Confirm</Button>
      </CardFooter>
    </Card>
  )
}

/**
 * Product Card
 * Real-world example: product display
 */
export const ProductCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Premium Plan</CardTitle>
        <CardDescription>Best for growing teams</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <span className="text-4xl font-bold">$29</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li>• Unlimited projects</li>
            <li>• Advanced analytics</li>
            <li>• Priority support</li>
            <li>• Custom integrations</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Subscribe Now</Button>
      </CardFooter>
    </Card>
  )
}

/**
 * Stats Card
 * Real-world example: dashboard metric
 */
export const StatsCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription>Total Revenue</CardDescription>
        <CardTitle className="text-3xl">$45,231.89</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  )
}

/**
 * Notification Card
 * Real-world example: alert or notification
 */
export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>System Update Available</CardTitle>
        <CardDescription>Version 2.0 is ready to install</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This update includes performance improvements and new features. 
          Your data will be preserved during the update.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">Later</Button>
        <Button className="flex-1">Update Now</Button>
      </CardFooter>
    </Card>
  )
}

/**
 * Grid Layout
 * Multiple cards in a grid
 */
export const GridLayout: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-[720px]">
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>First card in grid</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Content for card 1</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
          <CardDescription>Second card in grid</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Content for card 2</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
          <CardDescription>Third card in grid</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Content for card 3</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 4</CardTitle>
          <CardDescription>Fourth card in grid</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Content for card 4</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded'
  }
}
