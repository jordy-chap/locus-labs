import type { ApplicationTheme, DocKind } from '../../apply/types'

interface DocToggleProps {
  theme: ApplicationTheme
  value: DocKind
  onChange: (doc: DocKind) => void
}

const OPTIONS: { key: DocKind; label: string }[] = [
  { key: 'cover', label: 'Cover Letter' },
  { key: 'cv', label: 'CV' },
]

/** Segmented control switching between the cover letter and CV. */
export function DocToggle({ theme, value, onChange }: DocToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Document"
      style={{
        display: 'inline-flex',
        width: '100%',
        maxWidth: '320px',
        padding: '4px',
        gap: '4px',
        backgroundColor: theme.surface,
        border: `1px solid ${theme.border}`,
        borderRadius: `${theme.radius + 2}px`,
      }}
    >
      {OPTIONS.map((opt) => {
        const active = opt.key === value
        return (
          <button
            key={opt.key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.key)}
            style={{
              flex: 1,
              padding: '8px 12px',
              fontSize: '14px',
              fontWeight: active ? 600 : 400,
              fontFamily: theme.fontBody,
              color: active ? theme.onAccent : theme.muted,
              backgroundColor: active ? theme.accent : 'transparent',
              border: 'none',
              borderRadius: `${theme.radius}px`,
              cursor: 'pointer',
              transition: 'color 0.2s ease, background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!active) e.currentTarget.style.color = theme.text
            }}
            onMouseLeave={(e) => {
              if (!active) e.currentTarget.style.color = theme.muted
            }}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
