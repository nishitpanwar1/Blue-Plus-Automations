import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Workflow, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Bot, 
  Database, 
  Network 
} from "lucide-react";

const services = [
  {
    id: "workflow",
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and optimize business processes with intelligent workflow automation that adapts to your enterprise needs.",
    useCases: [
      "Automated document processing and routing",
      "Approval workflows and escalations",
      "Cross-department process orchestration",
      "Task assignment and tracking automation"
    ],
    benefits: [
      "70% reduction in manual processing time",
      "Zero human error in routine tasks",
      "Real-time process visibility and analytics",
      "Scalable to handle growing workloads"
    ],
    tools: ["Zapier", "Make", "n8n", "Microsoft Power Automate", "Custom RPA"]
  },
  {
    id: "chatbot",
    icon: MessageSquare,
    title: "Chatbot Automation",
    description: "Deploy AI-powered conversational agents that provide 24/7 customer support, lead qualification, and employee assistance with natural language understanding.",
    useCases: [
      "Customer service and support automation",
      "Lead qualification and nurturing",
      "Employee HR and IT helpdesk",
      "Interactive product recommendations"
    ],
    benefits: [
      "95% reduction in response time",
      "Handle 1000+ conversations simultaneously",
      "Multilingual support without hiring",
      "Continuous learning and improvement"
    ],
    tools: ["OpenAI GPT-4", "Claude AI", "Dialogflow", "Rasa", "Custom LLM Integration"]
  },
  {
    id: "marketing",
    icon: BarChart3,
    title: "Marketing Automation",
    description: "Orchestrate personalized, multi-channel marketing campaigns that engage customers at scale with precision targeting and automated nurturing sequences.",
    useCases: [
      "Email campaign automation and personalization",
      "Social media scheduling and monitoring",
      "Lead scoring and segmentation",
      "A/B testing and optimization"
    ],
    benefits: [
      "3x increase in campaign ROI",
      "80% time savings on campaign management",
      "Personalization at enterprise scale",
      "Data-driven decision making"
    ],
    tools: ["HubSpot", "Mailchimp", "ActiveCampaign", "Marketo", "Custom Analytics"]
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM Automation",
    description: "Supercharge your customer relationship management with automated data entry, intelligent lead routing, and predictive analytics for better sales outcomes.",
    useCases: [
      "Automatic contact and deal creation",
      "Lead assignment and distribution",
      "Sales pipeline management",
      "Customer lifecycle tracking"
    ],
    benefits: [
      "60% increase in sales productivity",
      "Complete customer interaction history",
      "Predictive sales forecasting",
      "Seamless team collaboration"
    ],
    tools: ["Salesforce", "HubSpot CRM", "Pipedrive", "Zoho CRM", "Custom Integrations"]
  },
  {
    id: "ai-agents",
    icon: Bot,
    title: "AI Agents",
    description: "Deploy autonomous AI agents that can reason, plan, and execute complex multi-step tasks across your enterprise systems with minimal human oversight.",
    useCases: [
      "Intelligent document analysis and extraction",
      "Automated research and data gathering",
      "Complex decision-making workflows",
      "Predictive maintenance and monitoring"
    ],
    benefits: [
      "Execute tasks 100x faster than humans",
      "Handle complex reasoning and planning",
      "Continuous operation without breaks",
      "Self-improving through machine learning"
    ],
    tools: ["LangChain", "AutoGPT", "OpenAI Assistants", "Custom AI Models", "Agent Frameworks"]
  },
  {
    id: "data",
    icon: Database,
    title: "Data Automation",
    description: "Automate data collection, transformation, and analysis pipelines to turn raw information into actionable insights without manual intervention.",
    useCases: [
      "ETL pipeline automation",
      "Real-time data synchronization",
      "Automated reporting and dashboards",
      "Data quality monitoring and cleansing"
    ],
    benefits: [
      "Real-time insights instead of weekly reports",
      "99.9% data accuracy guarantee",
      "Automated compliance and audit trails",
      "Scalable data processing infrastructure"
    ],
    tools: ["Apache Airflow", "dbt", "Fivetran", "Tableau", "Custom Data Pipelines"]
  },
  {
    id: "integration",
    icon: Network,
    title: "Integration & API Automation",
    description: "Connect disparate systems and applications seamlessly with automated API integrations that keep your enterprise data synchronized in real-time.",
    useCases: [
      "Application-to-application integration",
      "Legacy system modernization",
      "Third-party service connections",
      "Microservices orchestration"
    ],
    benefits: [
      "Eliminate data silos completely",
      "Real-time cross-system synchronization",
      "Reduced integration development time by 80%",
      "Future-proof architecture"
    ],
    tools: ["REST APIs", "GraphQL", "Webhooks", "Message Queues", "Enterprise Service Bus"]
  }
];

export function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-muted/30"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade-in">
          <Badge className="mb-4 px-4 py-1.5 text-sm" data-testid="badge-services">Our Services</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6" data-testid="heading-services">
            <span className="gradient-text">Complete Automation Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-services-subtitle">
            Enterprise-grade automation services powered by cutting-edge AI technology.
            Transform every aspect of your business operations.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="glass-card p-8 hover-elevate transition-all duration-300 section-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-service-${service.id}`}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-md gradient-blue flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-2xl">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Use Cases</h4>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-foreground/80">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Key Benefits</h4>
                    <ul className="space-y-2 mb-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <span className="text-accent mt-1">✓</span>
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <h5 className="font-medium text-sm mb-2 text-muted-foreground">Tools & Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
