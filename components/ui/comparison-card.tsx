"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ComparisonCardProps = {
  isPositive: boolean;
  title: string;
  description: string;
  className?: string;
  index: number;
};

export function ComparisonCard({
  isPositive,
  title,
  description,
  className,
  index,
}: ComparisonCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1 
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "bg-card rounded-xl p-6 h-full transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start gap-3">
        {isPositive ? (
          <CheckCircle2 className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
        ) : (
          <XCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
        )}
        <div>
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}