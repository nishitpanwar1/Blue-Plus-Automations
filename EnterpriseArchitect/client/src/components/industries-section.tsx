import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  Truck, 
  Store, 
  Home 
} from "lucide-react";

const industries = [
  {
    id: "finance",
    icon: Building2,
    title: "Finance",
    description: "Automate compliance reporting, fraud detection, loan processing, and customer onboarding while maintaining regulatory compliance and data security.",
    solutions: [
      "Automated KYC and AML compliance",
      "Real-time fraud detection systems",
      "Intelligent document processing for loans",
      "Risk assessment automation"
    ]
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    description: "Streamline patient scheduling, insurance verification, medical records management, and billing processes to improve patient care and reduce administrative burden.",
    solutions: [
      "Patient appointment scheduling automation",
      "Insurance eligibility verification",
      "Medical records digitization and routing",
      "Billing and claims processing"
    ]
  },
  {
    id: "retail",
    icon: ShoppingCart,
    title: "Retail",
    description: "Optimize inventory management, personalize customer experiences, automate order fulfillment, and enhance omnichannel operations for maximum efficiency.",
    solutions: [
      "Inventory tracking and reordering",
      "Personalized marketing campaigns",
      "Order processing and fulfillment",
      "Customer service chatbots"
    ]
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    description: "Transform enrollment processes, automate grading, enhance student engagement with AI tutors, and streamline administrative tasks across institutions.",
    solutions: [
      "Student enrollment automation",
      "Automated grading and feedback",
      "AI-powered tutoring assistants",
      "Administrative workflow optimization"
    ]
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics",
    description: "Optimize route planning, automate shipment tracking, predict delivery times, and enhance supply chain visibility for faster, more reliable operations.",
    solutions: [
      "Route optimization algorithms",
      "Real-time shipment tracking",
      "Predictive delivery estimations",
      "Warehouse management automation"
    ]
  },
  {
    id: "ecommerce",
    icon: Store,
    title: "Ecommerce",
    description: "Automate product listings, optimize pricing strategies, personalize recommendations, and streamline customer support for increased conversions and satisfaction.",
    solutions: [
      "Dynamic pricing automation",
      "Product recommendation engines",
      "Abandoned cart recovery",
      "Multi-channel inventory sync"
    ]
  },
  {
    id: "realestate",
    icon: Home,
    title: "Real Estate",
    description: "Streamline property management, automate tenant screening, optimize marketing campaigns, and enhance customer relationship management for real estate operations.",
    solutions: [
      "Tenant application processing",
      "Property listing automation",
      "Maintenance request tracking",
      "Lease management workflows"
    ]
  }
];

export function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-24 bg-muted/30"
      data-testid="section-industries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade-in">
          <Badge className="mb-4 px-4 py-1.5 text-sm" data-testid="badge-industries">Industries We Serve</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6" data-testid="heading-industries">
            <span className="gradient-text">Automation Across Every Sector</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-industries-subtitle">
            Industry-specific automation solutions tailored to your unique challenges and opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={industry.id}
              className="glass-card p-6 hover-elevate transition-all duration-300 section-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-industry-${industry.id}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-md gradient-purple flex items-center justify-center flex-shrink-0">
                  <industry.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl">{industry.title}</h3>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {industry.description}
              </p>

              <div>
                <h4 className="font-semibold text-sm mb-2">Automation Solutions:</h4>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                      <span className="text-foreground/80">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
