"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  name: string;
  role: string;
  testimonial: string;
  image: string;
  className?: string;
  index: number;
};

export function TestimonialCard({
  name,
  role,
  testimonial,
  image,
  className,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "relative bg-card/30 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 overflow-hidden",
        "transition-all duration-300 hover:shadow-xl hover:bg-card/40",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        "after:absolute after:w-32 after:h-32 after:rounded-full after:bg-gradient-to-r after:from-blue-500/20 after:to-purple-500/20 after:blur-xl after:-top-16 after:-right-16",
        className
      )}
    >
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl -bottom-12 -left-12" />
      <div className="relative">
        <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial}</p>
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/10">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}