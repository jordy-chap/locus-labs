import { ScrollReveal } from './ScrollReveal'

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      style={{
        position: 'relative',
        padding: '140px 24px',
        backgroundColor: '#0a0a0f',
        overflow: 'hidden',
      }}
    >
      {/* Subtle tinted background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(79, 195, 247, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top & bottom hairlines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section label */}
        <ScrollReveal>
          <div style={{ marginBottom: '20px' }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#4fc3f7',
              }}
            >
              How We Think
            </span>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="philosophy-grid"
        >
          {/* Left: Headline */}
          <ScrollReveal delay={80}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#f0f0f5',
              }}
            >
              Locus of control is not a luxury.{' '}
              <span style={{ color: '#4fc3f7' }}>It's a strategic imperative.</span>
            </h2>
          </ScrollReveal>

          {/* Right: Body */}
          <div>
            <ScrollReveal delay={120}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#7a7a9a',
                  marginBottom: '24px',
                }}
              >
                The term "locus of control" comes from psychology — it describes the degree to
                which people believe they have control over outcomes in their lives. Organisations
                with a strong internal locus of control don't just react to change. They shape it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#7a7a9a',
                  marginBottom: '24px',
                }}
              >
                We founded Locus Labs on a simple belief:{' '}
                <span style={{ color: '#c8e8f5', fontWeight: 500 }}>
                  every organisation, regardless of size or sector, can develop the clarity and
                  capability to lead in the AI era — not be led by it.
                </span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#7a7a9a',
                }}
              >
                Our work is about giving you the tools, strategy, and confidence to act with
                intention.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
