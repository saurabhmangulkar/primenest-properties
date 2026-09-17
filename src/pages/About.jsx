import React, { useEffect } from "react";
import CTASection from "../components/CTASection";
import { Compass, Shield, Users } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | PrimeNest Properties";
  }, []);

  const stats = [
    { label: "Properties", value: "500+" },
    { label: "Cities", value: "25+" },
    { label: "Happy Clients", value: "1,200+" },
    { label: "Years Experience", value: "10+" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Uncompromising Integrity",
      text: "Every property we represent undergoes exhaustive legal verification to guarantee freehold clarity."
    },
    {
      icon: Compass,
      title: "Curation, Not Aggregation",
      text: "We deliberately decline listings that do not meet our aesthetic, construction, and lifestyle criteria."
    },
    {
      icon: Users,
      title: "Discreet Representation",
      text: "We act as personal advisors with absolute discretion, ensuring a smooth and bespoke acquisition journey."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <span className="text-xs uppercase tracking-widest text-accent font-semibold">About PrimeNest</span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-charcoal-900 font-normal mt-3 leading-tight">
          Helping People Find More <br className="hidden sm:inline" />
          <span className="italic">Than Just a Property.</span>
        </h1>
        <p className="mt-6 text-sm sm:text-base text-charcoal-800/75 max-w-2xl mx-auto leading-relaxed">
          Founded on the philosophy that a home is the foundational canvas of human experience, PrimeNest transforms how discerning buyers and families discover spaces in India.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80"
            alt="Prime architecture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <section className="bg-sand-100 py-16 border-y border-sand-200 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider text-charcoal-800/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Story</span>
            <h2 className="font-serif text-3xl text-charcoal-900 font-normal mt-2">
              From boutique advisory to a pan-India platform.
            </h2>
            <p className="mt-4 text-sm text-charcoal-800/80 leading-relaxed">
              PrimeNest began a decade ago with a simple conviction: luxury property transactions shouldn't feel transactional. What began as an intimate advisory for historic bungalows in Maharashtra has grown into a verified platform bridging modern architectural residences and conscious buyers.
            </p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Mission</span>
            <h2 className="font-serif text-3xl text-charcoal-900 font-normal mt-2">
              To inspire elevated living across generations.
            </h2>
            <p className="mt-4 text-sm text-charcoal-800/80 leading-relaxed">
              We connect visionary architects, conscientious developers, and clients who seek sanctuary, permanence, and enduring investment value.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Foundation</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal mt-2">
            The Principles That Guide Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-sand-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sand-100 flex items-center justify-center text-accent mb-6">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 font-medium mb-2">{v.title}</h3>
              <p className="text-xs sm:text-sm text-charcoal-800/70 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}