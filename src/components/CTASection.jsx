import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-sand-100 py-20 border-y border-sand-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-widest text-accent font-semibold">
          Begin Your Journey
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal-900 font-normal mt-3 tracking-tight">
          Ready to Find Your Next Home?
        </h2>
        <p className="mt-4 text-sm sm:text-base text-charcoal-800/70 max-w-xl mx-auto leading-relaxed">
          Tell us what you're looking for and we'll help you take the next step. Our advisors ensure every detail matches your aspirations.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/properties"
            className="w-full sm:w-auto px-8 py-3.5 bg-charcoal-900 text-white rounded-full font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-accent transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-charcoal-900 text-charcoal-900 rounded-full font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-charcoal-900 hover:text-white transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}