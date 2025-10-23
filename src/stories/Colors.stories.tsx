import type { Meta, StoryObj } from '@storybook/nextjs';

/**
 * # Color System
 *
 * The color system is built on OKLCH color space for perceptually uniform colors
 * that work beautifully in both light and dark modes. All colors are defined as
 * CSS custom properties that automatically adapt to the current theme.
 *
 * ## OKLCH Benefits
 *
 * - **Perceptually Uniform**: Equal numerical changes result in equal perceived changes
 * - **Wide Gamut**: Access to more vivid colors than RGB/HSL
 * - **Predictable**: Lightness, chroma, and hue are independent
 * - **Future-Proof**: Native browser support and P3 color space ready
 *
 * ## Semantic Color Tokens
 *
 * Colors are organized by purpose, not by appearance:
 * - `primary`: Main brand actions and emphasis
 * - `secondary`: Supporting content and backgrounds
 * - `accent`: Interactive elements and highlights
 * - `muted`: Subdued backgrounds and disabled states
 * - `destructive`: Errors, warnings, and destructive actions
 */

const meta: Meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete color palette with OKLCH values and semantic usage.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Theme Colors
 *
 * Primary semantic colors that define the visual identity.
 */
export const ThemeColors: Story = {
  render: () => (
    <div className="space-y-8">
      <ColorSection
        title="Primary"
        description="Main brand color for primary actions, CTAs, and important interactive elements."
        bg="bg-primary"
        fg="text-primary-foreground"
        lightValue="oklch(0.205 0 0)"
        darkValue="oklch(0.922 0 0)"
      />

      <ColorSection
        title="Secondary"
        description="Supporting color for secondary actions and background variations."
        bg="bg-secondary"
        fg="text-secondary-foreground"
        lightValue="oklch(0.97 0 0)"
        darkValue="oklch(0.269 0 0)"
      />

      <ColorSection
        title="Accent"
        description="Highlight color for hover states and interactive elements."
        bg="bg-accent"
        fg="text-accent-foreground"
        lightValue="oklch(0.97 0 0)"
        darkValue="oklch(0.269 0 0)"
      />

      <ColorSection
        title="Muted"
        description="Subdued backgrounds, disabled states, and subtle borders."
        bg="bg-muted"
        fg="text-muted-foreground"
        lightValue="oklch(0.97 0 0)"
        darkValue="oklch(0.269 0 0)"
      />

      <ColorSection
        title="Destructive"
        description="Error states, warnings, and destructive actions like delete."
        bg="bg-destructive"
        fg="text-white"
        lightValue="oklch(0.577 0.245 27.325)"
        darkValue="oklch(0.704 0.191 22.216)"
      />
    </div>
  ),
};

/**
 * ## Surface Colors
 *
 * Background and surface colors for different content layers.
 */
export const SurfaceColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SurfaceCard
          title="Background"
          description="Page background color"
          className="bg-background text-foreground"
          variable="--background / --foreground"
        />

        <SurfaceCard
          title="Card"
          description="Elevated content containers"
          className="bg-card text-card-foreground border border-border"
          variable="--card / --card-foreground"
        />

        <SurfaceCard
          title="Popover"
          description="Floating UI elements"
          className="bg-popover text-popover-foreground border border-border shadow-lg"
          variable="--popover / --popover-foreground"
        />

        <div className="p-6 border-4 border-border rounded-lg">
          <h3 className="text-lg font-heading font-semibold mb-2">Border</h3>
          <p className="text-sm text-muted-foreground mb-3">Default border color</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span>Light:</span>
              <span className="text-muted-foreground">oklch(0.922 0 0)</span>
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span>Dark:</span>
              <span className="text-muted-foreground">oklch(1 0 0 / 10%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * ## Chart Colors
 *
 * Vibrant, accessible colors for data visualization.
 */
export const ChartColors: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <ChartColorCard index={1} />
      <ChartColorCard index={2} />
      <ChartColorCard index={3} />
      <ChartColorCard index={4} />
      <ChartColorCard index={5} />
    </div>
  ),
};

/**
 * ## Text Colors
 *
 * Foreground colors for text with proper contrast ratios.
 */
