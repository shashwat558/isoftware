"use client"

import { cn } from "@/lib/utils"
import { Rocket, Shield, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

interface BenefitsSectionProps {
  className?: string
}

const BenefitsSection = ({ className }: BenefitsSectionProps) => {
  const benefits = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "End-to-End Service",
      description: "From ideation to launch, we handle every step of your software journey, ensuring a seamless process."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Budget-Friendly Packages",
      description: "No hidden fees. We offer clear and upfront pricing, so you know exactly what you're investing in."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Long-Term Partnership",
      description: "Our work doesn't stop at launch. We continually optimize your software to keep it ahead of the competition."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className={cn("py-24 bg-background", className)}>
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Because results matter.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional software solutions that drive real business value.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl" />
              <div className="relative">
                <div className="mb-6 inline-block p-3 bg-primary/10 rounded-xl text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BenefitsSection