"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const RevealText = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: RevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden relative",
        className
      )}
    >
      <div
        className={cn(
          "transform translate-y-[100%] opacity-0 transition-all",
          isVisible && "translate-y-0 opacity-100"
        )}
        style={{
          transitionDuration: `${duration}s`,
          transitionDelay: `${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealText;