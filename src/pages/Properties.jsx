import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterPanel from "../components/FilterPanel";
import PropertyGrid from "../components/PropertyGrid";
import CTASection from "../components/CTASection";
import { PROPERTIES_DATA, BUDGET_RANGES } from "../data/properties";
import { Home, Sparkles } from "lucide-react";

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCity = searchParams.get("city") || "";
  const initialType = searchParams.get("type") || "";
  const initialBudget = searchParams.get("budget") || "";

  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState(initialCity);
  const [propertyType, setPropertyType] = useState(initialType);
  const [budgetIndex, setBudgetIndex] = useState(initialBudget);
  const [bedroomCount, setBedroomCount] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    document.title = "Properties Collection | PrimeNest Properties";
  }, []);

  useEffect(() => {
    if (searchParams.get("city")) setCity(searchParams.get("city"));
    if (searchParams.get("type")) setPropertyType(searchParams.get("type"));
    if (searchParams.get("budget")) setBudgetIndex(searchParams.get("budget"));
  }, [searchParams]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setCity("");
    setPropertyType("");
    setBudgetIndex("");
    setBedroomCount("");
    setSortBy("featured");
    setSearchParams({});
  };

  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((item) => {
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation) return false;
      }

      if (city && item.city !== city) return false;
      if (propertyType && item.propertyType !== propertyType) return false;

      if (bedroomCount) {
        const count = parseInt(bedroomCount, 10);
        if (count === 4 && item.bedrooms < 4) return false;
        if (count !== 4 && item.bedrooms !== count) return false;
      }

      if (budgetIndex !== "") {
        const selectedRange = BUDGET_RANGES[parseInt(budgetIndex, 10)];
        if (selectedRange) {
          if (item.priceNumeric < selectedRange.min || item.priceNumeric > selectedRange.max) {
            return false;
          }
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.priceNumeric - b.priceNumeric;
      if (sortBy === "price-desc") return b.priceNumeric - a.priceNumeric;
      return (b.featured === true ? 1 : 0) - (a.featured === true ? 1 : 0);
    });
  }, [searchTerm, city, propertyType, budgetIndex, bedroomCount, sortBy]);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">Available Residences</span>
          <h1 className="text-3xl sm:text-5xl font-serif text-charcoal-900 font-normal mt-2">
            Explore Properties
          </h1>
          <p className="mt-2 text-sm text-charcoal-800/70">
            Browse through our portfolio of hand-selected apartments, signature villas, and commercial real estate.
          </p>
        </div>

        <FilterPanel
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          city={city}
          setCity={setCity}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          budgetIndex={budgetIndex}
          setBudgetIndex={setBudgetIndex}
          bedroomCount={bedroomCount}
          setBedroomCount={setBedroomCount}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onReset={handleResetFilters}
        />

        <div className="flex items-center justify-between mt-8 mb-6">
          <div className="text-sm font-medium text-charcoal-900">
            {filteredProperties.length === 1 ? "1 property found" : `${filteredProperties.length} properties found`}
          </div>
          {(city || propertyType || budgetIndex || bedroomCount || searchTerm) && (
            <div className="flex items-center gap-1 text-xs text-accent font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Active filters applied</span>
            </div>
          )}
        </div>

        {filteredProperties.length > 0 ? (
          <PropertyGrid properties={filteredProperties} />
        ) : (
          <div className="bg-white rounded-2xl border border-sand-200 p-12 text-center max-w-lg mx-auto my-12 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-sand-100 flex items-center justify-center mx-auto text-charcoal-800/50 mb-4">
              <Home className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-normal text-charcoal-900 mb-2">
              No matching properties
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/60 mb-6">
              We couldn't find any residences matching your exact criteria. Try broadening your budget range or clearing some filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-charcoal-900 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      <div className="mt-20">
        <CTASection />
      </div>
    </div>
  );
}