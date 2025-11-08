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

  const solutions = [
    { name: "Boutique AI Consulting", path: "/solutions/consulting" },
    { name: "AI Marketing Platform", path: "/solutions/marketing" },
    { name: "AI Claims Assistant", path: "/solutions/claims" },
    { name: "AI Legal & Tax Assistant", path: "/solutions/legal" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="AI Mill Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground">AI Mill</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary pb-1 ${
                isActive("/") ? "text-primary border-b-2 border-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary pb-1 ${
                isActive("/about") ? "text-primary border-b-2 border-primary" : "text-foreground"
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
              <button className="text-sm font-medium text-foreground hover:text-primary flex items-center gap-1 pb-1">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-4 space-y-2 animate-fade-in border border-border">
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
              )}
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary pb-1 ${
                isActive("/contact") ? "text-primary border-b-2 border-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
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
  );
};

export default Navigation;
