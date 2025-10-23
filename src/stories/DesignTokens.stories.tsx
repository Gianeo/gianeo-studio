import type { Meta, StoryObj } from '@storybook/nextjs';

/**
 * # Design Tokens
 *
 * This design system uses Tailwind CSS v4 with custom design tokens defined inline using the `@theme` directive.
 * All tokens are based on OKLCH color space for better color accuracy and support both light and dark modes.
 *
 * ## Color System
 *
 * Our color palette is built on semantic color tokens that automatically adapt to light/dark mode:
 * - **Primary**: Main brand color for CTAs and important elements
 * - **Secondary**: Supporting color for backgrounds and secondary actions
 * - **Accent**: Highlight color for interactive elements
 * - **Muted**: Subdued backgrounds and borders
 * - **Destructive**: Error states and warnings
 *
 * ## Radius System
 *
 * Consistent border radius values create visual harmony:
 * - `radius-sm`: Small elements (badges, tags)
 * - `radius-md`: Medium elements (inputs, buttons)
 * - `radius-lg`: Large elements (cards, modals)
 * - `radius-xl`: Extra large elements (hero sections)
 */

const meta: Meta = {
  title: 'Foundation/Design Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive design tokens including colors, spacing, and sizing.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Color Palette
 *
 * Complete color palette with all semantic tokens. Each color automatically
 * adapts between light and dark mode.
 */
export const Colors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-heading font-semibold mb-4">Primary Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch color="bg-primary" foreground="text-primary-foreground" label="Primary" />
          <ColorSwatch color="bg-secondary" foreground="text-secondary-foreground" label="Secondary" />
          <ColorSwatch color="bg-accent" foreground="text-accent-foreground" label="Accent" />
          <ColorSwatch color="bg-muted" foreground="text-muted-foreground" label="Muted" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-heading font-semibold mb-4">Semantic Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch color="bg-destructive" foreground="text-white" label="Destructive" />
          <ColorSwatch color="bg-background" foreground="text-foreground" label="Background" bordered />
          <ColorSwatch color="bg-card" foreground="text-card-foreground" label="Card" bordered />
          <ColorSwatch color="bg-popover" foreground="text-popover-foreground" label="Popover" bordered />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-heading font-semibold mb-4">Border & Input</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 rounded-lg border-4 border-border bg-background flex items-center justify-center">
              <span className="text-sm font-mono">Border</span>
            </div>
            <p className="text-xs text-center font-mono">border</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg border-4 border-input bg-background flex items-center justify-center">
              <span className="text-sm font-mono">Input</span>
            </div>
            <p className="text-xs text-center font-mono">input</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg ring-4 ring-ring bg-background flex items-center justify-center">
              <span className="text-sm font-mono">Ring</span>
            </div>
            <p className="text-xs text-center font-mono">ring</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-heading font-semibold mb-4">Chart Colors</h2>
        <div className="grid grid-cols-5 gap-4">
          <ColorSwatch color="bg-chart-1" label="Chart 1" />
          <ColorSwatch color="bg-chart-2" label="Chart 2" />
          <ColorSwatch color="bg-chart-3" label="Chart 3" />
          <ColorSwatch color="bg-chart-4" label="Chart 4" />
          <ColorSwatch color="bg-chart-5" label="Chart 5" />
        </div>
      </div>
    </div>
  ),
};

/**
 * ## Border Radius
 *
 * Consistent border radius values for different component sizes.
 */
export const BorderRadius: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 bg-primary rounded-[var(--radius-sm)] flex items-center justify-center text-primary-foreground text-xs font-mono">
          radius-sm
        </div>
        <div>
          <p className="font-semibold">Small</p>
          <p className="text-sm text-muted-foreground">calc(var(--radius) - 4px)</p>
          <p className="text-xs text-muted-foreground">Badges, tags, small elements</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-24 h-24 bg-primary rounded-[var(--radius-md)] flex items-center justify-center text-primary-foreground text-xs font-mono">
          radius-md
        </div>
        <div>
          <p className="font-semibold">Medium</p>
          <p className="text-sm text-muted-foreground">calc(var(--radius) - 2px)</p>
          <p className="text-xs text-muted-foreground">Inputs, buttons, controls</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-24 h-24 bg-primary rounded-[var(--radius-lg)] flex items-center justify-center text-primary-foreground text-xs font-mono">
          radius-lg
        </div>
        <div>
          <p className="font-semibold">Large (Default)</p>
          <p className="text-sm text-muted-foreground">var(--radius) = 0.625rem</p>
          <p className="text-xs text-muted-foreground">Cards, modals, panels</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-24 h-24 bg-primary rounded-[var(--radius-xl)] flex items-center justify-center text-primary-foreground text-xs font-mono">
          radius-xl
        </div>
        <div>
          <p className="font-semibold">Extra Large</p>
          <p className="text-sm text-muted-foreground">calc(var(--radius) + 4px)</p>
          <p className="text-xs text-muted-foreground">Hero sections, large containers</p>
        </div>
      </div>
    </div>
  ),
};

/**
 * ## Glass Morphism
 *
 * The glass effect utility class provides a modern frosted glass appearance.
 */
export const GlassEffect: Story = {
  render: () => (
    <div className="relative h-64 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-lg overflow-hidden p-8">
      <div className="glass p-6 rounded-lg max-w-md">
        <h3 className="text-lg font-heading font-semibold mb-2">Glass Effect</h3>
        <p className="text-sm text-muted-foreground">
          The glass class applies backdrop-blur-md with 40% opacity background and subtle border.
        </p>
        <div className="mt-4 p-3 bg-background/20 rounded text-xs font-mono">
          .glass
        </div>
      </div>
    </div>
  ),
};

// Helper component for color swatches
function ColorSwatch({
  color,
  foreground = 'text-white',
  label,
  bordered = false
}: {
  color: string;
  foreground?: string;
  label: string;
  bordered?: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className={`h-20 ${color} ${foreground} rounded-lg flex items-center justify-center ${bordered ? 'border border-border' : ''}`}>
        <span className="text-sm font-semibold">{label}</span>
      </div>
      <p className="text-xs text-center font-mono">{label.toLowerCase()}</p>
    </div>
  );
}
