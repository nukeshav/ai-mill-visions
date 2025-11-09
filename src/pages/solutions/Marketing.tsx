import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import { MessageSquare, BarChart3, Zap, Users, CheckCircle2, ArrowRight } from "lucide-react";
import marketingImage from "@/assets/marketing-platform.jpg";

const Marketing = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Multi-Channel Automation",
      description: "Manage WhatsApp, Facebook, Instagram, and email campaigns from one platform.",
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description: "Real-time insights and predictive analytics to optimize campaign performance.",
    },
    {
      icon: Zap,
      title: "Smart Personalization",
      description: "AI-driven content and timing recommendations for each customer.",
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      description: "Intelligent audience targeting based on behavior and preferences.",
    },
  ];

  const integrations = [
    "WhatsApp Business API",
    "Facebook Messenger",
    "Instagram Direct",
    "Email Marketing",
    "SMS Campaigns",
    "Web Chat",
    "Telegram",
    "Google Ads",
  ];

  const benefits = [
    { metric: "3x", description: "Increase in engagement rates" },
    { metric: "60%", description: "Reduction in manual work" },
    { metric: "2x", description: "Higher conversion rates" },
    { metric: "24/7", description: "Automated customer support" },
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
                AI <span className="gradient-text">Marketing Platform</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your marketing operations with intelligent automation. Reach customers
                across all channels with personalized, AI-driven campaigns that convert.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="animate-slide-up">
              <img
                src={marketingImage}
                alt="AI Marketing Platform"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={benefit.description}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Platform Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  hover
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Seamless Integrations
            </h2>
            <Card className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {integrations.map((integration) => (
                  <div key={integration} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{integration}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* ROI Section */}
          <Card className="max-w-4xl mx-auto text-center border-2 border-primary">
            <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
            <p className="text-muted-foreground mb-8">
              See how much time and money you could save with our AI marketing platform.
              Most clients see positive ROI within 3 months.
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Get ROI Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Marketing;
