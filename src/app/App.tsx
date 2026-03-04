import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { ProblemSection } from './components/ProblemSection'
import { ServicesSection } from './components/ServicesSection'
import { PhilosophySection } from './components/PhilosophySection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#0a0a0f',
        minHeight: '100vh',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <NavBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <PhilosophySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
