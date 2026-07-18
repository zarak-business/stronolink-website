import { HeroSection } from './components/HeroSection'
import { PrismaAboutSection } from './components/PrismaAboutSection'
import { CaseStudiesSection } from './components/CaseStudiesSection'
import { PhilosophySection } from './components/PhilosophySection'
import { ServicesSection } from './components/ServicesSection'
import { TextWithImageSection } from './components/TextWithImageSection'
import { ProcessSection } from './components/ProcessSection'
import { TeamSection } from './components/TeamSection'
import { CTASection } from './components/CTASection'
import { LogoTicker } from './components/LogoTicker'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-primary/20">
      <HeroSection />
      
      {/* Logos */}
      <LogoTicker />
      
      {/* Prisma Sections */}
      <PrismaAboutSection />
      
      {/* Case Studies */}
      <CaseStudiesSection />

      <ServicesSection />
      
      {/* Text with Image Section */}
      <TextWithImageSection />
      
      {/* New Process Section */}
      <ProcessSection />
      
      {/* Remaining Sections */}
      <PhilosophySection />

      {/* Team Section */}
      <TeamSection />

      {/* Final CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
