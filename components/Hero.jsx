// components/Hero.jsx
import React from "react";
import Button from "./Button";
import { Star, Sparkles, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section
      // id={HOME}
      className="relative min-h-screen pt-32 pb-32 flex items-center overflow-hidden bg-brand-bg border-b border-brand-champagne/20"
    >
      {/* Background Geometry (Rhombus) */}
      <div className="absolute inset-0 bg-rhombus opacity-60" />

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-champagne/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left: Copy */}
        <div className="space-y-8 animate-fade-in-up text-center lg:text-left order-2 lg:order-1 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-champagne bg-white/80 backdrop-blur-sm mx-auto lg:mx-0 shadow-sm transition-transform hover:scale-105 cursor-default group">
            <Star
              size={12}
              className="text-brand-primary fill-current group-hover:text-brand-saffron transition-colors"
            />
            <span className="text-[10px] font-bold text-brand-dark uppercase tracking-[0.2em]">
              Est. 2024 • Vedic Sciences
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-brand-dark">
            Sacred Geometry
            <br />
            <span className="italic text-brand-primary relative inline-block">
              For Modern Life
              <svg
                className="absolute w-[110%] h-4 -bottom-2 -left-1 text-brand-champagne opacity-80"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00025 6.99997C25.7509 4.00005 106 -2.49997 198 2.00003"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Align your environment with the cosmos. We blend ancient architectural wisdom with contemporary
            aesthetics to invite prosperity and peace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button
              variant="primary"
              onClick={() =>
                document
                  .getElementById("CONTACT")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40"
            >
              Begin Consultation
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("SERVICES")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Services
            </Button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
          {/* Background Aura */}
          <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-brand-champagne/30 via-white/5 to-transparent opacity-60 rounded-full blur-3xl animate-pulse" />

          {/* Rotating Compass Ring */}
          <div className="absolute w-[550px] h-[550px] opacity-20 animate-[spin_120s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full text-brand-dark overflow-visible">
              <circle
                cx="50"
                cy="50"
                r="49"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                strokeDasharray="1 2"
              />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
              <path
                d="M50 0 L50 10 M50 90 L50 100 M0 50 L10 50 M90 50 L100 50"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <text
                x="50"
                y="5"
                fontSize="3"
                textAnchor="middle"
                fill="currentColor"
                className="font-serif"
              >
                N
              </text>
              <text
                x="50"
                y="98"
                fontSize="3"
                textAnchor="middle"
                fill="currentColor"
                className="font-serif"
              >
                S
              </text>
              <text
                x="97"
                y="51"
                fontSize="3"
                textAnchor="middle"
                fill="currentColor"
                className="font-serif"
              >
                E
              </text>
              <text
                x="3"
                y="51"
                fontSize="3"
                textAnchor="middle"
                fill="currentColor"
                className="font-serif"
              >
                W
              </text>
            </svg>
          </div>

          {/* Main Composition */}
          <div className="relative z-10 w-[380px] h-[500px]">
            <div className="absolute -top-12 -right-8 animate-float delay-100 z-20">
              <div className="w-16 h-16 border border-brand-champagne/60 rotate-12 backdrop-blur-sm bg-white/10" />
            </div>
            <div className="absolute bottom-12 -left-12 animate-float delay-700 z-20">
              <div className="w-20 h-20 border border-brand-primary/30 -rotate-6 rounded-full backdrop-blur-sm bg-white/10 flex items-center justify-center">
                <Compass size={32} className="text-brand-primary opacity-60" />
              </div>
            </div>

            <div className="relative w-full h-full rounded-t-[200px] rounded-b-[20px] overflow-hidden border-[6px] border-white shadow-2xl shadow-brand-champagne/30 group">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
                alt="Vastu Consultant"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />

              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                <svg width="100%" height="100%">
                  <pattern
                    id="geo-grid"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#geo-grid)" />
                </svg>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-brand-saffron font-bold text-xs uppercase tracking-[0.3em] mb-2">
                  Vastu Acharya
                </p>
                <h3 className="font-serif text-3xl md:text-4xl leading-none">
                  Girender Bharti
                </h3>
              </div>
            </div>

            <div className="absolute top-4 left-4 w-full h-full rounded-t-[200px] rounded-b-[20px] border border-brand-champagne/60 -z-10" />
          </div>

          <div className="absolute top-[20%] right-[25%] animate-pulse">
            <Sparkles className="text-brand-saffron w-8 h-8 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
