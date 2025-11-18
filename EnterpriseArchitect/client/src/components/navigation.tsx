import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "industries", label: "Industries" },
    { id: "about", label: "About" },
    { id: "insights", label: "Insights" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav shadow-lg" : "bg-transparent"
        }`}
        data-testid="nav-main"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => handleNavigate("home")}
              className="flex items-center space-x-2 hover-elevate rounded-md px-3 py-2"
              data-testid="button-logo"
            >
              <div className="w-8 h-8 rounded-md gradient-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">BP</span>
              </div>
              <span className="font-display font-bold text-lg md:text-xl gradient-text">
                BluePulse Automations
              </span>
            </button>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavigate(item.id)}
                  className={`font-medium transition-all ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  data-testid={`button-nav-${item.id}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ top: "64px" }}
          data-testid="menu-mobile"
        >
          <div className="glass-nav h-full p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavigate(item.id)}
                  className={`justify-start text-lg font-medium ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70"
                  }`}
                  data-testid={`button-mobile-nav-${item.id}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
