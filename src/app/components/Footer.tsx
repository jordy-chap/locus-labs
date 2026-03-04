function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

interface NavItem {
  label: string
  sectionId: string
}

const serviceItems: NavItem[] = [
  { label: 'AI-Native Product Dev', sectionId: 'services' },
  { label: 'AI Strategy', sectionId: 'services' },
  { label: 'Ways of Working', sectionId: 'services' },
]

const companyItems: NavItem[] = [
  { label: 'About', sectionId: 'philosophy' },
  { label: 'Work', sectionId: 'work' },
  { label: 'Contact', sectionId: 'contact' },
]

function FooterNavBtn({ label, sectionId }: NavItem) {
  return (
    <button
      onClick={() => scrollTo(sectionId)}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        fontWeight: 400,
        color: '#7a7a9a',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'block',
        marginBottom: '12px',
        padding: 0,
        textAlign: 'left',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f5')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#7a7a9a')}
    >
      {label}
    </button>
  )
}


export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0a0a0f',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '80px 24px 40px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Col 1: Wordmark */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                color: '#f0f0f5',
                letterSpacing: '-0.02em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                marginBottom: '16px',
                display: 'block',
              }}
            >
              Locus Labs
            </button>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
                color: '#7a7a9a',
                lineHeight: 1.6,
                maxWidth: '260px',
              }}
            >
              AI strategy and product development. We help organisations stay in control of their
              AI future.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#f0f0f5',
                marginBottom: '20px',
              }}
            >
              Services
            </p>
            {serviceItems.map((item) => (
              <FooterNavBtn key={item.label} {...item} />
            ))}
          </div>

          {/* Col 3: Company */}
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#f0f0f5',
                marginBottom: '20px',
              }}
            >
              Company
            </p>
            {companyItems.map((item) => (
              <FooterNavBtn key={item.label} {...item} />
            ))}
          </div>

          {/* Col 4: Contact */}
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#f0f0f5',
                marginBottom: '20px',
              }}
            >
              Get in Touch
            </p>
            <a
              href="mailto:hello@yourlocus.ai"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
                color: '#7a7a9a',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '20px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#4fc3f7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#7a7a9a')}
            >
              hello@yourlocus.ai
            </a>

          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              color: '#4a4a6a',
            }}
          >
            © 2026 Locus Labs. All rights reserved.
          </p>
          <a
            href="https://yourlocus.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              color: '#4a4a6a',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#7a7a9a')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#4a4a6a')}
          >
            yourlocus.ai
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
