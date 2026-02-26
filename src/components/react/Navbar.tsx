"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "@assets/img/logoBimNormal.png"

const navLinks = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/temarios", label: "Temarios", icon: BookOpen, hasDropdown: true },
  { href: "/tutoriales", label: "Tutoriales", icon: GraduationCap },
  { href: "/about", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const temariosDropdown = [
  { href: "/temarios/curso-revit-basico", label: "Revit Básico" },
  { href: "/temarios/curso-revit-arquitectonico", label: "Revit Arquitectónico" },
  { href: "/temarios/curso-revit-mep", label: "Revit MEP" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="navbar-container">
        <a href="/" className="navbar-logo">
          <img
            src={logo.src}
            alt="BIM Capacitación"
            width={140}
            height={70}
          />
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <div key={link.href} className="nav-item">
              <a href={link.href} className="nav-link">
                {link.icon && <link.icon size={18} />}
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
              {link.hasDropdown && (
                <div className="dropdown">
                  {temariosDropdown.map((item) => (
                    <a key={item.href} href={item.href} className="dropdown-item">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="navbar-actions">
          <ThemeToggle />

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon && <link.icon size={20} />}
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
