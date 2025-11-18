import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactSubmission } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

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

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit your message. Please try again or contact us directly via email.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const data: InsertContactSubmission = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string || undefined,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    submitContactMutation.mutate(data);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-muted/30"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade-in">
          <Badge className="mb-4 px-4 py-1.5 text-sm" data-testid="badge-contact">Get In Touch</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6" data-testid="heading-contact">
            <span className="gradient-text">Let's Transform Your Business</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-contact-subtitle">
            Ready to automate, accelerate, and evolve? Reach out to discuss how BluePulse
            can help your enterprise achieve unprecedented efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6 section-fade-in">
            <Card className="glass-card p-6 hover-elevate" data-testid="card-contact-email">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-md gradient-blue flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get a response within 24 hours
                  </p>
                  <a
                    href="mailto:contact@bluepulse.ai"
                    className="text-primary font-medium hover:underline text-sm"
                    data-testid="link-email"
                  >
                    contact@bluepulse.ai
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover-elevate" data-testid="card-contact-discord">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-md gradient-purple flex items-center justify-center flex-shrink-0">
                  <SiDiscord className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">Join Our Discord</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Connect with our automation community
                  </p>
                  <a
                    href="https://discord.gg/bluepulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline text-sm"
                    data-testid="link-discord"
                  >
                    discord.gg/bluepulse
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-md gradient-cyan flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team typically responds to inquiries within 24 hours on business days.
                    For urgent matters, join our Discord for real-time support.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="lg:col-span-2 glass-card p-8 section-fade-in" data-testid="card-contact-form">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-2xl mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="bg-background/50"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="bg-background/50"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company Inc."
                      className="bg-background/50"
                      data-testid="input-company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What can we help you with?"
                      className="bg-background/50"
                      data-testid="input-subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your automation needs..."
                      className="bg-background/50 resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitContactMutation.isPending}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                    data-testid="button-submit"
                  >
                    {submitContactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </Card>
        </div>

        <div className="mt-16 text-center section-fade-in">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-xl mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a free consultation to discuss your automation needs and discover
              how BluePulse can transform your enterprise operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-schedule-consultation"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-view-services"
              >
                View Services
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
