/**
 * Three-layer token architecture
 * ─────────────────────────────────────────────────────────────────────────────
 * Layer 1 – tokens (this file)
 *   Typed TypeScript constants consumed by components. Every value in
 *   `tokens.colors`, `tokens.spacing`, `tokens.radius`, and `tokens.font`
 *   is a CSS `var(--...)` reference — never a raw value.
 *
 * Layer 2 – CSS custom properties (src/styles/globals.css)
 *   The `:root` block owns the actual design values. Updating a value here
 *   propagates everywhere automatically; no TypeScript changes needed.
 *
 * Layer 3 – tokens.raw
 *   The ONLY place that holds real hex strings. These exist exclusively
 *   because SVG `stroke` / `fill` attributes cannot accept CSS `var()`
 *   references — they require resolved colour values at render time.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const tokens = {
  colors: {
    /** Page / card backgrounds */
    surface: 'var(--color-surface)',
    surface2: 'var(--color-surface-2)',
    surface3: 'var(--color-surface-3)',
    surfaceInvert: 'var(--color-text-primary)',

    /** Typography */
    textPrimary: 'var(--color-text-primary)',
    textSecondary: 'var(--color-text-secondary)',
    textMuted: 'var(--color-text-muted)',
    textInvert: 'var(--color-surface)',

    /** Brand accent */
    accent: 'var(--color-accent)',
    accentDim: 'var(--color-accent-dim)',

    /** Borders */
    borderSubtle: 'var(--color-border-subtle)',
    borderAccent: 'var(--color-border-accent)',

    /** Cloud provider palette */
    providers: {
      aws: 'var(--color-aws)',
      azure: 'var(--color-azure)',
      gcp: 'var(--color-gcp)',
      onprem: 'var(--color-onprem)',
    },
  },

  spacing: {
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
    '2xl': 'var(--space-2xl)',
  },

  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    full: 'var(--radius-full)',
  },

  font: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    mono: 'var(--font-mono)',
  },

  /**
   * Raw hex values — use ONLY where CSS variables are not accepted,
   * e.g. SVG `stroke`, `fill`, canvas `ctx.fillStyle`, chart colour arrays.
   */
  raw: {
    accent: '#00e676',
    surface3: '#111c35',
    borderMid: 'rgba(255,255,255,0.055)',
    aws: '#ff9900',
    azure: '#2f8de4',
    gcp: '#4285f4',
    onprem: '#94a3b8',
  },
} as const;

export type Tokens = typeof tokens;
