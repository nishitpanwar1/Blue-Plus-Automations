import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const insights = [
  {
    id: "ai-automation-trends",
    category: "AI & Automation",
    title: "The Future of AI Agents in Enterprise Automation",
    excerpt: "Autonomous AI agents are revolutionizing how enterprises operate. Learn how next-generation agents can reason, plan, and execute complex multi-step tasks without human intervention.",
    date: "November 2025",
    readTime: "8 min read",
    highlights: [
      "Multi-agent collaboration frameworks",
      "Autonomous decision-making capabilities",
      "Integration with existing enterprise systems",
      "ROI analysis and implementation strategies"
    ]
  },
  {
    id: "digital-transformation",
    category: "Digital Transformation",
    title: "Complete Guide to Business Process Automation",
    excerpt: "A comprehensive roadmap for enterprises looking to transform their operations through intelligent automation. From assessment to implementation and scaling.",
    date: "October 2025",
    readTime: "12 min read",
    highlights: [
      "Process assessment and prioritization",
      "Technology stack selection",
      "Change management strategies",
      "Measuring success and continuous improvement"
    ]
  },
  {
    id: "rpa-evolution",
    category: "Technology",
    title: "From RPA to Intelligent Process Automation",
    excerpt: "Traditional RPA is evolving. Discover how combining RPA with AI, machine learning, and natural language processing creates truly intelligent automation.",
    date: "September 2025",
    readTime: "10 min read",
    highlights: [
      "Evolution of automation technologies",
      "AI-powered decision making in workflows",
      "Cognitive automation capabilities",
      "Real-world case studies and results"
    ]
  },
  {
    id: "cost-reduction",
    category: "Business Strategy",
    title: "Achieving 70% Cost Reduction Through Automation",
    excerpt: "Real data from enterprises that successfully reduced operational costs by 70% or more. Learn the strategies, tools, and frameworks they used.",
    date: "August 2025",
    readTime: "9 min read",
    highlights: [
      "Cost analysis frameworks",
      "Quick wins vs. long-term transformation",
      "Common pitfalls to avoid",
      "Building the business case for automation"
    ]
  },
  {
    id: "ai-integration",
    category: "Technical",
    title: "Integrating Large Language Models into Business Workflows",
    excerpt: "Practical guide to leveraging GPT-4, Claude, and other LLMs for enterprise automation. From use case selection to production deployment.",
    date: "July 2025",
    readTime: "11 min read",
    highlights: [
      "LLM selection and evaluation",
      "Prompt engineering best practices",
      "Security and compliance considerations",
      "Cost optimization strategies"
    ]
  },
  {
    id: "future-work",
    category: "Future Insights",
    title: "The 2030 Workplace: AI-First Organizations",
    excerpt: "How will work look in 2030? Exploring the shift to AI-first organizations where humans and AI agents collaborate seamlessly on complex challenges.",
    date: "June 2025",
    readTime: "7 min read",
    highlights: [
      "Emerging workforce models",
      "Human-AI collaboration patterns",
      "Skills needed in AI-first organizations",
      "Ethical considerations and governance"
    ]
  }
];

export function InsightsSection() {
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
      id="insights"
      ref={sectionRef}
      className="py-24 bg-background"
      data-testid="section-insights"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade-in">
          <Badge className="mb-4 px-4 py-1.5 text-sm" data-testid="badge-insights">Insights & Thought Leadership</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6" data-testid="heading-insights">
            <span className="gradient-text">Stay Ahead of the Curve</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-insights-subtitle">
            Expert insights on AI, automation, and digital transformation. Learn from our experience
            helping enterprises navigate the future of work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <Card
              key={insight.id}
              className="glass-card p-6 flex flex-col hover-elevate transition-all duration-300 section-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-insight-${insight.id}`}
            >
              <Badge variant="secondary" className="w-fit mb-3">
                {insight.category}
              </Badge>

              <h3 className="font-display font-bold text-xl mb-3 leading-tight">
                {insight.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                {insight.excerpt}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Key Topics:</h4>
                <ul className="space-y-1">
                  {insight.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs">
                      <span className="text-accent mt-0.5">•</span>
                      <span className="text-foreground/70">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{insight.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{insight.readTime}</span>
                  </span>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="mt-4 w-full justify-between"
                data-testid={`button-read-${insight.id}`}
              >
                Read Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
