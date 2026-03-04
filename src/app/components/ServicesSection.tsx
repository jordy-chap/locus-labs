import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'

interface Service {
  id: number
  title: string
  body: string
  label: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'AI-Native Product Development',
    body: "We build new businesses and products designed from the ground up with AI at their core. Whether you're launching something new or creating a venture within your existing organisation, we take ideas from strategy through to live product.",
    label: 'Ideation → Build → Launch',
  },
  {
    id: 2,
    title: 'Agentic & Generative AI Strategy',
    body: "We help leadership teams develop a grounded, executable AI strategy — one built around your actual business context, not generic frameworks. We assess where AI can create real leverage and help you make confident decisions about where to invest.",
    label: 'Assess → Prioritise → Align',
  },
  {
    id: 3,
    title: 'Ways of Working Adaptation',
    body: 'We support teams in adapting their workflows, processes, and culture for a world where AI agents are real colleagues. From prompt engineering to agent orchestration, we help your people work with AI — not around it.',
    label: 'Audit → Design → Embed',
  },
]

function NodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.5" fill="#4fc3f7" />
      <circle cx="4" cy="6" r="1.5" fill="#4fc3f7" opacity="0.5" />
      <circle cx="20" cy="6" r="1.5" fill="#4fc3f7" opacity="0.5" />
      <circle cx="4" cy="18" r="1.5" fill="#4fc3f7" opacity="0.5" />
      <circle cx="20" cy="18" r="1.5" fill="#4fc3f7" opacity="0.5" />
      <line x1="12" y1="12" x2="4" y2="6" stroke="#4fc3f7" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="12" x2="20" y2="6" stroke="#4fc3f7" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="12" x2="4" y2="18" stroke="#4fc3f7" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="12" x2="20" y2="18" stroke="#4fc3f7" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

function CompassIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#4fc3f7" strokeWidth="1.2" opacity="0.4" />
      <circle cx="12" cy="12" r="1.5" fill="#4fc3f7" />
      <line
        x1="12"
        y1="3"
        x2="12"
        y2="6.5"
        stroke="#4fc3f7"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <line
        x1="12"
        y1="12"
        x2="16"
        y2="9"
        stroke="#4fc3f7"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
        stroke="#4fc3f7"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.3"
      />
    </svg>
  )
}

function FlowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="5" height="4" rx="1" fill="#4fc3f7" opacity="0.5" />
      <rect x="9.5" y="10" width="5" height="4" rx="1" fill="#4fc3f7" opacity="0.7" />
      <rect x="17" y="15" width="5" height="4" rx="1" fill="#4fc3f7" opacity="0.9" />
      <line
        x1="7"
        y1="7"
        x2="9.5"
        y2="7"
        stroke="#4fc3f7"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="14.5"
        y1="12"
        x2="17"
        y2="12"
        stroke="#4fc3f7"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

const icons = [NodeIcon, CompassIcon, FlowIcon]

function ServiceCard({
  service,
  index,
  delay,
}: {
  service: Service
  index: number
  delay: number
}) {
  const [hovered, setHovered] = useState(false)
  const Icon = icons[index]

  return (
    <ScrollReveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: '#111118',
          border: `1px solid ${hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
          borderRadius: '12px',
          padding: '36px 32px',
          position: 'relative',
          overflow: 'hidden',
          transform: hovered ? 'translateY(-3px) scale(1.01)' : 'translateY(0) scale(1)',
          transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: hovered
            ? '0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(79,195,247,0.06)'
            : 'none',
          cursor: 'default',
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Accent top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '32px',
            right: '32px',
            height: '1px',
            background: `linear-gradient(90deg, transparent, rgba(79,195,247,${hovered ? '0.5' : '0.2'}), transparent)`,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Icon */}
        <div style={{ marginBottom: '24px' }}>
          <Icon />
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
            marginBottom: '16px',
          }}
        >
          {service.title}
        </h3>

        {/* Body */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#7a7a9a',
            marginBottom: '28px',
          }}
        >
          {service.body}
        </p>

        {/* Micro-label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '5px 12px',
            borderRadius: '4px',
            backgroundColor: 'rgba(79, 195, 247, 0.08)',
            border: '1px solid rgba(79, 195, 247, 0.15)',
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#4fc3f7',
            }}
          >
            {service.label}
          </span>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function ServicesSection() {
  return (
    <section
      id="services"
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
              Services
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
              maxWidth: '540px',
            }}
          >
            Three ways we help you lead with clarity.
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
