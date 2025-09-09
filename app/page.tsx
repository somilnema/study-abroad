import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TaglineSection } from "@/components/tagline-section"
import { UniversityLogos } from "@/components/university-logos"
import { SuccessRateSection } from "@/components/success-rate-section"
import { StudentStoriesHorizontal } from "@/components/student-stories"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="space-y-0">
        <HeroSection />
        <WhyChooseUs />
        <TaglineSection />
        <UniversityLogos />
        <SuccessRateSection />
        <StudentStoriesHorizontal />
        <FAQSection />
      </main>
    </div>
  )
}
