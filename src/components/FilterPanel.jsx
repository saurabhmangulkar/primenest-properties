import React from "react";
import { Search, RotateCcw } from "lucide-react";
import { CITIES, PROPERTY_TYPES, BUDGET_RANGES } from "../data/properties";

export default function FilterPanel({
  searchTerm,
  setSearchTerm,
  city,
  setCity,
  propertyType,
  setPropertyType,
  budgetIndex,
  setBudgetIndex,
  bedroomCount,
  setBedroomCount,
  sortBy,
  setSortBy,
  onReset,
}) {
  return (
    <div className="bg-white rounded-2xl border border-sand-200/80 p-5 shadow-sm space-y-5">
      <div>
        <label htmlFor="filter-search" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800/70 mb-2">
          Search
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-charcoal-800/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="filter-search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by location or property name..."
            className="w-full pl-10 pr-4 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200/70 focus:outline-none focus:border-accent text-charcoal-900 placeholder:text-charcoal-800/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
        <div>
          <label htmlFor="filter-city" className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-800/60 mb-1">
            City
          </label>
          <select
            id="filter-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-sand-50 border border-sand-200/70 rounded-xl px-3 py-2 text-xs font-medium text-charcoal-900 focus:outline-none focus:border-accent"
          >
            <option value="">All Cities</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-type" className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-800/60 mb-1">
            Property Type
          </label>
          <select
            id="filter-type"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full bg-sand-50 border border-sand-200/70 rounded-xl px-3 py-2 text-xs font-medium text-charcoal-900 focus:outline-none focus:border-accent"
          >
            <option value="">All Types</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-budget" className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-800/60 mb-1">
            Budget
          </label>
          <select
            id="filter-budget"
            value={budgetIndex}
            onChange={(e) => setBudgetIndex(e.target.value)}
            className="w-full bg-sand-50 border border-sand-200/70 rounded-xl px-3 py-2 text-xs font-medium text-charcoal-900 focus:outline-none focus:border-accent"
          >
            <option value="">All Budgets</option>
            {BUDGET_RANGES.slice(1).map((b, idx) => (
              <option key={b.label} value={idx + 1}>{b.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-bedrooms" className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-800/60 mb-1">
            Bedrooms
          </label>
          <select
            id="filter-bedrooms"
            value={bedroomCount}
            onChange={(e) => setBedroomCount(e.target.value)}
            className="w-full bg-sand-50 border border-sand-200/70 rounded-xl px-3 py-2 text-xs font-medium text-charcoal-900 focus:outline-none focus:border-accent"
          >
            <option value="">Any Bedrooms</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>

        <div>
          <label htmlFor="filter-sort" className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-800/60 mb-1">
            Sort By
          </label>
          <select
            id="filter-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-sand-50 border border-sand-200/70 rounded-xl px-3 py-2 text-xs font-medium text-charcoal-900 focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs text-charcoal-800/70 hover:text-charcoal-950 font-medium px-3 py-1.5 rounded-lg hover:bg-sand-100 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear Filters</span>
        </button>
      </div>
    </div>
  );
}