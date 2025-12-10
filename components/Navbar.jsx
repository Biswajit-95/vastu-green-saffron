"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, User } from "lucide-react";
import Button from "./Button";

export default function Navbar({ currentView, onNavigateHome }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: `#HOME` },
    { name: "Services", href: `#SERVICES` },
    { name: "Consultation", href: `#SectionId.CONTACT` },
    { name: "Products", href: `#SectionId.SERVICES` },
    { name: "Contact", href: `#SectionId.CONTACT` },
  ];

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);

    if (currentView !== "home") {
      onNavigateHome();
      setTimeout(() => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled || currentView === "pricing"
          ? "bg-white/95 backdrop-blur-xl py-3 border-brand-champagne/30 shadow-sm"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick(`#HOME`)}
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo_4.PNG"
            alt="Digital Vastu Logo"
            className="w-12 h-12 object-contain"
          />

          <span className="font-serif text-2xl font-semibold text-brand-dark">
            Digital<span className="text-brand-primary">Vastu</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-xs font-medium uppercase tracking-widest text-brand-dark/70 hover:text-brand-primary relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-saffron group-hover:w-full transition-all"></span>
            </button>
          ))}

          <div className="h-4 w-px bg-brand-champagne mx-2"></div>

          <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-4 py-2 rounded-full hover:bg-brand-primary/10">
            <User size={14} /> Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-brand-champagne shadow-xl overflow-hidden transition-all ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-left font-serif text-xl text-brand-dark border-b border-gray-50 pb-3 hover:text-brand-primary"
            >
              {link.name}
            </button>
          ))}

          <Button variant="outline" fullWidth>
            <User size={16} /> CLIENT LOGIN
          </Button>
        </div>
      </div>
    </nav>
  );
}
