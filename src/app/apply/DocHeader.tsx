import { Fragment } from 'react'
import type { ApplicationTheme } from '../../apply/types'

interface DocHeaderProps {
  theme: ApplicationTheme
  name: string
  contact: string[]
}

/** Shared header for both documents: name + dot-separated contact items. */
export function DocHeader({ theme, name, contact }: DocHeaderProps) {
  return (
    <header style={{ borderBottom: `1px solid ${theme.border}`, paddingBottom: '20px' }}>
      <h1
        style={{
          fontFamily: theme.fontHeading,
          fontSize: '28px',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: theme.text,
          margin: 0,
        }}
      >
        {name}
      </h1>
      <p
        style={{
          fontFamily: theme.fontMono,
          fontSize: '13px',
          color: theme.muted,
          margin: '10px 0 0',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px 10px',
        }}
      >
        {contact.map((item, i) => (
          <Fragment key={i}>
            {i > 0 && <span aria-hidden="true">·</span>}
            <span>{item}</span>
          </Fragment>
        ))}
      </p>
    </header>
  )
}
