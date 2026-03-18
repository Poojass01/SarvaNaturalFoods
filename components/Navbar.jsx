"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon } from "./Icons";
import Image from "next/image";

const navLinks = [
  { label: "Home", section: "top" },
  { label: "About Us", section: "about" },
  // { label: "Heritage", section: "heritage" },
  { label: "Ghee Process", section: "process" },
  // { label: "Gallery", section: "gallery" },
  { label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const targetId = sectionId === "top" ? null : sectionId;
    if (pathname !== "/") {
      window.location.href = targetId ? `/#${targetId}` : "/";
      return;
    }
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#fffaf0]/90 shadow-lg backdrop-blur-xl py-0 transition-all duration-300 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-16 md:h-18 lg:h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-2 sm:gap-3"
          >
            <Image
              src="/logo/logo3.png"
              alt="Sarva Natural Foods"
              width={280}
              height={100}
              priority
              className="h-16 sm:h-16 md:h-18 lg:h-20 w-auto object-contain"
            />

            {/* Brand Name */}
           <span className="text-[#5e4521] font-semibold tracking-wide
  text-lg sm:text-xl md:text-2xl lg:text-3xl">
  Sarva Natural Foods
</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.section)}
                className="text-[#5e4521] hover:text-[#2f1b05] transition duration-200 font-medium relative group"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#5e4521] p-2 rounded-xl bg-white/80 shadow"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-white/90 border border-[#fde4b0] rounded-2xl p-4 shadow-xl animate-fade-in-up">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={`mobile-${link.label}`}
                  onClick={() => scrollToSection(link.section)}
                  className="block w-full text-left px-4 py-3 text-[#5e4521] hover:bg-[#fff6de] rounded-xl transition"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("products")}
                className="w-full bg-gradient-to-r from-[#ffd166] via-[#f4b124] to-[#e08a00] text-[#2f1b05] px-4 py-3 rounded-full font-semibold mt-2"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
