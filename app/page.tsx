import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CertificationBadges from "@/components/certification-badges"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ArticleSection from "@/components/article-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-animations"
import HydrationSuppressor from "@/components/HydrationSuppressor"
// import { ThemeDebug } from "@/components/theme-debug"

export default function Home() {
  return (
    <HydrationSuppressor>
      <main className="min-h-screen">
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CertificationBadges />
        <ProjectsSection />
        <ArticleSection />
        <TestimonialsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
        {/* <ThemeDebug /> */}
      </main>
    </HydrationSuppressor>
  )
}