/**
 * Types for the hidden, password-gated application pages (CV + cover letter).
 *
 * Each company you apply to is a single `ApplicationConfig` entry in
 * `applications.ts`. To add a new company you only need: a slug, a password,
 * a `theme`, and the two content objects. No new components/plumbing.
 */

/** Visual identity for a single application page (matches the target company). */
export interface ApplicationTheme {
  /** Page background. */
  bg: string
  /** Slightly raised surface (cards, gate panel, toggle track). */
  surface: string
  /** Primary text colour. */
  text: string
  /** Secondary / muted text colour. */
  muted: string
  /** Hairline border colour. */
  border: string
  /** Accent / focus colour. */
  accent: string
  /** Text colour to sit on top of an accent-filled element. */
  onAccent: string
  /** Heading font stack. */
  fontHeading: string
  /** Body font stack. */
  fontBody: string
  /** Monospace font stack (labels, dates, small caps details). */
  fontMono: string
  /** Base border radius in px (0 = sharp / Vercel-like). */
  radius: number
}

/** A paragraph, optionally with a bold lead-in (e.g. "Performance:"). */
export type Paragraph = string | { lead: string; text: string }

/** A single role in the CV. */
export interface ExperienceEntry {
  title: string
  org: string
  dates: string
  location?: string
  /** Optional one-line context under the title (e.g. team / focus). */
  summary?: string
  /** Optional unbulleted paragraphs shown before the bullets. */
  intro?: Paragraph[]
  bullets: string[]
  /** Optional nested sub-items (e.g. products under a Founder role). */
  subEntries?: { name: string; note?: string; bullets: string[] }[]
}

/** A block of experience with a heading (e.g. "Experience", "Earlier Experience"). */
export interface ExperienceSection {
  heading: string
  entries: ExperienceEntry[]
}

export interface EducationEntry {
  qualification: string
  institution: string
}

export interface CvContent {
  name: string
  /** e.g. "Sydney, Australia · +61 … · email". Rendered as discrete items. */
  contact: string[]
  /** Optional profile blurb shown under the header, before the sections. */
  profile?: string
  sections: ExperienceSection[]
  education: {
    heading: string
    entries: EducationEntry[]
  }
}

export interface CoverLetterContent {
  name: string
  contact: string[]
  /** e.g. "COVER LETTER — ACCOUNT EXECUTIVE, MAJORS INSTALL BASE (APAC)". */
  title: string
  paragraphs: Paragraph[]
  /** Optional sign-off line (defaults to nothing). */
  signoff?: string
}

export type DocKind = 'cover' | 'cv'

export interface ApplicationConfig {
  /** URL slug — page lives at /apply/<slug>. */
  slug: string
  /** Display name of the company being applied to. */
  company: string
  /** The role, used in <title> and gate copy. */
  roleTitle: string
  /** Case-sensitive password required to view the page. */
  password: string
  /** Optional hint shown on the gate (e.g. spelling out the password). */
  passwordHint?: string
  theme: ApplicationTheme
  coverLetter: CoverLetterContent
  cv: CvContent
  /** Which document shows first after unlocking. */
  defaultDoc: DocKind
  /**
   * Optional URL of a prepared PDF (served from /public). When set, the
   * "Download PDF" button downloads this file instead of printing the page.
   */
  pdfUrl?: string
}
