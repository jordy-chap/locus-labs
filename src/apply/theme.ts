import type { ApplicationTheme } from './types'

/**
 * Vercel-authentic theme: pure black canvas, white text, high contrast,
 * Geist typography, sharp corners, monochrome with a single near-white accent.
 * Loaded fonts (Geist / Geist Mono) are imported in src/styles/fonts.css.
 */
export const vercelTheme: ApplicationTheme = {
  bg: '#000000',
  surface: '#0a0a0a',
  text: '#ededed',
  muted: '#8f8f8f',
  border: '#2e2e2e',
  accent: '#ffffff',
  onAccent: '#000000',
  fontHeading: "'Geist', system-ui, -apple-system, sans-serif",
  fontBody: "'Geist', system-ui, -apple-system, sans-serif",
  fontMono: "'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace",
  radius: 6,
}
