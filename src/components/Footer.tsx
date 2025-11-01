import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-xl font-bold gradient-text">AI Mill</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Accelerating Intelligence for Every Business
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/consulting" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Boutique AI Consulting
                </Link>
              </li>
              <li>
                <Link to="/solutions/marketing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  AI Marketing Platform
                </Link>
              </li>
              <li>
                <Link to="/solutions/claims" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  AI Claims Assistant
                </Link>
              </li>
              <li>
                <Link to="/solutions/legal" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  AI Legal & Tax Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} AI Mill. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
