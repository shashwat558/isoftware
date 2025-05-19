"use client";

import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface HowItWorksProps {
  className?: string;
}

const HowItWorksSection = ({ className }: HowItWorksProps) => {
  const steps = [
    {
      title: "Planning & Design",
      description: "We start by understanding your brand and goals, followed by creating a design tailored to your vision.",
    },
    {
      title: "Development",
      description: "Our team brings the design to life with clean, efficient code, ensuring your website is fast and scalable.",
    },
    {
      title: "Optimization & SEO",
      description: "We optimize for performance and implement SEO best practices to ensure your website ranks and performs well.",
    },
    {
      title: "Launch & Support",
      description: "After launching, we continue to optimize and provide support to ensure long-term success.",
    },
  ];

  return (
    <section className={cn("py-24 bg-background relative overflow-hidden", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/5%),transparent_50%)] z-0" />
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-border mb-8 text-sm font-medium">
            How it starts?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See what you can expect.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border mb-6 hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl" />
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a call →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;