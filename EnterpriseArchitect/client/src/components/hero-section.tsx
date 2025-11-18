import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function HeroSection() {
  const initRef = useRef(false);

  useEffect(() => {
    if (!initRef.current) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      initRef.current = true;
    }
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 gradient-blue opacity-90" />
      
      <div className="absolute inset-0">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: ["#ffffff", "#00eaff", "#8a5cff"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div 
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20"
            data-testid="badge-hero-tagline"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-white/90 text-sm font-medium">
              AI-Powered Enterprise Automation
            </span>
          </div>

          <h1 
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
            data-testid="heading-hero-title"
          >
            Automate. <br />
            Accelerate. <br />
            Evolve.
          </h1>

          <p 
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Transform your enterprise with intelligent business process automation.
            <br className="hidden sm:block" />
            Reduce costs by 70%, increase efficiency by 10x, and unlock exponential growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToServices}
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto rounded-md neon-glow-hover"
              data-testid="button-explore-services"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-white text-white bg-white/10 backdrop-blur-md hover:bg-white/20 font-semibold text-lg px-8 py-6 h-auto rounded-md"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>

        <div className="mt-20 animate-float">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-glow-pulse" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-glow-pulse" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-glow-pulse" />
              <span>24/7 AI Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
