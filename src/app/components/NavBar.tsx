import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: 'services' },
    { label: 'About', href: 'philosophy' },
    { label: 'Contact', href: 'contact' },
  ]

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
      }}
    >
      {/* 3-column grid: logo left | nav centre | cta right */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          height: '64px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}
      >
        {/* Left: Wordmark */}
        <div style={{ justifySelf: 'start' }}>
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
            }}
          >
            Locus Labs
          </button>
        </div>

        {/* Centre: Desktop Nav (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
                color: '#7a7a9a',
                transition: 'color 0.2s ease',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f5')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#7a7a9a')}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Spacer for mobile (keeps grid structure intact) */}
        <div className="md:hidden" />

        {/* Right: CTA + Mobile Toggle */}
        <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex items-center"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: '#4fc3f7',
              border: '1px solid rgba(79, 195, 247, 0.35)',
              borderRadius: '6px',
              padding: '7px 18px',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'background 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(79, 195, 247, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(79, 195, 247, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(79, 195, 247, 0.35)'
            }}
          >
            Get Started
          </button>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: '#f0f0f5', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(10, 10, 15, 0.97)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(16px)',
            padding: '24px 32px',
          }}
          className="md:hidden flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                color: '#7a7a9a',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: 0,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              fontWeight: 500,
              color: '#4fc3f7',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              padding: 0,
              marginTop: '4px',
            }}
          >
            Get Started →
          </button>
        </div>
      )}
    </header>
  )
}
