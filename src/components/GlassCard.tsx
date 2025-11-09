import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const GlassCard = ({ children, className, hover = false, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-8 transition-all duration-500 border border-white/20",
        hover && "hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 cursor-pointer hover:-translate-y-1",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
