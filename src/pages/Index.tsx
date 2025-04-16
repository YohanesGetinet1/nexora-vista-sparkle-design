
import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { AboutSection } from "@/components/ui/about-section";
import { PortfolioSection } from "@/components/ui/portfolio-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nexora-theme">
      <div className="min-h-screen overflow-x-hidden dark:bg-nexora-dark dark:text-nexora-light transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
