"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Why BRO", href: "#why-bro" },
    { name: "Community", href: "#community" },
    { name: "Research", href: "#research" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-brand-background/80 backdrop-blur-md border-brand-surface-3 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className="font-display font-bold text-2xl tracking-tighter text-brand-text-main hover:text-brand-orange-primary transition-colors">
          BRO<span className="text-brand-orange-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-body text-brand-text-muted hover:text-brand-text-main transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#interest"
            className="text-sm font-display font-medium px-5 py-2.5 rounded-full bg-brand-surface-2 text-brand-text-main hover:bg-brand-orange-primary hover:text-brand-surface-3 transition-colors"
          >
            Interest Form
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-text-main p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-surface border-b border-brand-surface-3 shadow-2xl md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-4 text-brand-text-main font-body border-b border-brand-surface-2 last:border-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#interest"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 text-center text-sm font-display font-medium px-5 py-4 rounded-full bg-brand-orange-primary text-brand-surface-3"
            >
              Interest Form
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
