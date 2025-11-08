import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsActive = location.pathname.startsWith("/solutions/");

  const solutions = [
    { name: "Boutique AI Consulting", path: "/solutions/consulting" },
    { name: "AI Marketing Platform", path: "/solutions/marketing" },
    { name: "AI Claims Assistant", path: "/solutions/claims" },
    { name: "AI Legal & Tax Assistant", path: "/solutions/legal" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block fixed top-5 left-1/2 -translate-x-1/2 w-[900px] h-[60px] px-8 rounded-full backdrop-blur-xl z-50 shadow-lg">
        <div 
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(255, 255, 255, 0.4)' }}
        />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="flex items-center gap-8 text-sm">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/") ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about") ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              About
            </Link>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className={`text-sm flex items-center gap-1 transition-colors py-2 ${
                isSolutionsActive ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
              }`}>
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 space-y-2 animate-fade-in border border-border">
                    <Link to="/solutions/consulting" className="block p-3 rounded-lg hover:bg-accent transition-colors">
                      <h4 className="font-semibold text-sm mb-1">Boutique AI Consulting</h4>
                      <p className="text-xs text-muted-foreground">Custom AI strategies</p>
                    </Link>
                    <Link to="/solutions/marketing" className="block p-3 rounded-lg hover:bg-accent transition-colors">
                      <h4 className="font-semibold text-sm mb-1">AI Marketing Platform</h4>
                      <p className="text-xs text-muted-foreground">Automated campaigns</p>
                    </Link>
                    <Link to="/solutions/claims" className="block p-3 rounded-lg hover:bg-accent transition-colors">
                      <h4 className="font-semibold text-sm mb-1">AI Claims Assistant</h4>
                      <p className="text-xs text-muted-foreground">Streamline processing</p>
                    </Link>
                    <Link to="/solutions/legal" className="block p-3 rounded-lg hover:bg-accent transition-colors">
                      <h4 className="font-semibold text-sm mb-1">AI Legal & Tax Assistant</h4>
                      <p className="text-xs text-muted-foreground">Intelligent automation</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact") ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="AI Mill Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-foreground">AI Mill</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <div className="space-y-2">
                  <div className="text-muted-foreground text-sm font-semibold">Solutions</div>
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="block pl-4 text-foreground hover:text-primary transition-colors"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
                <Button className="bg-primary hover:bg-primary/90 w-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
