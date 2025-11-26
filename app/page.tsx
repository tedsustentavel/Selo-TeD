import AnimatedBackground from '@/components/AnimatedBackground'
import ScrollIndicator from '@/components/ScrollIndicator'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImpactSection from '@/components/ImpactSection'
import WhatIsSection from '@/components/WhatIsSection'
import SocialProofSection from '@/components/SocialProofSection'
import CriteriaSection from '@/components/CriteriaSection'
import TimelineSection from '@/components/TimelineSection'
import NormsSection from '@/components/NormsSection'
import BenefitsSection from '@/components/BenefitsSection'
import FAQSection from '@/components/FAQSection'
import FormSection from '@/components/FormSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <AnimatedBackground />
      <ScrollIndicator />
      <Header />
      <Hero />
      <ImpactSection />
      <WhatIsSection />
      <SocialProofSection />
      <CriteriaSection />
      <TimelineSection />
      <NormsSection />
      <BenefitsSection />
      <FAQSection />
      <FormSection />
      <Footer />
    </main>
  )
}

