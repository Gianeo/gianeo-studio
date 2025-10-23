import type { Meta, StoryObj } from '@storybook/nextjs';
import HeroSection from '@/components/sections/Hero';
import ClientsLogos from '@/components/sections/ClientsLogos';
import ProductShowcase from '@/components/sections/ProductShowcase';
import PersonalProfile from '@/components/sections/Profile';

/**
 * # Design Patterns
 *
 * Reusable section patterns used throughout the website. These components represent
 * complete page sections that can be composed to create full pages while maintaining
 * consistency in layout, spacing, and interaction patterns.
 *
 * ## Pattern Principles
 *
 * - **Sticky Headers**: Each section uses a sticky header with glass morphism for context
 * - **Grid System**: 12-column grid with consistent breakpoints and spacing
 * - **Glass Effects**: Subtle backdrop blur and transparency for depth
 * - **Lazy Loading**: Optimized image loading with intersection observer
 * - **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
 * - **Responsive**: Mobile-first design with fluid typography and spacing
 *
 * ## Layout Grid
 *
 * All sections follow a 12-column grid system:
 * - Mobile: Full width (col-span-12)
 * - Desktop: Content centered (col-start-2 or col-start-3)
 * - Consistent gutter spacing (px-6 lg:px-12)
 */

const meta: Meta = {
  title: 'Patterns/Sections',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete section patterns that can be composed to build pages.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Hero Section
 *
 * The primary landing section that introduces the studio and showcases key work.
 *
 * ### Features:
 * - **Logo & Badge**: Studio branding with descriptive tag
 * - **Headline + Description**: Clear value proposition
 * - **Image Grid**: 2x3 grid mixing images and text cells
 * - **Decorative Element**: Horizontal bar for visual interest
 *
 * ### Use Cases:
 * - Homepage introduction
 * - Landing pages
 * - About pages
 *
 * ### Customization:
 * - Replace images with project work
 * - Update text cells with service offerings
 * - Modify headline and description copy
 */
export const Hero: Story = {
  render: () => <HeroSection />,
};

/**
 * ## Client Logos Grid
 *
 * A section showcasing client relationships through logo display.
 *
 * ### Features:
 * - **Sticky Header**: "From 0-1 to Enterprises" context banner
 * - **Responsive Grid**: 3 columns mobile, 5 columns desktop
 * - **Grayscale Effect**: Logos desaturate by default, color on hover
 * - **Loading States**: Staggered fade-in for smooth loading
 * - **And Many More**: Closing text cell for additional context
 *
 * ### Use Cases:
 * - Client portfolio sections
 * - Partner showcases
 * - Brand association displays
 *
 * ### Data Structure:
 * ```typescript
 * {
 *   name: string;
 *   filename: string;
 *   industry: string;
 *   description: string;
 *   founded: string;
 *   website?: string;
 * }
 * ```
 */
export const ClientLogos: Story = {
  render: () => <ClientsLogos />,
};

/**
 * ## Product Showcase
 *
 * A detailed project/product presentation section with image gallery.
 *
 * ### Features:
 * - **Sticky Header**: "Latest Ideation and Development" banner
 * - **Project Metadata**: Category tags and date
 * - **Gradient Title**: Text gradient from foreground → primary → accent
 * - **Description**: Long-form project description
 * - **Image Gallery**: Responsive grid (1/2/3/4 columns)
 * - **Aspect Ratio**: Consistent 4:3 aspect for all images
 *
 * ### Use Cases:
 * - Project case studies
 * - Product pages
 * - Portfolio details
 * - Work samples
 *
 * ### Layout Variants:
 * - 1 column: Mobile
 * - 2 columns: Tablet
 * - 3 columns: Desktop
 * - 4 columns: Large desktop
 *
 * ### Image Requirements:
 * - Format: WebP for optimal performance
 * - Aspect Ratio: 4:3 (e.g., 1200x900px)
 * - Quality: 90 for sharp display
 * - Lazy Loading: All except first image
 */
export const ProductShowcase_Pattern: Story = {
  name: 'Product Showcase',
  render: () => <ProductShowcase />,
};

/**
 * ## Personal Profile
 *
 * A bio/about section with personal statement and metadata.
 *
 * ### Features:
 * - **Sticky Header**: "Profile" context banner
 * - **Metadata Badges**: Tagline, experience years, location (icons + text)
 * - **Name Display**: Large heading with line break support
 * - **Personal Statement**: Multi-paragraph bio with prose styling
 * - **Contact Actions**: Email, LinkedIn, Instagram buttons
 * - **Structured Data**: JSON-LD for SEO
 *
 * ### Use Cases:
 * - About pages
 * - Team member profiles
 * - Author bios
 * - Personal branding pages
 *
 * ### Content Guidelines:
 * - **Name**: Use `\n` for line breaks in heading
 * - **Statement**: Separate paragraphs with `\n\n`
 * - **Tagline**: Short descriptor (e.g., "Design + Development")
 * - **Experience**: Number of years (e.g., "25+")
 */
export const Profile: Story = {
  render: () => <PersonalProfile />,
};

/**
 * ## Sticky Header Pattern
 *
 * All sections share a common sticky header pattern for navigation context.
 *
 * ### Anatomy:
 * ```tsx
 * <header className="sticky top-0 z-50 glass border-b border-border/50">
 *   <div className="flex justify-between px-6 lg:px-12 py-4">
 *     <div className="flex items-center gap-4 text-xs font-mono">
 *       <ArrowRightIcon size={16} />
 *       Section Title
 *     </div>
 *   </div>
 * </header>
 * ```
 *
 * ### Variants:
 * - **Arrow Right**: Standard navigation indicator
 * - **Glass Effect**: Backdrop blur with subtle transparency
 * - **Border**: Bottom border at 50% opacity
 * - **Typography**: xs size, monospace font, muted foreground
 *
 * ### Use Cases:
 * - Section headers
 * - Navigation bars
 * - Sticky context indicators
 */
export const StickyHeaderPattern: Story = {
  name: 'Sticky Header Pattern',
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-heading font-semibold mb-4">Pattern Examples</h3>
        <div className="space-y-4">
          {/* Standard Pattern */}
          <div className="border border-border rounded-lg overflow-hidden">
            <header className="sticky top-0 z-50 glass border-b border-border/50">
              <div className="flex justify-between px-6 lg:px-12 py-4">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span className="text-lg">→</span>
                  Latest Ideation and Development
                </div>
              </div>
            </header>
            <div className="p-8 bg-muted/20">
              <p className="text-sm text-muted-foreground">
                Section content goes here. The header will stick to the top when scrolling.
              </p>
            </div>
          </div>

          {/* Variant: From 0-1 to Enterprises */}
          <div className="border border-border rounded-lg overflow-hidden">
            <header className="sticky top-0 z-50 glass border-b border-border/50">
              <div className="flex justify-between px-6 lg:px-12 py-4">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span className="text-lg">→</span>
                  From 0-1 to Enterprises
                </div>
              </div>
            </header>
            <div className="p-8 bg-muted/20">
              <p className="text-sm text-muted-foreground">
                Used in the Client Logos section to indicate experience range.
              </p>
            </div>
          </div>

          {/* Variant: Profile */}
          <div className="border border-border rounded-lg overflow-hidden">
            <header className="sticky top-0 z-50 glass border-b border-border/50">
              <div className="flex justify-between px-6 lg:px-12 py-4">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span className="text-lg">→</span>
                  Profile
                </div>
              </div>
            </header>
            <div className="p-8 bg-muted/20">
              <p className="text-sm text-muted-foreground">
                Simple one-word headers work well for personal content sections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Code */}
      <div className="p-6 bg-card border border-border rounded-lg">
        <h4 className="text-sm font-heading font-semibold mb-3">Implementation</h4>
        <pre className="text-xs font-mono text-muted-foreground overflow-x-auto">
{`<header className="sticky top-0 z-50 glass border-b border-border/50">
  <div className="flex justify-between px-6 lg:px-12 py-4">
    <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
      <ArrowRightIcon size={16} />
      Your Section Title
    </div>
  </div>
</header>`}
        </pre>
      </div>

      {/* Usage Guidelines */}
      <div className="p-6 bg-accent/5 border border-accent/20 rounded-lg">
        <h4 className="text-sm font-heading font-semibold mb-3">Usage Guidelines</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Use sticky positioning to maintain context while scrolling</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Keep text short and descriptive (2-5 words)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Always include ArrowRightIcon for visual consistency</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Use monospace font (font-mono) for technical aesthetic</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Apply glass effect (backdrop-blur) for depth</span>
          </li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * ## Image Grid Patterns
 *
 * Consistent patterns for displaying images across sections.
 *
 * ### Grid Variants:
 *
 * #### Hero Grid (2x3 Mixed)
 * - 2 columns on all breakpoints
 * - Mix of images and text cells
 * - Equal aspect ratios (square)
 *
 * #### Logo Grid (3→5 columns)
 * - 3 columns: Mobile
 * - 5 columns: Desktop
 * - Aspect ratio: 3:2
 * - Grayscale with color hover
 *
 * #### Product Grid (1→2→3→4 columns)
 * - 1 column: Mobile
 * - 2 columns: Tablet (md)
 * - 3 columns: Desktop (lg)
 * - 4 columns: Large desktop (xl)
 * - Aspect ratio: 4:3
 *
 * ### Shared Features:
 * - Gap: 1 (4px) for tight grids
 * - Rounded corners: rounded-lg
 * - Hover effects: Scale + overlay gradient
 * - Loading states: Gray shimmer animation
 */
export const ImageGridPatterns: Story = {
  name: 'Image Grid Patterns',
  render: () => (
    <div className="space-y-12">
      {/* Hero Grid Pattern */}
      <div>
        <h3 className="text-xl font-heading font-semibold mb-4">Hero Grid (2x3 Mixed)</h3>
        <div className="grid grid-cols-2 gap-1 auto-rows-fr">
          <div className="bg-neutral-900 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-xs font-mono text-neutral-600">Text Cell</span>
          </div>
          <div className="bg-muted rounded-lg aspect-square"></div>
          <div className="bg-muted rounded-lg aspect-square"></div>
          <div className="bg-neutral-900 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-xs font-mono text-neutral-600">Text Cell</span>
          </div>
          <div className="bg-neutral-900 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-xs font-mono text-neutral-600">Text Cell</span>
          </div>
          <div className="bg-muted rounded-lg aspect-square"></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-mono">
          grid-cols-2 gap-1 auto-rows-fr
        </p>
      </div>

      {/* Logo Grid Pattern */}
      <div>
        <h3 className="text-xl font-heading font-semibold mb-4">Logo Grid (3→5 columns)</h3>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-1 auto-rows-fr">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="bg-neutral-900 rounded-lg aspect-[3/2] flex items-center justify-center">
              <span className="text-xs font-mono text-neutral-600">Logo</span>
            </div>
          ))}
          <div className="bg-neutral-900 rounded-lg aspect-[3/2] flex items-center justify-center">
            <span className="text-xs font-mono text-neutral-600">and many more</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-mono">
          grid-cols-3 lg:grid-cols-5 gap-1 aspect-[3/2]
        </p>
      </div>

      {/* Product Grid Pattern */}
      <div>
        <h3 className="text-xl font-heading font-semibold mb-4">Product Grid (1→2→3→4 columns)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-muted rounded-lg aspect-[4/3]"></div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-mono">
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 aspect-[4/3]
        </p>
      </div>

      {/* Implementation Guidelines */}
      <div className="p-6 bg-card border border-border rounded-lg">
        <h4 className="text-sm font-heading font-semibold mb-3">Grid Implementation Guidelines</h4>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1">Gap Spacing</p>
            <p>Use `gap-1` (4px) for tight, magazine-style layouts</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Aspect Ratios</p>
            <ul className="ml-4 space-y-1">
              <li>• Square: `aspect-square` for hero grids</li>
              <li>• Landscape: `aspect-[3/2]` for logos</li>
              <li>• Photos: `aspect-[4/3]` for product images</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Responsive Breakpoints</p>
            <ul className="ml-4 space-y-1">
              <li>• Mobile: 1-2 columns</li>
              <li>• Tablet (md): 2-3 columns</li>
              <li>• Desktop (lg): 3-4 columns</li>
              <li>• Large (xl): 4-5 columns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * ## Metadata Badges Pattern
 *
 * Small informational badges used to provide context about content.
 *
 * ### Usage:
 * - Project metadata (category, date)
 * - Profile information (location, experience)
 * - Content tags and labels
 *
 * ### Anatomy:
 * - Icon (16px Phosphor Icon)
 * - Text (xs size, mono font)
 * - Gap: 2 (8px) between icon and text
 * - Color: muted-foreground
 *
 * ### Common Icons:
 * - TagIcon: Categories, services
 * - CalendarIcon: Dates, years
 * - MapPinIcon: Locations
 * - EnvelopeIcon: Contact info
 */
