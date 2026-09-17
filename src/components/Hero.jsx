import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Compass } from "lucide-react";

export default function Hero({ onListClick }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal-950 overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center filter brightness-[0.55] scale-105 transform duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85')",
        }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/70" />
      <div className="absolute inset-0 z-1 bg-charcoal-950/20 backdrop-contrast-[1.05]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sand-100 text-xs tracking-wider uppercase mb-6 font-medium"
        >
          <Compass className="w-3.5 h-3.5 text-accent" />
          <span>Curated Indian Real Estate</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-[1.15] font-normal"
        >
          Find a Place You'll <br className="hidden sm:inline" />
          <span className="italic font-normal">Love to Call Home.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-sand-100/80 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Discover thoughtfully selected homes and properties in some of India's most desirable locations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/properties"
            className="w-full sm:w-auto px-8 py-3.5 bg-sand-50 text-charcoal-900 rounded-full font-medium text-sm tracking-wide shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={onListClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium text-sm tracking-wide border border-white/30 backdrop-blur-sm transition-all duration-200"
          >
            List Your Property
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-white/15 max-w-lg mx-auto flex items-center justify-center gap-3 text-xs sm:text-sm text-sand-100/70 font-light"
        >
          <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
          <span>500+ Properties &bull; 25+ Cities &bull; Trusted by Homebuyers</span>
        </motion.div>
      </div>
    </section>
  );
}