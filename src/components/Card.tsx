import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const Card = ({ children, className, hover = false, style }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md border border-border p-6 transition-all duration-300",
        hover && "hover:-translate-y-2 hover:shadow-xl hover:border-primary cursor-pointer",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
