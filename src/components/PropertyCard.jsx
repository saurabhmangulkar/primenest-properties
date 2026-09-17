import React from "react";
import { Link } from "react-router-dom";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyCard({ property }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-2xl overflow-hidden border border-sand-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand-200">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 left-3 bg-charcoal-900/85 backdrop-blur-sm text-sand-50 text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md">
          {property.propertyType}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal-950 font-serif font-semibold text-base px-3 py-1 rounded-lg shadow-sm">
          {property.price}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs text-charcoal-800/70 mb-1">
          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        <h3 className="font-serif text-lg text-charcoal-900 font-medium group-hover:text-accent transition-colors line-clamp-1 mb-3">
          {property.title}
        </h3>

        <div className="flex items-center gap-4 py-3 border-y border-sand-100 text-xs text-charcoal-800/80 mt-auto">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-accent/90" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-accent/90" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Square className="w-3.5 h-3.5 text-accent/90" />
            <span>{property.area}</span>
          </div>
        </div>

        <div className="mt-4 pt-1">
          <Link
            to={`/properties/${property.id}`}
            className="w-full block text-center py-2.5 rounded-xl border border-sand-200 text-xs font-semibold uppercase tracking-wider text-charcoal-900 group-hover:bg-charcoal-900 group-hover:text-white group-hover:border-charcoal-900 transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}