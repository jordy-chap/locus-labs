import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { ArrowRight } from 'lucide-react'

interface Project {
  id: number
  tag: string
  title: string
  descriptor: string
  url?: string
}

const projects: Project[] = [
  {
    id: 1,
    tag: 'AI SaaS Product',
    title: 'Almond Dad — AI Kids Meal Planner',
    descriptor:
      'AI-powered weekly meal planner for children aged 6 months to 7 years. Generates allergy-safe, age-appropriate meals with nutrition tracking, pantry-aware suggestions, and a built-in shopping list. Built with Next.js, OpenAI, Stripe, and Neon Postgres.',
    url: 'https://almond.dad',
  },
  {
    id: 2,
    tag: 'B2B SaaS Product',
    title: 'Buyers HQ — Property Buying Companion',
    descriptor:
      'Mobile-first dual-portal app for Australian buyer\'s agents and their clients. Tracks properties through an 11-stage pipeline from inspection to settlement, with schedule management, comparable sales data, and real-time collaboration between agents and buyers. Built with React, Vite, and Tailwind CSS.',
  },
]

function WorkCard({ project, delay }: { project: Project; delay: number }) {
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
          height: '100%',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          transition: 'transform 0.3s ease, border-color 0.3s ease',
          cursor: project.url ? 'pointer' : 'default',
        }}
      >
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
            {project.tag}
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
          }}
        >
          {project.title}
        </h3>

        {/* Descriptor */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.65,
            color: '#7a7a9a',
            marginBottom: project.url ? '32px' : '0',
          }}
        >
          {project.descriptor}
        </p>

        {/* Link — only shown if project has a URL */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: hovered ? '#4fc3f7' : '#4a8fa8',
              transition: 'color 0.2s ease',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Visit Site
            </span>
            <ArrowRight size={14} />
          </a>
        )}
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

        {/* Project grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, i) => (
            <WorkCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
