import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Brain, Zap, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technologies to solve complex business challenges.",
    },
    {
      icon: Zap,
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

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming Businesses with{" "}
              <span className="gradient-text">AI Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              AI Mill is a boutique AI consulting firm dedicated to accelerating intelligence
              for businesses of all sizes. We combine cutting-edge technology with deep industry
              expertise to deliver transformative solutions.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <GlassCard className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To democratize artificial intelligence by making enterprise-grade AI solutions
                accessible, practical, and impactful for businesses across all industries.
                We believe every organization deserves the competitive advantage that AI provides.
              </p>
            </GlassCard>

            <GlassCard className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the leading catalyst for AI-driven transformation, empowering businesses
                to reach their full potential through intelligent automation, data-driven insights,
                and innovative solutions that shape the future of work.
              </p>
            </GlassCard>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <GlassCard
                  key={value.title}
                  hover
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <GlassCard className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Technology Stack</h2>
            <p className="text-muted-foreground text-center mb-8">
              We leverage industry-leading technologies and frameworks to build robust, scalable AI solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["TensorFlow", "PyTorch", "OpenAI", "LangChain", "React", "Python", "Azure", "AWS"].map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 glass-card rounded-full text-sm font-medium hover:border-primary transition-colors cursor-pointer"
                >
                  {tech}
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

export default About;
