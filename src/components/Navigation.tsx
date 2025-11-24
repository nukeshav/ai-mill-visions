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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-semibold tracking-[0.2em] uppercase">
          AI Mill
        </Link>

        <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm text-white/80">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/") ? "text-white font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about") ? "text-white font-semibold" : "text-white/70 hover:text-white"
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
                isSolutionsActive ? "text-white font-semibold" : "text-white/70 hover:text-white"
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
                isActive("/contact") ? "text-white font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              Contact
            </Link>
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex px-5 py-2 border border-white/60 text-white text-xs font-semibold tracking-wide rounded-md hover:bg-white/10 transition-colors"
        >
          Talk to Us
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
