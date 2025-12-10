// components/HolisticPillars.jsx
"use client";

import React from "react";
import {
  Compass,
  Moon,
  Star,
  Mountain,
  CircleDot,
  Wind,
  Sun,
  Flame,
} from "lucide-react";

const leftPillars = [
  { title: "Vedic Vastu", subtitle: "Directions", icon: <Compass size={18} /> },
  {
    title: "Vedic Astrology",
    subtitle: "Planetary Alignments",
    icon: <Moon size={18} />,
  },
  {
    title: "Astro Vastu",
    subtitle: "Cosmic Synthesis",
    icon: <Star size={18} />,
  },
  {
    title: "Building Biology",
    subtitle: "Environmental Health",
    icon: <Mountain size={18} />,
  },
];

const rightPillars = [
  {
    title: "Numerology",
    subtitle: "Vibrational Numbers",
    icon: <CircleDot size={18} />,
  },
  { title: "Fengshui", subtitle: "Energy Flow", icon: <Wind size={18} /> },
  {
    title: "Luck Principle",
    subtitle: "Fortune Control",
    icon: <Sun size={18} />,
  },
  {
    title: "Miracle Tech",
    subtitle: "Instant Shifts",
    icon: <Flame size={18} />,
  },
];

export default function HolisticPillars() {
  return (
    <section
      id={"PILLARS"}
      className="py-28 bg-white overflow-hidden relative border-b border-gray-100 min-h-[800px] flex items-center"
    >
      {/* BACKGROUND COMPASS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg
          viewBox="0 0 800 800"
          className="w-[95%] h-[95%] max-w-[800px] max-h-[800px] opacity-[0.05] text-brand-dark"
        >
          <circle
            cx="400"
            cy="400"
            r="350"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />

          <line
            x1="400"
            y1="50"
            x2="400"
            y2="750"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="50"
            y1="400"
            x2="750"
            y2="400"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="152"
            y1="152"
            x2="648"
            y2="648"
            stroke="currentColor"
            strokeWidth="0.25"
          />
          <line
            x1="648"
            y1="152"
            x2="152"
            y2="648"
            stroke="currentColor"
            strokeWidth="0.25"
          />

          <text
            x="400"
            y="110"
            fontSize="70"
            fontFamily="Cormorant Garamond, serif"
            textAnchor="middle"
            fill="#047857"
            fontWeight="bold"
          >
            N
          </text>
          <text
            x="400"
            y="710"
            fontSize="70"
            fontFamily="Cormorant Garamond, serif"
            textAnchor="middle"
            fill="#047857"
            fontWeight="bold"
          >
            S
          </text>
          <text
            x="710"
            y="420"
            fontSize="70"
            fontFamily="Cormorant Garamond, serif"
            textAnchor="middle"
            fill="#047857"
            fontWeight="bold"
          >
            E
          </text>
          <text
            x="90"
            y="420"
            fontSize="70"
            fontFamily="Cormorant Garamond, serif"
            textAnchor="middle"
            fill="#047857"
            fontWeight="bold"
          >
            W
          </text>
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-saffron font-bold tracking-[0.2em] uppercase text-[10px] mb-4 inline-block bg-brand-bg px-3 py-1 rounded-full shadow-sm border border-brand-champagne/30">
            Holistic Framework
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">
            The 8-Fold Path
          </h2>
          <p className="mt-4 text-gray-500 font-light">
            Integrating ancient sciences for modern abundance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16">
          {/* LEFT SIDE PILLARS */}
          <div className="flex flex-col gap-10 w-full lg:w-1/3 order-2 lg:order-1">
            {leftPillars.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex items-center justify-end gap-6 hover:-translate-x-2 transition-transform duration-300"
              >
                {/* Beam animation */}
                <div className="hidden lg:block absolute right-[-80px] top-1/2 w-[80px] h-[1px] bg-brand-saffron/10 overflow-hidden">
                  <div className="absolute inset-0 animate-beam-flow" />
                </div>

                <div className="text-right">
                  <h3 className="font-serif text-xl text-brand-dark transition-colors group-hover:text-brand-saffron">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-primary/60 uppercase tracking-wider font-bold group-hover:text-brand-saffron/60">
                    {item.subtitle}
                  </p>
                </div>

                <div
                  className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center 
                    text-brand-dark transition-all duration-300
                    group-hover:bg-brand-saffron group-hover:text-white group-hover:border-brand-saffron relative z-10"
                >
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* CENTER SPINNING GEOMETRY */}
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] shrink-0 flex items-center justify-center my-8 lg:my-0 order-1 lg:order-2">
            {/* Outer soft glow */}
            <div className="absolute inset-3 bg-linear-to-tr from-brand-champagne/30 to-transparent rounded-full blur-2xl animate-spin-slow" />

            <div
              className="relative w-full h-full bg-white/40 backdrop-blur-md rounded-full 
p-10 
shadow-[0_4px_12px_rgba(0,0,0,0.18),0_0_20px_rgba(255,255,255,0.4)]
flex items-center justify-center group
"
            >
              {/* Outer reverse spinning ring */}
              <div className="absolute inset-4 border border-brand-primary/10 rounded-full animate-spin-slow-reverse" />

              {/* Geometric Structure */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-brand-primary opacity-90 drop-shadow-lg 
                  transform transition-transform duration-1000 
                  group-hover:scale-105 group-hover:text-brand-saffron"
              >
                <defs>
                  <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D94F04" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FDBA74" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <path
                  d="M100 20 L180 160 H20 Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M100 180 L20 40 H180 Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M100 50 L160 150 H40 Z"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  fill="none"
                />
                <path
                  d="M100 150 L40 50 H160 Z"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  fill="none"
                />

                <circle
                  cx="100"
                  cy="100"
                  r="15"
                  fill="url(#goldGradient)"
                  className="animate-pulse"
                />
              </svg>

              {/* Center glowing dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-brand-saffron rounded-full shadow-lg shadow-brand-saffron/50 animate-pulse" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE PILLARS */}
          <div className="flex flex-col gap-10 w-full lg:w-1/3 order-3">
            {rightPillars.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex items-center justify-start gap-6 hover:translate-x-2 transition-transform duration-300"
              >
                {/* Beam animation */}
                <div className="hidden lg:block absolute left-[-80px] top-1/2 w-[80px] h-[1px] bg-brand-saffron/10 overflow-hidden">
                  <div className="absolute inset-0 animate-beam-flow-reverse" />
                </div>

                <div
                  className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center 
                    text-brand-dark transition-all duration-300
                    group-hover:bg-brand-saffron group-hover:text-white group-hover:border-brand-saffron relative z-10"
                >
                  {item.icon}
                </div>

                <div className="text-left">
                  <h3 className="font-serif text-xl text-brand-dark transition-colors group-hover:text-brand-saffron">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-primary/60 uppercase tracking-wider font-bold group-hover:text-brand-saffron/60">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
