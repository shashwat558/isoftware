"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      
      <nav
        className={cn(
          "fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 py-3 px-6 rounded-full border-[1px] border-gray-400",
          scrolled
            ? "w-full max-w-3xl bg-background/80 backdrop-blur-md shadow-md"
            : "w-[90%] max-w-5xl bg-background/60 backdrop-blur-sm"
        )}
      >
        <div className="flex items-center justify-between">
          
          <motion.div
            initial={false}
            animate={{ opacity: scrolled ? 1 : 1, scale: scrolled ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Link
              href="/"
              className="text-xl font-bold tracking-tight flex items-center gap-3"
            >
              <Image src="/logo.png" alt="logo" width={40} height={40} />
              <span className="hidden sm:inline-block">iSoftwareStudio</span>
            </Link>
          </motion.div>

          
         <motion.div
  className="hidden md:flex items-center gap-6 transition-all duration-300"
  initial={false}
  animate={{ opacity: 1, scale: scrolled ? 0.95 : 1 }}
  transition={{ duration: 0.3 }}
>

            
          
            <NavLinks />
            <ThemeToggle />
            <Button className="px-5 rounded-full flex items-center gap-2 bg-primary/90 hover:bg-primary transition-all">
              Contact Us <ExternalLink className="h-4 w-4" />
            </Button>
          </motion.div>

          
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 w-64 bg-background/95 backdrop-blur-lg shadow-lg p-6 md:hidden"
          >
            <div className="flex flex-col gap-4 mt-10">
              <NavLinks mobile />
              <Button className="w-full mt-4 bg-primary/90 hover:bg-primary">
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative group py-2 transition-colors",
            mobile
              ? "block text-lg font-medium text-foreground/80 hover:text-foreground"
              : "text-foreground/90 hover:text-foreground"
          )}
        >
          {link.label}
          {!mobile && (
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          )}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
