import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap, TrendingUp, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Empower enterprises to achieve unprecedented efficiency through AI-driven automation, transforming complex processes into simple, intelligent workflows."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We leverage cutting-edge AI, machine learning, and automation technologies to deliver solutions that are not just current, but future-ready."
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Every automation we implement delivers quantifiable ROI - from cost reduction and time savings to revenue growth and customer satisfaction."
  },
  {
    icon: Shield,
    title: "Enterprise Trust",
    description: "Fortune 500 companies trust us with their critical operations because we prioritize security, compliance, and reliability in every solution."
  }
];

const stats = [
  { value: "70%", label: "Average Cost Reduction" },
  { value: "10x", label: "Efficiency Improvement" },
  { value: "500+", label: "Processes Automated" },
  { value: "99.9%", label: "Uptime Guarantee" }
];

export function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-muted/30 to-background"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade-in">
          <Badge className="mb-4 px-4 py-1.5 text-sm" data-testid="badge-about">About Us</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6" data-testid="heading-about">
            <span className="gradient-text">Pioneering AI-Driven Automation</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-subtitle">
            BluePulse Automations is at the forefront of enterprise business process automation,
            combining artificial intelligence, machine learning, and robotic process automation
            to transform how organizations operate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="glass-card p-8 hover-elevate transition-all duration-300 section-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-md gradient-cyan flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-12 section-fade-in" data-testid="card-stats">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-16 section-fade-in">
          <Card className="glass-card p-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-display font-bold text-2xl mb-6 text-center">
                Why Enterprises Choose BluePulse
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">AI-Driven Approach</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't just automate tasks - we build intelligent systems that learn,
                    adapt, and optimize themselves over time. Our AI agents can handle complex
                    decision-making, reducing the need for constant human intervention.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Cost & Efficiency</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our clients see an average 70% reduction in operational costs within the
                    first year. By eliminating manual processes and optimizing workflows, we
                    help businesses operate 10x more efficiently.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Enterprise Security</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Security and compliance are built into every solution we deliver. We maintain
                    SOC 2 Type II compliance, implement end-to-end encryption, and follow industry
                    best practices for data protection.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Proven Track Record</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 500 successfully automated processes across multiple industries,
                    we have the expertise to handle complex enterprise automation challenges
                    and deliver measurable results.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
