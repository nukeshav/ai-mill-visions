import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import { FileText, Scan, Clock, CheckCircle, ArrowRight } from "lucide-react";
import claimsImage from "@/assets/claims-assistant.jpg";

const Claims = () => {
  const features = [
    {
      icon: Scan,
      title: "Intelligent Document Processing",
      description: "Automatically extract and validate data from claims documents with 99% accuracy.",
    },
    {
      icon: Clock,
      title: "Instant Processing",
      description: "Reduce processing time from hours to minutes with AI automation.",
    },
    {
      icon: FileText,
      title: "Smart Categorization",
      description: "AI automatically categorizes and routes claims to the right department.",
    },
    {
      icon: CheckCircle,
      title: "Fraud Detection",
      description: "Advanced algorithms identify suspicious patterns and potential fraud.",
    },
  ];

  const workflow = [
    {
      title: "Document Upload",
      description: "Claims are submitted through multiple channels (email, web, mobile).",
    },
    {
      title: "AI Extraction",
      description: "Intelligent OCR extracts all relevant data from documents.",
    },
    {
      title: "Validation",
      description: "AI validates information against policy details and historical data.",
    },
    {
      title: "Risk Assessment",
      description: "Machine learning models assess claim risk and flag anomalies.",
    },
    {
      title: "Routing",
      description: "Claims are automatically routed to appropriate adjusters.",
    },
    {
      title: "Resolution",
      description: "Fast-tracked processing with AI-assisted decision support.",
    },
  ];

  const metrics = [
    { value: "60-80%", label: "Time Reduction" },
    { value: "99%", label: "Accuracy Rate" },
    { value: "40%", label: "Cost Savings" },
    { value: "95%", label: "Customer Satisfaction" },
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
                AI <span className="gradient-text">Claims Assistant</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Revolutionize your claims processing with AI that understands, validates,
                and routes claims automatically. Reduce processing time by up to 80%.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="animate-slide-up">
              <img
                src={claimsImage}
                alt="AI Claims Assistant"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Metrics */}
          <div className="mb-20">
            <div className="grid md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card
                  key={metric.label}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
                  <p className="text-muted-foreground">{metric.label}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
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

          {/* Workflow */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Automated Workflow
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {workflow.map((step, index) => (
                <Card
                  key={step.title}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-primary mb-3">{index + 1}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Before/After Comparison */}
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Before & After</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-destructive">Before AI</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Manual data entry (2-4 hours per claim)</li>
                  <li>• High error rates (10-15%)</li>
                  <li>• Delayed processing times</li>
                  <li>• Limited fraud detection</li>
                  <li>• High operational costs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">After AI</h3>
                <ul className="space-y-3 text-foreground">
                  <li>• Automated processing (10-20 minutes)</li>
                  <li>• 99% accuracy</li>
                  <li>• Real-time processing</li>
                  <li>• Advanced fraud detection</li>
                  <li>• 40% cost reduction</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Claims;
