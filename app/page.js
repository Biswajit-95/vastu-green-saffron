// app/page.jsx
"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HolisticPillars from "../components/HolisticPillars";
import Videos from "../components/Videos";
import VideoGallery from "../components/VideoGallery";

export default function HomePage() {
  const [currentView, setCurrentView] = useState("home"); // "home" | "pricing" | "gallery"

  const handleNavigateToPricing = () => {
    setCurrentView("pricing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToGallery = () => {
    setCurrentView("gallery");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateHome = () => {
    setCurrentView("home");
  };

  // Navbar only needs to know "home" vs others, you already had this mapping
  const navbarView = currentView === "gallery" ? "home" : currentView;

  return (
    <div className="font-sans antialiased text-brand-text selection:bg-brand-champagne/30 selection:text-brand-primary">
      <Navbar currentView={navbarView} onNavigateHome={handleNavigateHome} />

      <main>
        {currentView === "home" && (
          <>
            <Hero />
            <HolisticPillars />
            <Services onServiceClick={handleNavigateToPricing} />
            <Videos onViewAll={handleNavigateToGallery} />
            <Process />
            <Testimonials />
            <Contact />
          </>
        )}

        {currentView === "pricing" && <Pricing onBack={handleNavigateHome} />}

        {currentView === "gallery" && (
          <VideoGallery onBack={handleNavigateHome} />
        )}
      </main>

      <Footer />
    </div>
  );
}
