import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="AI Mill Logo" className="h-8 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">AI Mill</span>
            </div>
            <p className="text-white/80 mb-4">
              Accelerating Intelligence for Every Business. Transform your operations with cutting-edge AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/consulting" className="text-white/80 hover:text-primary transition-colors">
                  Boutique AI Consulting
                </Link>
              </li>
              <li>
                <Link to="/solutions/marketing" className="text-white/80 hover:text-primary transition-colors">
                  AI Marketing Platform
                </Link>
              </li>
              <li>
                <Link to="/solutions/claims" className="text-white/80 hover:text-primary transition-colors">
                  AI Claims Assistant
                </Link>
              </li>
              <li>
                <Link to="/solutions/legal" className="text-white/80 hover:text-primary transition-colors">
                  AI Legal & Tax Assistant
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80">123 AI Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@aimill.com" className="text-white/80 hover:text-primary transition-colors">
                  info@aimill.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-white/80 text-sm">
              <p className="font-semibold mb-1">Business Hours:</p>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} AI Mill. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-white/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-white/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
