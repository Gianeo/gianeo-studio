import type { Meta, StoryObj } from '@storybook/nextjs';

/**
 * # Typography System
 *
 * The typography system is built on two primary typefaces loaded via Next.js `localFont()`:
 *
 * - **Switzer**: Primary typeface for body copy and headings (weights: 400, 500, 600, 700)
 * - **Azeret Mono**: Monospace typeface for code and technical content (weight: 300)
 *
 * ## Font Classes
 *
 * - `font-copy`: Switzer for body text and readable content
 * - `font-heading`: Switzer for headings and display text
 * - `font-mono`: Azeret Mono for code, tags, and technical labels
 *
 * ## Typography Utilities
 *
 * - `heading-tight`: Letter spacing of -0.025em for large headings
 * - `heading-normal`: Letter spacing of -0.015em for medium headings
 * - `prose-optimized`: Enhanced line height (1.6) for better readability
 * - `text-balance`: CSS text-wrap balance for better line breaks
 * - `text-pretty`: CSS text-wrap pretty for improved typography
 */

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete typography system with font scales, weights, and utility classes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Font Families
 *
 * Overview of the three font families used in the design system.
 */
export const FontFamilies: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-semibold">Switzer (Copy)</h2>
        <div className="space-y-3 font-copy">
          <p className="text-sm font-normal">
            Regular 400 - The quick brown fox jumps over the lazy dog
          </p>
          <p className="text-base font-medium">
            Medium 500 - The quick brown fox jumps over the lazy dog
          </p>
          <p className="text-lg font-semibold">
            Semibold 600 - The quick brown fox jumps over the lazy dog
          </p>
          <p className="text-xl font-bold">
            Bold 700 - The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <code className="text-sm font-mono">font-copy</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-semibold">Switzer (Headings)</h2>
        <div className="space-y-3 font-heading">
          <h1 className="text-5xl font-bold heading-tight">Display Heading</h1>
          <h2 className="text-4xl font-semibold heading-tight">Large Heading</h2>
          <h3 className="text-3xl font-semibold heading-normal">Medium Heading</h3>
          <h4 className="text-2xl font-semibold heading-normal">Small Heading</h4>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <code className="text-sm font-mono">font-heading + heading-tight / heading-normal</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-semibold">Azeret Mono (Monospace)</h2>
        <div className="space-y-3 font-mono">
          <p className="text-xs">Extra Small - Design + Development Studio</p>
          <p className="text-sm">Small - const theme = "oklch(0.205 0 0)"</p>
          <p className="text-base">Base - function calculateTotal(items)</p>
          <p className="text-lg">Large - npm run build</p>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <code className="text-sm font-mono">font-mono</code>
        </div>
      </div>
    </div>
  ),
};

/**
 * ## Type Scale
 *
 * Comprehensive type scale from extra small to display sizes.
 */
export const TypeScale: Story = {
  render: () => (
    <div className="space-y-6">
      <TypeScaleItem size="text-xs" label="Extra Small (xs)" example="12px / 0.75rem" />
      <TypeScaleItem size="text-sm" label="Small (sm)" example="14px / 0.875rem" />
      <TypeScaleItem size="text-base" label="Base" example="16px / 1rem" />
      <TypeScaleItem size="text-lg" label="Large (lg)" example="18px / 1.125rem" />
      <TypeScaleItem size="text-xl" label="Extra Large (xl)" example="20px / 1.25rem" />
      <TypeScaleItem size="text-2xl" label="2XL" example="24px / 1.5rem" />
      <TypeScaleItem size="text-3xl" label="3XL" example="30px / 1.875rem" />
      <TypeScaleItem size="text-4xl" label="4XL" example="36px / 2.25rem" />
      <TypeScaleItem size="text-5xl" label="5XL" example="48px / 3rem" />
      <TypeScaleItem size="text-6xl" label="6XL" example="60px / 3.75rem" />
    </div>
  ),
};

/**
 * ## Font Weights
 *
 * Available font weights for Switzer typeface.
 */
