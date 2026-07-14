import type { ApplicationConfig } from './types'
import { vercelTheme } from './theme'
import { vercelCoverLetter, vercelCv } from './content/vercel'

/**
 * Registry of hidden application pages, keyed by URL slug.
 *
 * To add a new company:
 *   1. Add its content in `content/<company>.ts` (copy vercel.ts as a template).
 *   2. Add a theme in `theme.ts` (or reuse one).
 *   3. Add an entry below with a slug + password.
 * The page appears automatically at /apply/<slug>. Nothing else to wire up.
 */
export const applications: Record<string, ApplicationConfig> = {
  vercel: {
    slug: 'vercel',
    company: 'Vercel',
    roleTitle: 'Account Executive, Majors - Install Base (APAC)',
    password: 'Vercel',
    theme: vercelTheme,
    coverLetter: vercelCoverLetter,
    cv: vercelCv,
    defaultDoc: 'cover',
    pdfUrl: '/apply/JC_CV_CL_Vercel_Majors_Final.pdf',
  },
}

/** Look up an application by slug (case-insensitive on the slug only). */
export function getApplication(slug: string | undefined): ApplicationConfig | undefined {
  if (!slug) return undefined
  return applications[slug.toLowerCase()]
}
