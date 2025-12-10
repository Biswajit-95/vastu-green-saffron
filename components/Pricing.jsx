// components/Pricing.jsx
import React from "react";
import Button from "./Button";
import { Check, Star, ArrowLeft } from "lucide-react";

export default function Pricing({ onBack }) {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24 text-white relative animate-fade-in-up">
      <div className="absolute inset-0 bg-rhombus opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </button>
        )}

        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded border border-brand-champagne/20 text-brand-champagne text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Investment
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Tiers of Abundance
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto font-sans">
            A harmonized space is a lifelong asset. Select the level of transformation you seek.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Essential */}
          <div className="bg-brand-bg text-brand-dark p-10 border border-brand-bg shadow-lg flex flex-col">
            <h3 className="font-serif text-3xl mb-2 text-brand-dark">
              Essential
            </h3>
            <p className="text-gray-500 mb-8 text-sm h-10">
              Ideal for apartments and single workspaces needing alignment.
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-serif text-brand-dark">$199</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                / audit
              </span>
            </div>

            <div className="space-y-4 mb-10 pt-8 border-t border-gray-200 flex-1">
              {[
                "Digital Floor Plan Analysis",
                "Directional Strength Report",
                "5 Key Elemental Remedies",
                "30-min Video Debrief",
              ].map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-600 text-sm"
                >
                  <Check
                    size={16}
                    className="text-brand-primary shrink-0 mt-0.5"
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </div>

            <Button
              variant="outline"
              fullWidth
              className="!border-gray-300 !text-brand-dark hover:!bg-brand-dark hover:!text-white hover:!border-brand-dark"
            >
              Select Essential
            </Button>
          </div>

          {/* Elite */}
          <div className="relative bg-[#083329] text-white p-10 border border-brand-primary/30 flex flex-col transform md:-translate-y-4 md:shadow-2xl">
            <div className="absolute top-0 right-0 p-4">
              <Star size={16} className="text-brand-champagne fill-current" />
            </div>

            <h3 className="font-serif text-3xl mb-2 text-white">
              Elite Harmony
            </h3>
            <p className="text-gray-400 mb-8 text-sm h-10">
              Comprehensive Astro-Vastu integration for full transformation.
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-serif text-brand-champagne">
                $499
              </span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                / estate
              </span>
            </div>

            <div className="space-y-4 mb-10 pt-8 border-t border-brand-primary/20 flex-1">
              {[
                "Everything in Essential",
                "Astro-Vastu Birth Chart Mapping",
                "Interior Decor Placement Guide",
                "Remedy Kit Mailed to You",
                "90-min Strategy Session",
              ].map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <Check
                    size={16}
                    className="text-brand-primary shrink-0 mt-0.5"
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </div>

            <Button variant="champagne" fullWidth>
              Begin Elite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
