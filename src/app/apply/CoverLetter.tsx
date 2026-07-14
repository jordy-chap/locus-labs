import type { ApplicationTheme, CoverLetterContent } from '../../apply/types'
import { DocHeader } from './DocHeader'

interface CoverLetterProps {
  theme: ApplicationTheme
  content: CoverLetterContent
}

export function CoverLetter({ theme, content }: CoverLetterProps) {
  return (
    <article className="apply-doc">
      <DocHeader theme={theme} name={content.name} contact={content.contact} />

      <h2
        style={{
          fontFamily: theme.fontMono,
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: theme.muted,
          margin: '36px 0 22px',
        }}
      >
        {content.title}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {content.paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: '15.5px',
              lineHeight: 1.72,
              color: theme.text,
              margin: 0,
            }}
          >
            {typeof p === 'string' ? (
              p
            ) : (
              <>
                <strong style={{ fontWeight: 600 }}>{p.lead}</strong> {p.text}
              </>
            )}
          </p>
        ))}
      </div>

      {content.signoff && (
        <p
          style={{
            fontSize: '15.5px',
            lineHeight: 1.72,
            color: theme.text,
            margin: '26px 0 0',
          }}
        >
          {content.signoff}
        </p>
      )}
    </article>
  )
}
