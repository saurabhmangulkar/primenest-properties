import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyGrid from "../components/PropertyGrid";
import CTASection from "../components/CTASection";
import { PROPERTIES_DATA } from "../data/properties";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = "PrimeNest Properties | Find a Place You'll Love to Call Home";
  }, []);

  const featuredProperties = PROPERTIES_DATA.filter((p) => p.featured).slice(0, 6);

  return (
    <div>
      <Hero onListClick={() => onOpenEnquiry("List Your Property")} />
      <SearchBar />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 font-normal mt-2">
              Featured Properties
            </h2>
            <p className="mt-2 text-sm text-charcoal-800/70">
              Handpicked properties worth exploring.
            </p>
          </div>
          <Link
            to="/properties"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 hover:text-accent transition-colors"
          >
            <span>View all inventory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <PropertyGrid properties={featuredProperties} />
      </section>

      <section className="bg-sand-100/60 py-20 border-t border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">The PrimeNest Distinction</span>
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal mt-3 leading-snug">
              Every detail verified. <br />Every residence distinguished.
            </h3>
            <p className="mt-4 text-sm text-charcoal-800/75 leading-relaxed">
              We curate only top-tier residences that pass stringent title verifications, architectural quality audits, and connectivity indexes. Our buyers avoid the typical friction of Indian property acquisitions.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal-900">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span>RERA-verified documentation and title diligence</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span>Zero buyer brokerage fees on developer direct units</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span>End-to-end registry, mortgage, and legal advisory support</span>
              </li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury architectural interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}