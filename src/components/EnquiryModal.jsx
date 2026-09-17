import React, { useState } from "react";
import { X, CheckCircle2, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryModal({ isOpen, onClose, contextTitle = "Property Enquiry" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: `Hello, I am interested in ${contextTitle}. Please share brochure and visitation dates.`
  });

  const [status, setStatus] = useState("idle");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const handleResetAndClose = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 z-10 border border-sand-200 overflow-hidden"
        >
          <button
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-1 rounded-full text-charcoal-800/60 hover:text-charcoal-900 hover:bg-sand-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-charcoal-900 mb-2">
                Thank You!
              </h3>
              <p className="text-sm text-charcoal-800/70 max-w-sm mx-auto leading-relaxed">
                Our property consultant will contact you shortly regarding <strong className="text-charcoal-900">{contextTitle}</strong>.
              </p>
              <button
                onClick={handleResetAndClose}
                className="mt-6 px-6 py-2.5 bg-charcoal-900 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                  Personalized Advisory
                </span>
                <h3 className="font-serif text-2xl text-charcoal-900 font-normal mt-1">
                  Enquire: {contextTitle}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-charcoal-800 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aditya Kulkarni"
                    className="w-full px-3.5 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200 focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-charcoal-800 mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-charcoal-800 mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aditya@example.com"
                      className="w-full px-3.5 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200 focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal-800 mb-1">Message / Requirements</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-sand-50 rounded-xl text-sm border border-sand-200 focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3 bg-charcoal-900 hover:bg-accent text-white font-medium text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mt-2 disabled:opacity-75"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}