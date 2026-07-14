import type {
  ApplicationTheme,
  CvContent,
  ExperienceEntry,
} from '../../apply/types'
import { DocHeader } from './DocHeader'

interface CvProps {
  theme: ApplicationTheme
  content: CvContent
}

function SectionHeading({ theme, children }: { theme: ApplicationTheme; children: string }) {
  return (
    <h2
      style={{
        fontFamily: theme.fontMono,
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: theme.muted,
        margin: '0 0 4px',
        paddingBottom: '8px',
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      {children}
    </h2>
  )
}

function Bullets({ theme, items }: { theme: ApplicationTheme; items: string[] }) {
  if (items.length === 0) return null
  return (
    <ul
      style={{
        listStyle: 'none',
        margin: '10px 0 0',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      {items.map((b, i) => (
        <li
          key={i}
          style={{
            position: 'relative',
            paddingLeft: '18px',
            fontSize: '14.5px',
            lineHeight: 1.6,
            color: theme.text,
          }}
        >
          <span
            aria-hidden="true"
            style={{ position: 'absolute', left: 0, top: 0, color: theme.muted }}
          >
            –
          </span>
          {b}
        </li>
      ))}
    </ul>
  )
}

function Entry({ theme, entry }: { theme: ApplicationTheme; entry: ExperienceEntry }) {
  return (
    <div className="apply-entry" style={{ marginTop: '22px' }}>
      {/* Title + dates row (wraps on mobile) */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '4px 16px',
        }}
      >
        <span
          style={{
            fontFamily: theme.fontHeading,
            fontSize: '16px',
            fontWeight: 600,
            color: theme.text,
          }}
        >
          {entry.title}
          <span style={{ color: theme.muted, fontWeight: 400 }}>
            {'  ·  '}
            {entry.org}
          </span>
        </span>
        <span
          style={{
            fontFamily: theme.fontMono,
            fontSize: '12.5px',
            color: theme.muted,
            whiteSpace: 'nowrap',
          }}
        >
          {entry.dates}
        </span>
      </div>

      {(entry.summary || entry.location) && (
        <p style={{ fontSize: '13.5px', color: theme.muted, margin: '4px 0 0' }}>
          {[entry.summary, entry.location].filter(Boolean).join('  ·  ')}
        </p>
      )}

      {entry.intro?.map((para, i) => (
        <p
          key={i}
          style={{
            margin: '10px 0 0',
            fontSize: '14.5px',
            lineHeight: 1.6,
            color: theme.text,
          }}
        >
          {typeof para === 'string' ? (
            para
          ) : (
            <>
              <strong style={{ fontWeight: 600 }}>{para.lead}</strong> {para.text}
            </>
          )}
        </p>
      ))}

      <Bullets theme={theme} items={entry.bullets} />

      {entry.subEntries?.map((sub, i) => (
        <div key={i} style={{ marginTop: '14px', paddingLeft: '2px' }}>
          <p style={{ margin: 0, fontSize: '14.5px', color: theme.text }}>
            <strong style={{ fontWeight: 600 }}>{sub.name}</strong>
            {sub.note && <span style={{ color: theme.muted }}>{'  —  ' + sub.note}</span>}
          </p>
          <Bullets theme={theme} items={sub.bullets} />
        </div>
      ))}
    </div>
  )
}

export function CurriculumVitae({ theme, content }: CvProps) {
  return (
    <article className="apply-doc">
      <DocHeader theme={theme} name={content.name} contact={content.contact} />

      {content.profile && (
        <p
          style={{
            margin: '20px 0 0',
            fontSize: '15px',
            lineHeight: 1.65,
            color: theme.text,
          }}
        >
          {content.profile}
        </p>
      )}

      {content.sections.map((section, i) => (
        <section key={i} style={{ marginTop: '34px' }}>
          <SectionHeading theme={theme}>{section.heading}</SectionHeading>
          {section.entries.map((entry, j) => (
            <Entry key={j} theme={theme} entry={entry} />
          ))}
        </section>
      ))}

      <section style={{ marginTop: '34px' }}>
        <SectionHeading theme={theme}>{content.education.heading}</SectionHeading>
        {content.education.entries.map((ed, i) => (
          <div key={i} className="apply-entry" style={{ marginTop: '16px' }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: theme.text }}>
              {ed.qualification}
            </p>
            <p style={{ margin: '2px 0 0', fontSize: '14px', color: theme.muted }}>
              {ed.institution}
            </p>
          </div>
        ))}
      </section>
    </article>
  )
}
