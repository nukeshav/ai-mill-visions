import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Scale, FileSearch, Brain, Shield, ArrowRight } from "lucide-react";
import legalImage from "@/assets/legal-assistant.jpg";

const Legal = () => {
  const features = [
    {
      icon: FileSearch,
      title: "Legal Research Automation",
      description: "AI-powered research through thousands of legal documents in seconds.",
    },
    {
      icon: Scale,
      title: "Contract Analysis",
      description: "Intelligent contract review identifying risks and opportunities.",
    },
    {
      icon: Brain,
      title: "Tax Compliance",
      description: "Automated tax filing and compliance monitoring with AI assistance.",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Predictive analytics for legal risks and compliance issues.",
    },
  ];

  const useCases = [
    {
      title: "Contract Review",
      description: "Analyze contracts for potential issues, missing clauses, and compliance risks.",
      savings: "70% time reduction",
    },
    {
      title: "Legal Research",
      description: "Search through case law, statutes, and regulations instantly.",
      savings: "80% faster research",
    },
    {
      title: "Document Drafting",
      description: "Generate legal documents with AI assistance and templates.",
      savings: "60% efficiency gain",
    },
    {
      title: "Tax Preparation",
      description: "Automated tax calculation and filing with compliance checks.",
      savings: "50% cost reduction",
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous monitoring of regulatory changes and impact analysis.",
      savings: "Real-time alerts",
    },
    {
      title: "Due Diligence",
      description: "Accelerate M&A due diligence with intelligent document analysis.",
      savings: "75% faster review",
    },
  ];

  const benefits = [
    "Reduce legal research time by 80%",
    "Minimize human error in document review",
    "Ensure regulatory compliance automatically",
    "Lower operational costs significantly",
    "Scale legal operations without proportional staff increase",
    "Provide 24/7 legal support capabilities",
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI <span className="gradient-text">Legal & Tax Assistant</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empower your legal and tax teams with AI that researches, analyzes, and drafts
                with the precision of senior professionals, at the speed of technology.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="animate-slide-up">
              <img
                src={legalImage}
                alt="AI Legal Assistant"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Core Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <GlassCard
                  key={feature.title}
                  hover
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Use <span className="gradient-text">Cases</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <GlassCard
                  key={useCase.title}
                  hover
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>
                  <div className="inline-block px-3 py-1 glass-card rounded-full text-xs font-medium text-primary">
                    {useCase.savings}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* CTA */}
          <div className="mt-20">
            <GlassCard className="max-w-3xl mx-auto text-center gradient-border">
              <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
              <p className="text-muted-foreground mb-8">
                Schedule a personalized demo to see how our AI Legal & Tax Assistant
                can transform your practice.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
