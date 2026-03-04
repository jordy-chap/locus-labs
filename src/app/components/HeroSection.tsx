import { useEffect, useRef } from 'react'

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let animId: number
    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const spacing = 40
      const cols = Math.ceil(canvas.width / spacing) + 1
      const rows = Math.ceil(canvas.height / spacing) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing
          const y = j * spacing
          const dx = x - canvas.width / 2
          const dy = y - canvas.height / 2
          const dist = Math.sqrt(dx * dx + dy * dy)
          const wave = Math.sin(dist / 80 - t * 0.4) * 0.5 + 0.5
          const alpha = wave * 0.06 + 0.02
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(79, 195, 247, ${alpha})`
          ctx.fill()
        }
      }
      t += 0.015
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0f',
        overflow: 'hidden',
      }}
    >
      {/* Animated dot-grid canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow behind headline */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(79, 195, 247, 0.12) 0%, rgba(79, 195, 247, 0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 24px',
          textAlign: 'center',
          paddingTop: '80px',
        }}
      >
        {/* Eyebrow label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#4fc3f7',
              boxShadow: '0 0 8px rgba(79, 195, 247, 0.8)',
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              color: '#4fc3f7',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            AI Strategy & Product Development
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(44px, 7vw, 80px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#f0f0f5',
            margin: '0 auto 28px',
            maxWidth: '860px',
          }}
        >
          Find Your Footing
          <br />
          <span style={{ color: '#f0f0f5' }}>in the Age of AI.</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(16px, 2vw, 19px)',
            fontWeight: 400,
            lineHeight: 1.65,
            color: '#7a7a9a',
            margin: '0 auto 48px',
            maxWidth: '600px',
          }}
        >
          Locus Labs helps organisations develop clear AI strategy, build
          AI-native products, and adapt their ways of working — so they stay in
          control of their own future.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() =>
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              fontWeight: 500,
              color: '#0a0a0f',
              backgroundColor: '#4fc3f7',
              borderRadius: '7px',
              padding: '14px 28px',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.88'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Explore Our Services
          </button>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              fontWeight: 500,
              color: '#f0f0f5',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: '7px',
              padding: '14px 28px',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
              e.currentTarget.style.color = '#f0f0f5'
            }}
          >
            Talk to Us
          </button>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.35,
          }}
        >
          <div
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(to bottom, transparent, #7a7a9a)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
