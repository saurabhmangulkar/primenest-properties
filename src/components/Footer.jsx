import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-sand-100 pt-16 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-charcoal-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-serif tracking-tight font-semibold text-white">
              PrimeNest<span className="text-accent">.</span>
            </span>
            <p className="mt-4 text-sm text-sand-200/70 max-w-sm leading-relaxed">
              PrimeNest Properties is a modern residential advisory firm helping clients discover high-caliber homes and prime investment spaces across India.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://saurabh-mangulkar.vercel.app" 
                target="_blank" 
                rel="noreferrer"
                aria-label="SM Technologies Portfolio" 
                className="w-9 h-9 rounded-full border border-sand-200/20 flex items-center justify-center text-sand-200/70 hover:text-white hover:border-white transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn" 
                className="w-9 h-9 rounded-full border border-sand-200/20 flex items-center justify-center text-sand-200/70 hover:text-white hover:border-white transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter" 
                className="w-9 h-9 rounded-full border border-sand-200/20 flex items-center justify-center text-sand-200/70 hover:text-white hover:border-white transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-sand-200/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/properties" className="text-sand-200/70 hover:text-white transition-colors">Properties</Link></li>
              <li><Link to="/about" className="text-sand-200/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sand-200/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/properties?type=Apartment" className="text-sand-200/70 hover:text-white transition-colors">Apartments</Link></li>
              <li><Link to="/properties?type=Villa" className="text-sand-200/70 hover:text-white transition-colors">Villas</Link></li>
              <li><Link to="/properties?type=Plot" className="text-sand-200/70 hover:text-white transition-colors">Residential Plots</Link></li>
              <li><Link to="/properties?type=Commercial" className="text-sand-200/70 hover:text-white transition-colors">Commercial Suites</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">Prime Headquarters</h4>
            <div className="space-y-3 text-sm text-sand-200/70">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                <span>Baner Road, Pune, Maharashtra</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 89757 17380</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>Saurabhmangulkar@rediffmail.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Agency Attribution */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sand-200/50">
          <p>© 2026 PrimeNest Properties. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>
              Website Demo by{" "}
              <a 
                href="https://saurabh-mangulkar.vercel.app" 
                target="_blank" 
                rel="noreferrer"
                className="text-sand-100 font-semibold text-accent hover:underline transition-colors"
              >
                SM Technologies
              </a>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Websites That Help Your Business Grow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}