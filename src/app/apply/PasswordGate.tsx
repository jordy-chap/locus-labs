import { ReactNode, useState, FormEvent } from 'react'
import type { ApplicationConfig } from '../../apply/types'

const storageKey = (slug: string) => `apply:${slug}`

/** Was this slug already unlocked in the current browser session? */
function isUnlocked(slug: string): boolean {
  try {
    return sessionStorage.getItem(storageKey(slug)) === 'ok'
  } catch {
    return false
  }
}

interface PasswordGateProps {
  config: ApplicationConfig
  children: ReactNode
}

/**
 * Client-side password gate. Keeps the page out of casual view; the content
 * still ships in the bundle, so this is privacy, not hard security (by design).
 */
export function PasswordGate({ config, children }: PasswordGateProps) {
  const { theme } = config
  const [unlocked, setUnlocked] = useState(() => isUnlocked(config.slug))
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return <>{children}</>

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (value === config.password) {
      try {
        sessionStorage.setItem(storageKey(config.slug), 'ok')
      } catch {
        /* sessionStorage unavailable — still unlock for this view */
      }
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme.bg,
        color: theme.text,
        fontFamily: theme.fontBody,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '360px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        {/* Triangle motif */}
        <svg width="34" height="30" viewBox="0 0 34 30" aria-hidden="true">
          <path d="M17 0 L34 30 L0 30 Z" fill={theme.accent} />
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span
            style={{
              fontFamily: theme.fontMono,
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: theme.muted,
            }}
          >
            {config.company} · Protected
          </span>
          <span style={{ fontSize: '15px', color: theme.muted }}>
            Enter the password to continue
          </span>
        </div>

        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            if (error) setError(false)
          }}
          placeholder="Password"
          aria-label="Password"
          aria-invalid={error}
          style={{
            width: '100%',
            padding: '11px 14px',
            fontSize: '15px',
            fontFamily: theme.fontBody,
            color: theme.text,
            backgroundColor: theme.surface,
            border: `1px solid ${error ? '#ff4d4d' : theme.border}`,
            borderRadius: `${theme.radius}px`,
            outline: 'none',
            textAlign: 'center',
          }}
        />

        {error && (
          <span style={{ fontSize: '13px', color: '#ff6b6b', marginTop: '-12px' }}>
            Incorrect password
          </span>
        )}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '11px 14px',
            fontSize: '15px',
            fontWeight: 500,
            fontFamily: theme.fontBody,
            color: theme.onAccent,
            backgroundColor: theme.accent,
            border: `1px solid ${theme.accent}`,
            borderRadius: `${theme.radius}px`,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Continue
        </button>
      </form>
    </div>
  )
}
