import HeroSection from '@/components/home/hero-section';
import BenefitsSection from '@/components/home/benefits-section';
import HowItWorksSection from '@/components/home/how-it-works';
import { ComparisonSection } from '@/components/home/ComparisionSection';
import { TestimonialsSection } from '@/components/home/TestimonialSections';
import FAQSection from '@/components/home/faq-section';
import Footer from '@/components/home/footer';
import TeamSection from '@/components/home/team-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </main>
  );
}