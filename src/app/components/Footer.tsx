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

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
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

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#7a7a9a',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#4fc3f7'
                e.currentTarget.style.borderColor = 'rgba(79, 195, 247, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#7a7a9a'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <LinkedInIcon />
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
