import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsActive = location.pathname.startsWith("/solutions/");

  const solutions = [
    { name: "Boutique AI Consulting", path: "/solutions/consulting", desc: "Custom AI strategies" },
    { name: "AI Marketing Platform", path: "/solutions/marketing", desc: "Automated campaigns" },
    { name: "AI Claims Assistant", path: "/solutions/claims", desc: "Streamline processing" },
    { name: "AI Legal & Tax Assistant", path: "/solutions/legal", desc: "Intelligent automation" },
  ];

  return (
    <>
      {/* Unified Navbar - Same design for all screen sizes */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-[900px] h-[60px] px-4 md:px-8 rounded-full backdrop-blur-xl z-50 shadow-lg">
        <div 
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(255, 255, 255, 0.4)' }}
        />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm">
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
              onClick={() => setSolutionsOpen(!solutionsOpen)}
            >
              <button className={`text-xs md:text-sm flex items-center gap-1 transition-colors py-2 ${
                isSolutionsActive ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
              }`}>
                Solutions <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 md:w-64">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-3 md:p-4 space-y-2 animate-fade-in border border-border">
                    {solutions.map((solution) => (
                      <Link 
                        key={solution.path}
                        to={solution.path} 
                        className="block p-2 md:p-3 rounded-lg hover:bg-accent transition-colors"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        <h4 className="font-semibold text-xs md:text-sm mb-1">{solution.name}</h4>
                        <p className="text-[10px] md:text-xs text-muted-foreground">{solution.desc}</p>
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
    </>
  );
};

export default Navigation;
