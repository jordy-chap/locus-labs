import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Download } from 'lucide-react'
import { getApplication } from '../../apply/applications'
import type { DocKind } from '../../apply/types'
import { PasswordGate } from '../apply/PasswordGate'
import { DocToggle } from '../apply/DocToggle'
import { CoverLetter } from '../apply/CoverLetter'
import { CurriculumVitae } from '../apply/CurriculumVitae'

export function ApplicationPage() {
  const { company } = useParams<{ company: string }>()
  const config = getApplication(company)

  const [doc, setDoc] = useState<DocKind>(config?.defaultDoc ?? 'cover')

  useEffect(() => {
    if (config) {
      const label = doc === 'cv' ? 'CV' : 'Cover Letter'
      document.title = `Jordan Chapman — ${config.company} · ${label}`
    }
    return () => {
      document.title = 'Locus Labs'
    }
  }, [config, doc])

  // Unknown slug → send back to the landing page.
  if (!config) return <Navigate to="/" replace />

  const { theme } = config

  return (
    <div
      className="apply-root"
      style={{
        minHeight: '100vh',
        backgroundColor: theme.bg,
        color: theme.text,
        fontFamily: theme.fontBody,
      }}
    >
      <PasswordGate config={config}>
        {/* Toolbar: toggle + download (hidden in print via .apply-toolbar) */}
        <div
          className="apply-toolbar"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            backgroundColor: theme.bg,
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <DocToggle theme={theme} value={doc} onChange={setDoc} />

            {config.pdfUrl ? (
              <a
                href={config.pdfUrl}
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: theme.fontBody,
                  color: theme.text,
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                  border: `1px solid ${theme.border}`,
                  borderRadius: `${theme.radius}px`,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.text
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.border
                }}
              >
                <Download size={15} />
                Download PDF
              </a>
            ) : (
              <button
                onClick={() => window.print()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: theme.fontBody,
                  color: theme.text,
                  backgroundColor: 'transparent',
                  border: `1px solid ${theme.border}`,
                  borderRadius: `${theme.radius}px`,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.text
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.border
                }}
              >
                <Download size={15} />
                Download PDF
              </button>
            )}
          </div>
        </div>

        {/* Document */}
        <main
          className="apply-main"
          style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 96px' }}
        >
          {doc === 'cover' ? (
            <CoverLetter theme={theme} content={config.coverLetter} />
          ) : (
            <CurriculumVitae theme={theme} content={config.cv} />
          )}
        </main>
      </PasswordGate>
    </div>
  )
}
