import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROPERTIES_DATA } from "../data/properties";
import PropertyGallery from "../components/PropertyGallery";
import EnquiryModal from "../components/EnquiryModal";
import { 
  Bed, Bath, Square, MapPin, CheckCircle, ShieldCheck, 
  Calendar, Phone, Mail, ArrowLeft, Share2 
} from "lucide-react";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = PROPERTIES_DATA.find((item) => item.id === id);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState("");

  useEffect(() => {
    if (property) {
      document.title = `${property.title} | PrimeNest Properties`;
    }
  }, [property]);

  if (!property) {
    return (
      <div className="pt-36 pb-24 max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif mb-3">Property Not Found</h2>
        <p className="text-sm text-charcoal-800/70 mb-6">
          The requested listing may have been reserved or is unavailable.
        </p>
        <Link to="/properties" className="px-6 py-2.5 bg-charcoal-900 text-white text-xs font-semibold rounded-xl uppercase tracking-wider">
          Browse All Properties
        </Link>
      </div>
    );
  }

  const handleOpenModal = (type) => {
    setModalContext(`${type} - ${property.title}`);
    setModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-800/70 hover:text-charcoal-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all properties</span>
          </Link>

          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert("Property URL copied to clipboard!");
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs text-charcoal-800/70 hover:text-charcoal-900 font-medium px-3 py-1.5 rounded-lg border border-sand-200 bg-white"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>

        <PropertyGallery images={property.gallery} title={property.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sand-200 pb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                    {property.propertyType} &bull; {property.city}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-serif text-charcoal-900 font-normal mt-1">
                    {property.title}
                  </h1>
                  <p className="flex items-center gap-1.5 text-sm text-charcoal-800/70 mt-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{property.location}</span>
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="block text-xs uppercase tracking-wider text-charcoal-800/50">Price</span>
                  <span className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal-950">
                    {property.price}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 py-6 border-b border-sand-200 text-center sm:text-left">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center text-accent">
                      <Bed className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-charcoal-800/60 font-semibold">Bedrooms</span>
                      <span className="text-sm font-semibold text-charcoal-900">{property.bedrooms} BHK</span>
                    </div>
                  </div>
                )}

                {property.bathrooms > 0 && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center text-accent">
                      <Bath className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-charcoal-800/60 font-semibold">Baths</span>
                      <span className="text-sm font-semibold text-charcoal-900">{property.bathrooms} Luxury Baths</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center text-accent">
                    <Square className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-charcoal-800/60 font-semibold">Carpet Area</span>
                    <span className="text-sm font-semibold text-charcoal-900">{property.area}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-medium text-charcoal-900 mb-3">About The Residence</h2>
              <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {property.amenities && (
              <div>
                <h2 className="text-xl font-serif font-medium text-charcoal-900 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-sand-50 border border-sand-200/60 text-xs sm:text-sm text-charcoal-900">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {property.highlights && (
              <div>
                <h2 className="text-xl font-serif font-medium text-charcoal-900 mb-4">Property Highlights</h2>
                <div className="space-y-2.5">
                  {property.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-charcoal-800/80">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-2xl border border-sand-200 p-6 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-accent font-semibold">Immediate Assistance</span>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mt-1">Direct Consultation</h3>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleOpenModal("Schedule a Visit")}
                  className="w-full py-3.5 bg-charcoal-900 hover:bg-accent text-white font-medium text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Visit</span>
                </button>

                <button
                  onClick={() => handleOpenModal("Enquire Now")}
                  className="w-full py-3.5 bg-sand-100 hover:bg-sand-200 text-charcoal-900 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Enquire Now</span>
                </button>
              </div>

              {property.agent && (
                <div className="pt-6 border-t border-sand-200">
                  <span className="text-[11px] uppercase tracking-wider text-charcoal-800/50 font-semibold">Dedicated Advisor</span>
                  <div className="flex items-center gap-3.5 mt-3">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-12 h-12 rounded-full object-cover border border-sand-200"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-charcoal-900">{property.agent.name}</h4>
                      <p className="text-xs text-charcoal-800/60">{property.agent.title}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-xs text-charcoal-800/80">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-accent" />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-accent" />
                      <span className="truncate">{property.agent.email}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        contextTitle={modalContext}
      />
    </div>
  );
}