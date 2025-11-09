import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { Brain, Zap, Target, Users } from "lucide-react";
import backgroundImg from "@/assets/vitaly-gariev-gItonyvrdUA-unsplash.jpg";

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
      
      <main className="relative z-10">
        {/* Hero Section with Background */}
        <div 
          className="relative pt-24 pb-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.46), rgba(59, 59, 59, 0.47)), url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 py-20">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Transforming Businesses with{" "}
                <span className="gradient-text">AI Excellence</span>
              </h1>
              <p className="text-xl text-white/80">
                AI Mill is a boutique AI consulting firm dedicated to accelerating intelligence
                for businesses of all sizes. We combine cutting-edge technology with deep industry
                expertise to deliver transformative solutions.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 pb-10">
              <Card className="animate-slide-up bg-white/95">
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To democratize artificial intelligence by making enterprise-grade AI solutions
                  accessible, practical, and impactful for businesses across all industries.
                  We believe every organization deserves the competitive advantage that AI provides.
                </p>
              </Card>

              <Card className="animate-slide-up bg-white/95" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading catalyst for AI-driven transformation, empowering businesses
                  to reach their full potential through intelligent automation, data-driven insights,
                  and innovative solutions that shape the future of work.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Core Values - No Background */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card
                    key={value.title}
                    hover
                    className="text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <Card className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Technology Stack</h2>
              <p className="text-muted-foreground text-center mb-8">
                We leverage industry-leading technologies and frameworks to build robust, scalable AI solutions
              </p>
              
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
