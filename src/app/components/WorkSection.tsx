import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { ArrowRight } from 'lucide-react'

interface CaseStudy {
  id: number
  tag: string
  title: string
  descriptor: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    tag: 'AI Product',
    title: 'AI-Native SaaS Product — Seed to Launch',
    descriptor:
      'End-to-end venture build: from 0→1 strategy through to a live, AI-first product in market.',
  },
  {
    id: 2,
    tag: 'Enterprise Strategy',
    title: 'Enterprise AI Strategy — Global Financial Services',
    descriptor:
      'AI capability assessment and investment roadmap for a global financial services organisation.',
  },
  {
    id: 3,
    tag: 'Agentic Workflows',
    title: 'Agentic Workflow Implementation — Professional Services Firm',
    descriptor:
      'Designing and embedding AI agents into core delivery workflows across a 200-person firm.',
  },
]

function WorkCard({ study, delay }: { study: CaseStudy; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <ScrollReveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: '#111118',
          border: `1px dashed ${hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)'}`,
          borderRadius: '12px',
          padding: '40px 36px',
          position: 'relative',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          transition: 'transform 0.3s ease, border-color 0.3s ease',
          cursor: 'default',
        }}
      >
        {/* Coming Soon chip */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '3px 10px',
            borderRadius: '20px',
            backgroundColor: 'rgba(122, 122, 154, 0.12)',
            border: '1px solid rgba(122, 122, 154, 0.2)',
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#7a7a9a',
              textTransform: 'uppercase',
            }}
          >
            Coming Soon
          </span>
        </div>

        {/* Tag */}
        <div style={{ marginBottom: '20px' }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              color: '#4fc3f7',
              textTransform: 'uppercase',
            }}
          >
            {study.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: 1.3,
            letterSpacing: '-0.015em',
            color: '#f0f0f5',
            marginBottom: '14px',
            maxWidth: '380px',
          }}
        >
          {study.title}
        </h3>

        {/* Descriptor */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.65,
            color: '#7a7a9a',
            marginBottom: '32px',
          }}
        >
          {study.descriptor}
        </p>

        {/* Link */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: hovered ? '#4fc3f7' : '#4a8fa8',
            transition: 'color 0.2s ease',
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            View Case Study
          </span>
          <ArrowRight size={14} />
        </div>
      </div>
    </ScrollReveal>
  )
}

export function WorkSection() {
  return (
    <section
      id="work"
      style={{
        backgroundColor: '#0a0a0f',
        padding: '140px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              Work
            </span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={80}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#f0f0f5',
              marginBottom: '64px',
              maxWidth: '600px',
            }}
          >
            Built with and for organisations ready to move.
          </h2>
        </ScrollReveal>

        {/* Case study grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {caseStudies.map((study, i) => (
            <WorkCard key={study.id} study={study} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
