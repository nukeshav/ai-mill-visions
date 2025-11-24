import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import StatsCounter from "@/components/StatsCounter";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, FileCheck, Scale, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const Index = () => {
  const services = [
    {
      icon: Brain,
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
      icon: FileCheck,
      title: "AI Claims Assistant",
      description: "Streamline insurance claims processing with 60-80% time reduction.",
      link: "/solutions/claims",
    },
    {
      icon: Scale,
      title: "AI Legal & Tax Assistant",
      description: "Intelligent automation for legal research and tax compliance.",
      link: "/solutions/legal",
    },
  ];

  const testimonials = [
    {
      quote: "Piqo Studio is a great icon designer. They are fast, reliable, easy to work with, and always keen to do some explorations to find the best concept possible for any icon. I hope to keep working with them in the future!",
      author: "Robin Noguier",
      role: "Senior Interactive Designer",
    },
    {
      quote: "AI Mill transformed our operations. The efficiency gains have been remarkable. Their team understood our needs perfectly and delivered beyond expectations.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
    },
    {
      quote: "Their marketing platform doubled our conversion rate in just three months. The ROI has been incredible and the support team is always responsive.",
      author: "Michael Rodriguez",
      role: "CMO, GrowthScale",
    },
    {
      quote: "The claims processing system saved us thousands of hours. Game-changing technology that actually works as promised. Highly recommend!",
      author: "Jennifer Williams",
      role: "VP Operations, SecureLife",
    },
    {
      quote: "Working with AI Mill has been a pleasure. Their AI consulting helped us identify opportunities we never knew existed. Truly transformative.",
      author: "David Park",
      role: "CEO, InnovateCo",
    },
    {
      quote: "I enjoyed working with this team. They delivered custom icons for our platform with quick revisions. Can't wait to work together again!",
      author: "Cecilia Smith",
      role: "Lead Product Designer",
    },
  ];

  return (
    <div className="min-h-screen">
      
      <main>
        {/* Hero Section */}
        <Hero title="Accelerating Intelligence for Every Business" subtitle="Transform your business with cutting-edge AI solutions" backgroundImage={heroImage}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/solutions/consulting">
              <Button size="lg" variant="outline" className="text-lg">
                View Solutions
              </Button>
            </Link>
          </div>
        </Hero>
       
        {/* Stats Counter */}
        <Navigation />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <StatsCounter end={250} suffix="+" />
                <p className="text-muted-foreground mt-2">Projects Delivered</p>
              </div>
              <div className="text-center">
                <StatsCounter end={98} suffix="%" />
                <p className="text-muted-foreground mt-2">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <StatsCounter end={60} suffix="%" />
                <p className="text-muted-foreground mt-2">Avg Efficiency Gain</p>
              </div>
              <div className="text-center">
                <StatsCounter end={15} suffix="+" />
                <p className="text-muted-foreground mt-2">Industries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Bar */}

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform every aspect of your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link key={service.title} to={service.link}>
                  <GlassCard
                    hover
                    className="h-full text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center text-primary text-sm font-medium">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 section-gray overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left side - Heading */}
              <div className="lg:w-1/4 flex-shrink-0">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">CLIENTS</p>
                <h2 className="text-4xl font-bold">What people say about us?</h2>
              </div>

              {/* Right side - Carousel */}
              <div className="flex-1 min-w-0">
                <TestimonialCarousel testimonials={testimonials} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how AI can drive your success. Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