export const TextColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="p-6 border border-border rounded-lg space-y-4">
        <div>
          <p className="text-foreground text-lg font-semibold mb-1">Foreground</p>
          <p className="text-muted-foreground text-sm">Primary text color with maximum contrast</p>
        </div>
        <div>
          <p className="text-muted-foreground text-lg mb-1">Muted Foreground</p>
          <p className="text-muted-foreground text-sm">Secondary text, descriptions, and labels</p>
        </div>
        <div className="bg-primary text-primary-foreground p-4 rounded-lg">
          <p className="font-semibold mb-1">Primary Foreground</p>
          <p className="text-sm opacity-90">Text on primary background</p>
        </div>
        <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
          <p className="font-semibold mb-1">Secondary Foreground</p>
          <p className="text-sm opacity-90">Text on secondary background</p>
        </div>
      </div>
    </div>
  ),
};

/**
 * ## Usage Examples
 *
 * Real-world examples of color combinations in components.
 */
export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Button Examples */}
        <div className="space-y-3">
          <h3 className="text-lg font-heading font-semibold">Buttons</h3>
          <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-copy font-medium">
            Primary Button
          </button>
          <button className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors font-copy font-medium">
            Secondary Button
          </button>
          <button className="w-full border border-border text-foreground px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-copy font-medium">
            Outline Button
          </button>
        </div>

        {/* Card Example */}
        <div className="bg-card text-card-foreground border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-heading font-semibold mb-2">Card Component</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Cards use the card background with card-foreground text and border for definition.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md font-mono">
              Tag
            </span>
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-mono">
              Badge
            </span>
          </div>
        </div>
      </div>

      {/* Alert Examples */}
      <div className="space-y-3">
        <h3 className="text-lg font-heading font-semibold">Alerts & States</h3>
        <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-lg">
          <p className="font-semibold mb-1">Error State</p>
          <p className="text-sm opacity-90">Something went wrong. Please try again.</p>
        </div>
        <div className="bg-muted text-muted-foreground p-4 rounded-lg">
          <p className="font-semibold mb-1">Disabled State</p>
          <p className="text-sm">This feature is currently unavailable.</p>
        </div>
      </div>
    </div>
  ),
};

// Helper Components

function ColorSection({
  title,
  description,
  bg,
  fg,
  lightValue,
  darkValue
}: {
  title: string;
  description: string;
  bg: string;
  fg: string;
  lightValue: string;
  darkValue: string;
}) {
  return (
    <div className="space-y-3">
      <div className={`${bg} ${fg} p-8 rounded-lg`}>
        <h3 className="text-2xl font-heading font-bold mb-2">{title}</h3>
        <p className="opacity-90">{description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground">Light Mode</p>
          <code className="text-xs font-mono">{lightValue}</code>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground">Dark Mode</p>
          <code className="text-xs font-mono">{darkValue}</code>
        </div>
      </div>
    </div>
  );
}

function SurfaceCard({
  title,
  description,
  className,
  variable
}: {
  title: string;
  description: string;
  className: string;
  variable: string;
}) {
  return (
    <div className={`p-6 rounded-lg ${className}`}>
      <h3 className="text-lg font-heading font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-3 opacity-80">{description}</p>
      <code className="text-xs font-mono opacity-60">{variable}</code>
    </div>
  );
}

function ChartColorCard({ index }: { index: number }) {
  const chartValues = [
    { light: 'oklch(0.646 0.222 41.116)', dark: 'oklch(0.488 0.243 264.376)' },
    { light: 'oklch(0.6 0.118 184.704)', dark: 'oklch(0.696 0.17 162.48)' },
    { light: 'oklch(0.398 0.07 227.392)', dark: 'oklch(0.769 0.188 70.08)' },
    { light: 'oklch(0.828 0.189 84.429)', dark: 'oklch(0.627 0.265 303.9)' },
    { light: 'oklch(0.769 0.188 70.08)', dark: 'oklch(0.645 0.246 16.439)' },
  ];

  const color = chartValues[index - 1];

  return (
    <div className="space-y-3">
      <div className={`bg-chart-${index} h-24 rounded-lg`} />
      <div>
        <p className="text-sm font-semibold mb-2">Chart {index}</p>
        <div className="space-y-1">
          <code className="text-xs font-mono block text-muted-foreground">{color.light}</code>
          <code className="text-xs font-mono block text-muted-foreground">{color.dark}</code>
        </div>
      </div>
    </div>
  );
}
