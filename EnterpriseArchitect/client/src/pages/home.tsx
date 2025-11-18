import { useState, useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ServicesSection } from "@/components/services-section";
import { IndustriesSection } from "@/components/industries-section";
import { AboutSection } from "@/components/about-section";
import { InsightsSection } from "@/components/insights-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "industries", "about", "insights", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <AboutSection />
        <InsightsSection />
        <ContactSection />
      </main>
    </div>
  );
}
