import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { ArrowRight, Download, Plus } from 'lucide-react'

/**
 * Button Component
 * 
 * Purpose: Primary interactive element for user actions
 * Philosophy: "Function integrates with beauty" - Accessible, clear purpose, elegant execution
 * 
 * Design Decisions:
 * - rounded-full: Softens interface, approachable feel
 * - Focus ring: 3px ring for visibility, meets WCAG standards
 * - Variants: Semantic naming (destructive vs red-button)
 * - Transitions: Smooth state changes for polish
 * 
 * Accessibility:
 * - Keyboard navigable (tab, enter, space)
 * - Focus visible states
 * - Disabled state prevents interaction
 * - ARIA attributes supported
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes. Built on Radix Slot for composition flexibility.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'default | destructive | outline | secondary | ghost | link' },
        defaultValue: { summary: 'default' }
      }
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Size preset',
      table: {
        type: { summary: 'default | sm | lg | icon' },
        defaultValue: { summary: 'default' }
      }
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element (Radix Slot pattern)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default Button
 * Primary action button with high contrast
 */
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default'
  }
}

/**
 * Destructive Button
 * For dangerous or irreversible actions (delete, remove, etc.)
 */
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive'
  }
}

/**
 * Outline Button
 * Secondary actions with subtle emphasis
 */
export const Outline: Story = {
  args: {
    children: 'Cancel',
    variant: 'outline'
  }
}

/**
 * Secondary Button
 * Alternative actions, less prominent than primary
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}

/**
 * Ghost Button
 * Minimal visual weight, tertiary actions
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost'
  }
}

/**
 * Link Button
 * Styled as hyperlink, maintains button semantics
 */
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link'
  }
}

/**
 * Small Size
 * Compact variant for dense interfaces
 */
export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm'
  }
}

/**
 * Large Size
 * Prominent CTAs, hero sections
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}

/**
 * Icon Button
 * Square button for icon-only actions
 */
export const Icon: Story = {
  args: {
    size: 'icon',
    children: <Plus />,
    'aria-label': 'Add item'
  }
}

/**
 * With Leading Icon
 * Icon + text combination
 */
export const WithLeadingIcon: Story = {
  args: {
    children: (
      <>
        <Download />
        Download
      </>
    )
  }
}

/**
 * With Trailing Icon
 * Text + icon combination
 */
export const WithTrailingIcon: Story = {
  args: {
    children: (
      <>
        Continue
        <ArrowRight />
      </>
    )
  }
}

/**
 * Disabled State
 * Non-interactive state
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true
  }
}

/**
 * All Variants Showcase
 * Compare all visual variants
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants side by side for comparison'
      }
    }
  }
}

/**
 * All Sizes Showcase
 * Compare all size variants
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon"><Plus /></Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes side by side for comparison'
      }
    }
  }
}

/**
 * Loading State
 * Example pattern for async actions
 */
export const Loading: Story = {
  render: () => (
    <Button disabled>
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
      Loading...
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pattern for indicating loading state during async operations'
      }
    }
  }
}
