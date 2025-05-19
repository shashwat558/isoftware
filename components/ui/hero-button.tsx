"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  icon?: React.ReactNode;
}

const HeroButton = ({
  children,
  className,
  onClick,
  variant = "primary",
  size = "default",
  icon = <ArrowRight className="h-4 w-4" />,
}: HeroButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden group transition-all duration-300 rounded-full font-medium",
        variant === "primary" 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        size === "lg" ? "text-lg py-6 px-8" : "py-3 px-6",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <span 
          className={cn(
            "transition-transform duration-300 ease-out",
            isHovered ? "translate-x-1" : ""
          )}
        >
          {icon}
        </span>
      </span>
      <span
        className={cn(
          "absolute inset-0 w-full h-full transform origin-left scale-x-0 transition-transform duration-300",
          variant === "primary" ? "bg-primary-foreground/10" : "bg-secondary-foreground/10",
          isHovered ? "scale-x-100" : ""
        )}
      />
    </Button>
  );
};

export default HeroButton;