export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4 font-copy">
      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
        <span className="text-lg font-normal">Regular 400</span>
        <code className="text-sm font-mono text-muted-foreground">font-normal</code>
      </div>
      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
        <span className="text-lg font-medium">Medium 500</span>
        <code className="text-sm font-mono text-muted-foreground">font-medium</code>
      </div>
      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
        <span className="text-lg font-semibold">Semibold 600</span>
        <code className="text-sm font-mono text-muted-foreground">font-semibold</code>
      </div>
      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
        <span className="text-lg font-bold">Bold 700</span>
        <code className="text-sm font-mono text-muted-foreground">font-bold</code>
      </div>
    </div>
  ),
};

/**
 * ## Typography Utilities
 *
 * Special utility classes for enhanced typography.
 */
export const TypographyUtilities: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-xl font-heading font-semibold">Heading Letter Spacing</h3>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <p className="text-3xl font-heading font-bold heading-tight mb-2">
              Tight Letter Spacing
            </p>
            <code className="text-sm font-mono text-muted-foreground">heading-tight (-0.025em)</code>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-3xl font-heading font-bold heading-normal mb-2">
              Normal Letter Spacing
            </p>
            <code className="text-sm font-mono text-muted-foreground">heading-normal (-0.015em)</code>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-heading font-semibold">Prose Optimization</h3>
        <div className="p-4 border border-border rounded-lg">
          <p className="prose-optimized max-w-2xl">
            The prose-optimized class applies enhanced line height (1.6) and font feature settings for
            improved readability. It enables kerning, ligatures, and contextual alternates for a polished
            reading experience. This is ideal for long-form content, articles, and body copy.
          </p>
          <code className="text-sm font-mono text-muted-foreground mt-3 block">prose-optimized</code>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-heading font-semibold">Text Wrapping</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <p className="text-balance text-2xl font-heading font-semibold mb-2">
              This heading uses text balance for better line breaks
            </p>
            <code className="text-sm font-mono text-muted-foreground">text-balance</code>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-pretty mb-2">
              This paragraph uses text pretty for improved typography and more natural line breaking
              in longer text blocks.
            </p>
            <code className="text-sm font-mono text-muted-foreground">text-pretty</code>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * ## Real World Examples
 *
 * Typography combinations as used throughout the design system.
 */
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="p-6 border border-border rounded-lg space-y-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <span className="size-2 rounded-full bg-primary" />
          Design + Development Studio
        </div>
        <h1 className="text-5xl font-heading font-bold heading-tight">
          We help launch digital experiences.
        </h1>
        <p className="text-lg font-copy text-muted-foreground leading-relaxed max-w-2xl prose-optimized">
          You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition.
          Some pieces clicking, others… not quite. It&apos;s not failure—it&apos;s friction.
        </p>
      </div>

      <div className="p-6 border border-border rounded-lg space-y-4">
        <div className="flex gap-4 text-xs text-muted-foreground font-mono">
          <span>Product • Brand • Development</span>
          <span>•</span>
          <span>2025</span>
        </div>
        <h2 className="text-4xl font-heading font-bold heading-tight">
          JustScore
        </h2>
        <p className="text-base font-copy text-muted-foreground leading-relaxed prose-optimized">
          An AI-powered performance management tool that helps team leaders score real-time
          actions and behaviours—turning quick observations into clear, data-driven insights.
        </p>
      </div>

      <div className="p-6 border border-border rounded-lg space-y-3">
        <h3 className="text-xl font-heading font-semibold">
          Key Responsibilities
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm font-copy text-muted-foreground">
            <span className="size-2 rounded-full bg-primary mt-1.5" />
            <span>Built and led a multidisciplinary UX team across UK, Poland, and Barcelona.</span>
          </li>
          <li className="flex items-start gap-2 text-sm font-copy text-muted-foreground">
            <span className="size-2 rounded-full bg-primary mt-1.5" />
            <span>Defined and drove the end-to-end UX vision for OSP (B2B and B2C).</span>
          </li>
          <li className="flex items-start gap-2 text-sm font-copy text-muted-foreground">
            <span className="size-2 rounded-full bg-primary mt-1.5" />
            <span>Created and scaled a B2B and B2C design systems.</span>
          </li>
        </ul>
      </div>
    </div>
  ),
};

// Helper component
function TypeScaleItem({ size, label, example }: { size: string; label: string; example: string }) {
  return (
    <div className="flex items-baseline justify-between p-4 border border-border rounded-lg">
      <div className={`${size} font-copy`}>The quick brown fox jumps over the lazy dog</div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs text-muted-foreground font-mono">{example}</div>
      </div>
    </div>
  );
}
