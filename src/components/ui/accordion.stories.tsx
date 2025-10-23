import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

/**
 * Accordion Component
 * 
 * Purpose: Progressive disclosure of related content sections
 * Philosophy: "Simplicity through subtraction" - Show what's needed, hide the rest
 * 
 * Design Decisions:
 * - Single/multiple expansion modes
 * - Smooth transitions
 * - Keyboard accessible (arrow keys, home, end)
 * 
 * Usage Guidelines:
 * - Use for FAQs, settings panels, detailed information
 * - Keep trigger text concise
 * - Don't nest accordions deeply
 * 
 * Accessibility:
 * - Full keyboard navigation
 * - ARIA expanded states
 * - Focus management
 */
const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A vertically stacked set of interactive headings that reveal/hide content sections.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern with full keyboard navigation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that can be customized via Tailwind classes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses CSS transitions for smooth expand/collapse animations.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Multiple sections can be open simultaneously in this mode.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          Click multiple triggers to keep several panels expanded at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          This is useful for comparing content across sections.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export const FAQ: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="pricing">
        <AccordionTrigger>What's included in the free plan?</AccordionTrigger>
        <AccordionContent>
          The free plan includes 3 projects, basic analytics, and community support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="refund">
        <AccordionTrigger>What's your refund policy?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day money-back guarantee for all paid plans. No questions asked.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How can I contact support?</AccordionTrigger>
        <AccordionContent>
          Email us at support@example.com or use the chat widget in the bottom right.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
