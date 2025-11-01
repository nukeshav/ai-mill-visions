import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import StatsCounter from "@/components/StatsCounter";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ai-network.jpg";

const Index = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Boutique AI Consulting",
      description: "Custom AI strategies and solutions tailored to your unique business challenges.",
      link: "/solutions/consulting",
    },
    {
      icon: TrendingUp,
      title: "AI Marketing Platform",
      description: "Automated marketing campaigns powered by intelligent AI across all channels.",
      link: "/solutions/marketing",
    },
    {
      icon: Shield,
      title: "AI Claims Assistant",
      description: "Streamline insurance claims processing with 60-80% time reduction.",
      link: "/solutions/claims",
    },
    {
      icon: Zap,
      title: "AI Legal & Tax Assistant",
      description: "Intelligent automation for legal research and tax compliance.",
      link: "/solutions/legal",
    },
  ];

  const testimonials = [
    {
      quote: "AI Mill transformed our operations. The efficiency gains have been remarkable.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
    },
    {
      quote: "Their marketing platform doubled our conversion rate in just three months.",
      author: "Michael Rodriguez",
      role: "CMO, GrowthScale",
    },
    {
      quote: "The claims processing system saved us thousands of hours. Game-changing.",
      author: "Jennifer Williams",
      role: "VP Operations, SecureLife",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Accelerating{" "}
                  <span className="gradient-text">Intelligence</span>{" "}
                  for Every Business
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your operations with cutting-edge AI solutions. From boutique consulting
                  to powerful automation platforms, we deliver results that matter.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg border-primary text-primary hover:bg-primary/10">
                    View Solutions
                  </Button>
                </div>
              </div>
              <div className="relative animate-float">
                <img
                  src={heroImage}
                  alt="AI Neural Network"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <GlassCard>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <StatsCounter end={500} suffix="+" />
                  <p className="text-muted-foreground mt-2">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <StatsCounter end={250} suffix="+" />
                  <p className="text-muted-foreground mt-2">AI Models Deployed</p>
                </div>
                <div className="text-center">
                  <StatsCounter end={50} suffix="+" />
                  <p className="text-muted-foreground mt-2">Industries Served</p>
                </div>
                <div className="text-center">
                  <StatsCounter end={85} suffix="%" />
                  <p className="text-muted-foreground mt-2">Efficiency Gains</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform every aspect of your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link key={service.title} to={service.link}>
                  <GlassCard
                    hover
                    className="h-full animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="gradient-text">Industry Leaders</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <GlassCard
                  key={testimonial.author}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 text-primary">★</div>
                      ))}
                    </div>
                    <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <GlassCard className="text-center max-w-4xl mx-auto gradient-border">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how AI can drive your success. Schedule a consultation today.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
