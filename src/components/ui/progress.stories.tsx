import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 60,
    className: 'w-[300px]'
  }
}

export const Loading: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Uploading...</span>
          <span>33%</span>
        </div>
        <Progress value={33} />
      </div>
    </div>
  )
}
