import { HeroSection } from "@/components/HeroSection"
import { MainFeaturesSection } from "@/components/MainFeaturesSection"
import { ExtraFeaturesSection } from "@/components/ExtraFeaturesSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { CTASection, Footer } from "@/components/CTAAndFooter"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <MainFeaturesSection />
      <ExtraFeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App