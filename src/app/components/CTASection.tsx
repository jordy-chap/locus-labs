import { ScrollReveal } from './ScrollReveal'

export function CTASection() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '140px 24px',
        backgroundColor: '#0a0a0f',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Radial glow — mirrors hero */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(79, 195, 247, 0.13) 0%, rgba(79, 195, 247, 0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top divider */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '680px',
          margin: '0 auto',
        }}
      >
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#f0f0f5',
              marginBottom: '24px',
            }}
          >
            Ready to find your footing?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#7a7a9a',
              marginBottom: '48px',
            }}
          >
            Talk to us about where you are and where you want to go. No frameworks, no jargon —
            just a genuine conversation about what AI can do for your organisation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <a
            href="mailto:hello@yourlocus.ai"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
              color: '#0a0a0f',
              backgroundColor: '#4fc3f7',
              borderRadius: '8px',
              padding: '16px 36px',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 0 0 0 rgba(79, 195, 247, 0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.88'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(79, 195, 247, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 0 0 rgba(79, 195, 247, 0)'
            }}
          >
            Book an Intro Call
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
