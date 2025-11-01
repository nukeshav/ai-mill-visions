import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Brain, Code, Lightbulb, Target, CheckCircle2, ArrowRight } from "lucide-react";
import consultingImage from "@/assets/consulting-visual.jpg";

const Consulting = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmap",
      description: "Develop comprehensive AI strategies aligned with your business objectives.",
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Build bespoke AI models and solutions tailored to your needs.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Workshops",
      description: "Discover AI opportunities through collaborative ideation sessions.",
    },
    {
      icon: Target,
      title: "Implementation Support",
      description: "End-to-end guidance from concept to production deployment.",
    },
  ];

  const industries = [
    "Healthcare & Pharmaceuticals",
    "Financial Services",
    "Retail & E-commerce",
    "Manufacturing",
    "Technology & SaaS",
    "Insurance",
    "Legal & Professional Services",
    "Education",
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Deep dive into your business challenges and opportunities.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Design a tailored AI roadmap with clear milestones.",
    },
    {
      step: "03",
      title: "Build",
      description: "Develop and test AI solutions with agile methodology.",
    },
    {
      step: "04",
      title: "Deploy",
      description: "Launch solutions and ensure smooth integration.",
    },
    {
      step: "05",
      title: "Optimize",
      description: "Continuous improvement and performance monitoring.",
    },
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
                Boutique <span className="gradient-text">AI Consulting</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Partner with experts who understand both AI technology and your business.
                We deliver enterprise-grade solutions with boutique-level attention to detail.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="animate-slide-up">
              <img
                src={consultingImage}
                alt="AI Consulting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Our Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <GlassCard
                  key={capability.title}
                  hover
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm">{capability.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <GlassCard
                  key={item.step}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Industries */}
          <GlassCard className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{industry}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consulting;