export const MetadataBadges: Story = {
  name: 'Metadata Badges',
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-heading font-semibold mb-4">Badge Variations</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 font-mono">
              <span className="text-lg">🏷️</span>
              <span>Design + Development Studio</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 font-mono">
              <span className="text-lg">📅</span>
              <span>2025</span>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <span className="text-lg">🏷️</span>
              <span>Product • Brand • Development</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 font-mono">
              <span className="text-lg">📍</span>
              <span>London, UK</span>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <span className="text-lg">📅</span>
              <span>25+ years experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-card border border-border rounded-lg">
        <h4 className="text-sm font-heading font-semibold mb-3">Implementation</h4>
        <pre className="text-xs font-mono text-muted-foreground overflow-x-auto">
{`<div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
  <div className="flex items-center gap-2 font-mono">
    <TagIcon size={16} />
    <span>Category Text</span>
  </div>
  <div className="flex items-center gap-2 font-mono">
    <CalendarIcon size={16} />
    <span>Date Text</span>
  </div>
</div>`}
        </pre>
      </div>
    </div>
  ),
};

/**
 * ## Section Spacing Pattern
 *
 * Consistent spacing and padding across all sections.
 *
 * ### Vertical Spacing:
 * - Section padding: `py-12 lg:py-16` (top/bottom)
 * - Content spacing: `mb-6 lg:mb-12` (between elements)
 * - Tight spacing: `mb-4` (related elements)
 *
 * ### Horizontal Spacing:
 * - Mobile: `px-6` (24px)
 * - Desktop: `px-12` or use grid col-start
 * - Grid centering: `lg:col-start-2` or `lg:col-start-3`
 *
 * ### Grid Column Widths:
 * - Content: `col-span-12 lg:col-span-4-5`
 * - Centered: `lg:col-start-2` or `lg:col-start-3`
 * - Full width: `col-span-12`
 */
export const SectionSpacing: Story = {
  name: 'Section Spacing',
  render: () => (
    <div className="space-y-8">
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-primary/5 p-12 lg:p-16">
          <div className="bg-primary/10 p-6 lg:p-12 rounded">
            <div className="bg-background p-6 rounded">
              <p className="text-sm text-muted-foreground font-mono text-center">
                Section Padding: py-12 lg:py-16
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-card border border-border rounded-lg">
        <h4 className="text-sm font-heading font-semibold mb-3">Spacing Scale</h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="font-mono text-muted-foreground">px-6</span>
            <span className="text-muted-foreground">24px - Mobile horizontal padding</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-muted-foreground">px-12</span>
            <span className="text-muted-foreground">48px - Desktop horizontal padding</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-muted-foreground">py-12</span>
            <span className="text-muted-foreground">48px - Section vertical padding</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-muted-foreground">py-16</span>
            <span className="text-muted-foreground">64px - Desktop vertical padding</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-muted-foreground">mb-6</span>
            <span className="text-muted-foreground">24px - Element spacing</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-muted-foreground">mb-12</span>
            <span className="text-muted-foreground">48px - Section spacing</span>
          </div>
        </div>
      </div>
    </div>
  ),
};
