import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: "full" | "half";
  children?: ReactNode;
  breadcrumb?: string;
}

const Hero = ({ title, subtitle, backgroundImage, height = "full", children, breadcrumb }: HeroProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center text-center px-4",
        height === "full" ? "min-h-screen" : "h-[50vh]"
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {
              background: "linear-gradient(135deg, hsl(26 70% 45%) 0%, hsl(18 55% 30%) 100%)",
            }
      }
    >
      <div className="container mx-auto relative z-10">
        {breadcrumb && (
          <div className="text-white/80 text-sm mb-4 animate-fade-in">
            {breadcrumb}
          </div>
        )}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {subtitle}
            </p>
          )}
          {children && (
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
