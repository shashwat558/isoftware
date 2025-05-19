"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import HeroButton from "@/components/ui/hero-button";
import RevealText from "@/components/ui/reveal-text";
import ParticleBackground from "@/components/ui/particle-background";
import ClientLogos from "@/components/home/client-logos";
import { Calendar } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section 
      className={cn(
        "relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-[-20]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/5%),transparent_50%)] z-[-15]" />
      <ParticleBackground className="z-[-10] opacity-40" />

      {/* Content Container */}
      <div className="container px-4 mx-auto text-center z-10 mt-8 md:mt-0">
        {/* Pill Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-border mb-8 text-sm font-medium">
          iSoftwareStudio — Your Technology Partner
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight md:leading-tight">
          <RevealText delay={0.1} duration={0.8}>
            We Don&apos;t Just Create
          </RevealText>
          <RevealText delay={0.3} duration={0.8} className="mt-2 md:mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4">
              Software Solutions
            </span>
          </RevealText>
          <RevealText delay={0.5} duration={0.8} className="mt-2 md:mt-4">
            We Build Success Stories.
          </RevealText>
        </h1>

        {/* Subtitle */}
        <RevealText delay={0.7} duration={0.8}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your vision deserves exceptional execution. We craft premium, scalable software
            that transforms ideas into market-leading products.
          </p>
        </RevealText>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <RevealText delay={0.9} duration={0.6}>
            <HeroButton 
              variant="primary" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Start your project
            </HeroButton>
          </RevealText>
          
          <RevealText delay={1.1} duration={0.6}>
            <HeroButton 
              variant="secondary" 
              size="lg"
              icon={<Calendar className="h-4 w-4" />}
              className="w-full sm:w-auto"
            >
              Book a consultation
            </HeroButton>
          </RevealText>
        </div>

        {/* Client Logos */}
        <RevealText delay={1.3} duration={0.8}>
          <ClientLogos />
        </RevealText>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl z-[-5]" />
      <div className="absolute bottom-1/4 -left-28 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl z-[-5]" />
    </section>
  );
};

export default HeroSection;