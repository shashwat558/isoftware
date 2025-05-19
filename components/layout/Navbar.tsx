"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-3">
          <Image src={"/logo.png"} alt="logo" width={50} height={50}/>
          iSoftwareStudio
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <NavLinks />
          <ThemeToggle />
          <Button className="ml-4 px-6 rounded-full flex items-center gap-2 bg-primary/90 hover:bg-primary transition-all">
            Contact Us <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

const NavLinks = () => {
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
          className="text-foreground/90 hover:text-foreground transition-colors relative group py-2"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </>
  );
};

export default Navbar;