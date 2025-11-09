import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsActive = location.pathname.startsWith("/solutions/");

  const solutions = [
    { name: "Boutique AI Consulting", path: "/solutions/consulting", desc: "Custom AI strategies" },
    { name: "AI Marketing Platform", path: "/solutions/marketing", desc: "Automated campaigns" },
    { name: "AI Claims Assistant", path: "/solutions/claims", desc: "Streamline processing" },
    { name: "AI Legal & Tax Assistant", path: "/solutions/legal", desc: "Intelligent automation" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileSolutionsOpen(false);
  };

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
                    {solutions.map((solution) => (
                      <Link 
                        key={solution.path}
                        to={solution.path} 
                        className="block p-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <h4 className="font-semibold text-sm mb-1">{solution.name}</h4>
                        <p className="text-xs text-muted-foreground">{solution.desc}</p>
                      </Link>
                    ))}
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
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              onClick={closeMobileMenu}
            >
              <img src={logo} alt="AI Mill Logo" className="h-9 w-auto" />
              <span className="text-lg font-bold text-foreground">AI Mill</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="text-foreground p-2 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Outside nav to avoid z-index issues */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[45]"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu Content */}
          <div className="lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-white overflow-y-auto z-[48] shadow-lg">
            <div className="px-4 py-6 space-y-1">
            {/* Home Link */}
            <Link 
              to="/" 
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive("/") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-accent"
              }`}
            >
              Home
            </Link>

            {/* About Link */}
            <Link 
              to="/about" 
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive("/about") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-accent"
              }`}
            >
              About
            </Link>

            {/* Solutions Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isSolutionsActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileSolutionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Solutions Submenu */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  mobileSolutionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-2 space-y-1">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className={`flex items-start gap-3 px-4 py-3 ml-4 rounded-lg transition-colors ${
                        isActive(solution.path)
                          ? "bg-primary/10 text-primary border-l-2 border-primary"
                          : "text-foreground/80 hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium">{solution.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{solution.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Link */}
            <Link 
              to="/contact" 
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive("/contact") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-accent"
              }`}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <div className="pt-4 px-4">
              <Link to="/contact" onClick={closeMobileMenu}>
                <Button className="bg-primary hover:bg-primary/90 w-full py-6 text-base font-semibold shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="pt-6 px-4 border-t border-border mt-6">
              <p className="text-xs text-muted-foreground text-center">
                © {new Date().getFullYear()} AI Mill. All rights reserved.
              </p>
            </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
