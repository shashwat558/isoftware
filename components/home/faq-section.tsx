"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FAQSection() {
  return (
    <div className="w-full bg-black min-h-screen flex flex-col items-center justify-center py-16 px-4">
        
      <div className="max-w-3xl w-full mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(88,28,135,0.15),_transparent_60%)] pointer-events-none"></div>
        <div className="flex justify-center mb-8">
          <button className="px-4 py-2 rounded-full border border-gray-700 text-gray-200 text-sm hover:bg-gray-800 transition-colors">
            FAQs
          </button>
        </div>

        <h2 className="text-white text-5xl font-bold text-center mb-16 tracking-tight">
          <span className="relative">
            <span className="relative z-10">Questions? Answers.</span>
            <span className="absolute inset-0 blur-sm opacity-50 bg-white/10 z-0"></span>
          </span>
        </h2>

        <div className="space-y-4">
          <FAQItem
            question="What makes iSoftwareStudio different from agencies or freelancers?"
            answer="We combine the personalized approach of freelancers with the comprehensive capabilities of agencies. Our streamlined process, fixed pricing, and dedicated team ensure high-quality results without the typical agency overhead or freelancer limitations."
          />

          <FAQItem
            question="What platforms do you develop websites on?"
            answer="We specialize in modern web technologies including React, Next.js, WordPress, Shopify, and custom solutions. We select the best platform based on your specific needs, performance requirements, and long-term goals."
          />

          <FAQItem
            question="How do we collaborate during the project?"
            answer="We maintain clear communication through dedicated project management tools. You'll have regular updates, milestone reviews, and direct access to your project team. Our collaborative approach ensures your vision is realized at every stage."
          />

          <FAQItem
            question="How fast will my website be ready?"
            answer="Typical projects are completed within 2-4 weeks, depending on complexity. We provide a detailed timeline during our initial consultation. For simpler projects, we can often deliver even faster without compromising quality."
          />

          <FAQItem
            question="What if I need my website done urgently?"
            answer="We offer expedited services for time-sensitive projects. Our team can mobilize quickly to meet tight deadlines while maintaining our quality standards. Rush fees may apply depending on the timeline and scope."
          />
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left text-white hover:bg-gray-900/50 transition-colors"
      >
        <span className="text-base md:text-lg font-medium">{question}</span>
        <ChevronDown
          className={cn("h-5 w-5 text-gray-400 transition-transform duration-200", isOpen && "transform rotate-180")}
        />
      </button>

      <div className={cn("max-h-0 overflow-hidden transition-all duration-300 ease-in-out", isOpen && "max-h-96 p-6")}>
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  )
}
