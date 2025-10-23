import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

/**
 * Badge Component
 * 
 * Purpose: Small status indicator or label
 * Philosophy: "Simplicity through subtraction" - Minimal, clear, purposeful
 * 
 * Design Decisions:
 * - Small footprint: Not competing with primary content
 * - Semantic variants: Status-based naming
 * - Inline display: Works within text flow
 * 
 * Usage Guidelines:
 * - Use for status indicators (new, beta, active)
 * - Use for categorization tags
 * - Don't use as buttons (use Button component)
 * 
 * Accessibility:
 * - Ensure color isn't only indicator (use text)
 * - Use aria-label for icon-only badges
 */
const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A small badge for status indicators and labels.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Visual style variant'
    }
  }
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive'
  }
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline'
  }
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-sm">Active</span>
        <Badge variant="secondary">Live</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Beta Feature</span>
        <Badge>New</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Deprecated</span>
        <Badge variant="destructive">Ending Soon</Badge>
      </div>
    </div>
  )
}
