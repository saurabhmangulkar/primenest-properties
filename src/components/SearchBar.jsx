import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Home, IndianRupee } from "lucide-react";
import { CITIES, PROPERTY_TYPES, BUDGET_RANGES } from "../data/properties";

export default function SearchBar({ initialValues = {}, onSearchSubmit }) {
  const navigate = useNavigate();
  const [city, setCity] = useState(initialValues.city || "");
  const [propertyType, setPropertyType] = useState(initialValues.propertyType || "");
  const [budgetIndex, setBudgetIndex] = useState(initialValues.budgetIndex ?? "");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit({ city, propertyType, budgetIndex });
    } else {
      const params = new URLSearchParams();
      if (city) params.set("city", city);
      if (propertyType) params.set("type", propertyType);
      if (budgetIndex !== "") params.set("budget", budgetIndex);
      navigate(`/properties?${params.toString()}`);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto -mt-10 relative z-20 px-4 sm:px-6">
      <form
        onSubmit={handleSearch}
        className="bg-white rounded-2xl shadow-xl border border-sand-200/80 p-3.5 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 items-center"
      >
        {/* City Filter */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-sand-50/70 border border-sand-200/60 focus-within:border-accent">
          <MapPin className="w-5 h-5 text-accent shrink-0" />
          <div className="w-full text-left">
            <label htmlFor="search-location" className="block text-[10px] uppercase tracking-wider text-charcoal-800/60 font-semibold">Location</label>
            <select
              id="search-location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-medium text-charcoal-900 focus:outline-none cursor-pointer"
            >
              <option value="">All Cities</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Property Type Filter */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-sand-50/70 border border-sand-200/60 focus-within:border-accent">
          <Home className="w-5 h-5 text-accent shrink-0" />
          <div className="w-full text-left">
            <label htmlFor="search-property-type" className="block text-[10px] uppercase tracking-wider text-charcoal-800/60 font-semibold">Property Type</label>
            <select
              id="search-property-type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-medium text-charcoal-900 focus:outline-none cursor-pointer"
            >
              <option value="">All Types</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Budget Filter */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-sand-50/70 border border-sand-200/60 focus-within:border-accent">
          <IndianRupee className="w-5 h-5 text-accent shrink-0" />
          <div className="w-full text-left">
            <label htmlFor="search-budget" className="block text-[10px] uppercase tracking-wider text-charcoal-800/60 font-semibold">Budget Range</label>
            <select
              id="search-budget"
              value={budgetIndex}
              onChange={(e) => setBudgetIndex(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-medium text-charcoal-900 focus:outline-none cursor-pointer"
            >
              <option value="">Any Budget</option>
              {BUDGET_RANGES.slice(1).map((b, idx) => (
                <option key={b.label} value={idx + 1}>{b.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Action */}
        <div>
          <button
            type="submit"
            className="w-full h-full min-h-[46px] bg-charcoal-900 hover:bg-accent text-white font-medium text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>Search Properties</span>
          </button>
        </div>
      </form>
    </div>
  );
}