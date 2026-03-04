import { ScrollReveal } from './ScrollReveal'

export function ProblemSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#0a0a0f',
        padding: '140px 24px',
        position: 'relative',
      }}
    >
      {/* Top divider */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '80px',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#f0f0f5',
                marginBottom: '48px',
              }}
            >
              AI is moving faster than most strategies.
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
                marginBottom: '28px',
              }}
            >
              Organisations everywhere feel the pressure. New tools arrive daily.
              Expectations are shifting. And yet most teams are still operating
              with yesterday's playbooks, trying to bolt AI onto processes built
              for a different era.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '17px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#7a7a9a',
                marginBottom: '28px',
              }}
            >
              The result is uncertainty. Decision paralysis. A growing gap
              between what's possible and what your organisation is actually
              doing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '17px',
                fontWeight: 500,
                lineHeight: 1.7,
                color: '#f0f0f5',
              }}
            >
              Locus Labs exists to close that gap.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '80px auto 0',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      />
    </section>
  )
}
