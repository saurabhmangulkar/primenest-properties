import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EnquiryModal from "./components/EnquiryModal";

// Pages
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [globalModalOpen, setGlobalModalOpen] = useState(false);
  const [globalModalContext, setGlobalModalContext] = useState("List Your Property");

  const handleOpenEnquiry = (context = "General Enquiry") => {
    setGlobalModalContext(context);
    setGlobalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-charcoal-900 selection:bg-accent selection:text-white">
      <ScrollToTop />
      
      {/* Dynamic Navbar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Persistent Global Footer */}
      <Footer />

      {/* Global List Property / Enquiry Modal */}
      <EnquiryModal
        isOpen={globalModalOpen}
        onClose={() => setGlobalModalOpen(false)}
        contextTitle={globalModalContext}
      />
    </div>
  );
}