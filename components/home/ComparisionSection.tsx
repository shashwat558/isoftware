"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ComparisonGroup } from "../ui/comparison-group";

export function ComparisonSection() {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-4 bg-card/30 px-4 py-1.5 rounded-full">
            <span className="text-sm font-medium">Comparison</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            What makes us unique?
          </h2>
          <div className="flex justify-center">
            <Button className="group" size="lg">
              Book an Intro Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="text-center md:text-left">
            <div className="inline-flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
              <span className="font-medium text-blue-500">With iSoftwareStudios:</span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="inline-flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
              <span className="font-medium text-red-500">Without iSoftwareStudios:</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <ComparisonGroup
            positiveTitle="Expert Developer and Designer"
            positiveDescription="Experience and expertise at your fingertips, ensuring exceptional design quality."
            negativeTitle="Junior Developer and Designer"
            negativeDescription="Inexperienced designers may compromise on quality and attention to detail."
            index={0}
          />

          <ComparisonGroup
            positiveTitle="Easy Project Management"
            positiveDescription="Simple processes & clear communication for a hassle-free experience."
            negativeTitle="Tedious & Hard to Keep Up"
            negativeDescription="Disorganized processes and poor communication lead to frustration."
            index={1}
          />

          <ComparisonGroup
            positiveTitle="Fixed Pricing & Transparent Terms"
            positiveDescription="Clear project scope and pricing with no hidden costs or unexpected charges."
            negativeTitle="Unpredictable Costs & Unclear Terms"
            negativeDescription="Vague estimates and constant price adjustments making budgeting impossible."
            index={2}
          />

          <ComparisonGroup
            positiveTitle="Dedicated Support Team"
            positiveDescription="24/7 access to a team that knows your project inside out for quick resolution."
            negativeTitle="Inconsistent Support"
            negativeDescription="Long wait times and support representatives unfamiliar with your specific needs."
            index={3}
          />

          <ComparisonGroup
            positiveTitle="Cutting-Edge Technology"
            positiveDescription="Solutions built with the latest technologies ensuring longevity and performance."
            negativeTitle="Outdated Technology Stack"
            negativeDescription="Using deprecated technologies leading to maintenance issues and security vulnerabilities."
            index={4}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button className="group" size="lg" variant="outline">
            Book a call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}