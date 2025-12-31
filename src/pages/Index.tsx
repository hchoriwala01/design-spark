import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ProcessSection } from '@/components/ProcessSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { StatsSection } from '@/components/StatsSection';
import { ToolsSection } from '@/components/ToolsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hisamuddin | UI/UX & Graphics Designer Portfolio</title>
        <meta name="description" content="I'm Hisamuddin, a UI/UX and Graphics Designer with 2+ years of experience. I create stunning digital experiences that people love. View my portfolio and let's work together." />
        <meta name="keywords" content="UI/UX Designer, Graphics Designer, Brand Identity, Web Design, Mobile App Design, Portfolio, Hisamuddin" />
        <link rel="canonical" href="https://hisamuddin.com" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <ToolsSection />
        <ContactSection />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
};

export default Index;
