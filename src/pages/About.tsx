import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Heart, ArrowRight, Lightbulb, TrendingUp, Shield } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technologies to solve complex business challenges.",
    },
    {
      icon: TrendingUp,
      title: "Rapid Deployment",
      description: "Our solutions are designed for quick implementation and immediate impact.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that drive real business value.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We're partners in your digital transformation.",
    },
  ];

  const expertise = [
    {
      icon: Lightbulb,
      title: "Deep Learning Experts",
      description: "PhDs and researchers pushing AI boundaries",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance standards",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "250+ successful AI implementations",
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
                We're <span className="gradient-text">AI Mill</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Founded by AI experts and business strategists, AI Mill bridges the gap between
                cutting-edge technology and practical business solutions. We're not just consultants —
                we're your partners in digital transformation.
              </p>
              <Link to="/contact">
                <Button size="lg" className="mt-6">
                  Work With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="animate-slide-up">
              <img
                src={teamPhoto}
                alt="AI Mill Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <GlassCard
                  key={value.title}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <GlassCard
                  key={item.title}
                  hover
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* CTA */}
          <GlassCard className="text-center max-w-4xl mx-auto border-2 border-primary">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8">
              Let's explore how AI can transform your business. Schedule a consultation to get started.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </GlassCard>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
