import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-sand-50/90 backdrop-blur-md shadow-sm border-b border-sand-200/80 py-3.5"
          : "bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/20 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2 focus:outline-none">
          <span className={`text-2xl font-serif tracking-tight font-semibold transition-colors ${
            scrolled ? "text-charcoal-900" : "text-white"
          }`}>
            PrimeNest<span className="text-accent font-sans text-xl">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-accent font-semibold"
                    : scrolled
                    ? "text-charcoal-800 hover:text-accent"
                    : "text-white/90 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenEnquiry("List Your Property")}
            className={`text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full border transition-all flex items-center gap-1.5 ${
              scrolled
                ? "border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white"
                : "border-white/70 text-white hover:bg-white hover:text-charcoal-900"
            }`}
          >
            <span>List Your Property</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            scrolled ? "text-charcoal-900" : "text-white"
          }`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-sand-50 border-b border-sand-200 overflow-hidden px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors ${
                      isActive ? "text-accent font-semibold" : "text-charcoal-800"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-sand-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry("List Your Property");
                  }}
                  className="w-full text-center py-3 bg-charcoal-900 text-white rounded-lg text-sm font-medium tracking-wide hover:bg-charcoal-800"
                >
                  List Your Property
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}