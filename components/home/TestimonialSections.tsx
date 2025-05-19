"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "../ui/TestimonialCard";


const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision",
    testimonial: "Working with iSoftwareStudios transformed our digital presence. Their attention to detail and innovative solutions exceeded our expectations. The team's professionalism and expertise are unmatched.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, InnovateLab",
    testimonial: "The team at iSoftwareStudios delivered our project ahead of schedule and with exceptional quality. Their communication was clear, and they were always available to address our concerns.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Emily Watson",
    role: "CTO, FutureScale",
    testimonial: "iSoftwareStudios brought our vision to life with their creative approach and technical expertise. Their team's dedication to quality and innovation made them the perfect partner for our project.",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "David Park",
    role: "Product Director, NextGen",
    testimonial: "The expertise and professionalism of iSoftwareStudios are outstanding. They not only delivered a beautiful product but also provided valuable insights that improved our initial concept.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Head, GrowthX",
    testimonial: "Choosing iSoftwareStudios was the best decision for our project. Their innovative approach and technical excellence helped us achieve our goals and exceed market expectations.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Michael Chang",
    role: "Founder, DigitalPeak",
    testimonial: "The team's commitment to excellence and their ability to solve complex challenges made our project a success. iSoftwareStudios is truly a cut above the rest in software development.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/5" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-4 bg-card/30 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Trusted by businesses worldwide
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}