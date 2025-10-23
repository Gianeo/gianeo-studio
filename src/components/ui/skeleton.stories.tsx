import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

/**
 * Skeleton Component
 * 
 * Purpose: Loading placeholder that maintains layout
 * Philosophy: "User-centred, human-first" - Reduce perceived wait time
 * 
 * Design Decisions:
 * - Pulse animation for activity indication
 * - Maintains content dimensions
 * - Subtle, non-distracting
 * 
 * Usage Guidelines:
 * - Match skeleton to actual content shape
 * - Use during initial load and data fetching
 * - Remove immediately when content arrives
 */
const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Skeleton className="w-[200px] h-[20px]" />
}

export const Card: Story = {
  render: () => (
    <div className="flex flex-col space-y-3 w-[350px]">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
