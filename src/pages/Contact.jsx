import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Our Advisory | PrimeNest Properties";
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "Buying a Home",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">Get In Touch</span>
          <h1 className="text-3xl sm:text-5xl font-serif text-charcoal-900 font-normal mt-2">
            Let's Discuss Your Next Residence.
          </h1>
          <p className="mt-3 text-sm text-charcoal-800/70">
            Have questions about a listing, valuation, or selling your prime property? Our senior consultants are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-sand-200/80 shadow-sm space-y-6">
              <h2 className="font-serif text-xl text-charcoal-900 font-medium">Headquarters</h2>
              
              <div className="space-y-4 text-sm text-charcoal-800/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal-900 block">PrimeNest Experience Centre</span>
                    <span>Baner Road, Pune, Maharashtra 411045</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="font-medium text-charcoal-900 block">Phone Consultation</span>
                    <span>+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="font-medium text-charcoal-900 block">General Enquiries</span>
                    <span>hello@primenest.example</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="font-medium text-charcoal-900 block">Consultation Hours</span>
                    <span>Monday – Saturday: 9:30 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sand-100 rounded-2xl border border-sand-200 p-6 flex flex-col items-center justify-center text-center aspect-[16/9] relative overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-sand-200">
                <MapPin className="w-6 h-6 text-accent mx-auto mb-1" />
                <span className="text-xs font-semibold text-charcoal-900 uppercase tracking-wider block">Baner Road, Pune</span>
                <span className="text-[11px] text-charcoal-800/60">Interactive Map Preview</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-sand-200/80 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-charcoal-900 mb-2">
                    Enquiry Successfully Sent
                  </h3>
                  <p className="text-sm text-charcoal-800/70 max-w-sm mx-auto leading-relaxed">
                    Thank you! Our senior property advisor will reach out to you within 4 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-charcoal-900 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-6">Send an Inquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-medium text-charcoal-800 mb-1">Full Name</label>
                        <input
                          id="contact-name"
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. S. Joshi"
                          className="w-full px-3.5 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200 focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-medium text-charcoal-800 mb-1">Phone Number</label>
                        <input
                          id="contact-phone"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200 focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-medium text-charcoal-800 mb-1">Email Address</label>
                        <input
                          id="contact-email"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full px-3.5 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200 focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-req" className="block text-xs font-medium text-charcoal-800 mb-1">Requirement</label>
                        <select
                          id="contact-req"
                          value={formData.requirement}
                          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200 focus:outline-none focus:border-accent"
                        >
                          <option value="Buying a Home">Buying a Home</option>
                          <option value="Listing a Property">Listing a Property</option>
                          <option value="Commercial Suite">Commercial Suite</option>
                          <option value="General Advisory">General Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-medium text-charcoal-800 mb-1">Message</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please mention your preferred location, budget, and timeline..."
                        className="w-full px-3.5 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200 focus:outline-none focus:border-accent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-charcoal-900 hover:bg-accent text-white font-medium text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Enquiry</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}