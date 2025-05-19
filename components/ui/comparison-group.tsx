"use client";

import { motion } from "framer-motion";
import { ComparisonCard } from "./comparison-card";


type ComparisonGroupProps = {
  positiveTitle: string;
  positiveDescription: string;
  negativeTitle: string;
  negativeDescription: string;
  className?: string;
  index: number;
};

export function ComparisonGroup({
  positiveTitle,
  positiveDescription,
  negativeTitle,
  negativeDescription,
  className,
  index,
}: ComparisonGroupProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { duration: 0.5 }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}
    >
      <div className="md:pr-2">
        <ComparisonCard
          isPositive={true}
          title={positiveTitle}
          description={positiveDescription}
          index={index}
        />
      </div>
      <div className="md:pl-2">
        <ComparisonCard
          isPositive={false}
          title={negativeTitle}
          description={negativeDescription}
          index={index}
        />
      </div>
    </motion.div>
  );
}