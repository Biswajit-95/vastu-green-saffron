// components/Process.jsx
import React from "react";
import { Compass, FileSearch, PenTool, Gem } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Mapping",
    desc: "Directional strength analysis using precise grid overlays.",
    icon: <Compass size={24} />,
  },
  {
    id: 2,
    title: "Diagnosis",
    desc: "Identifying energetic blockages (Marmas) in the layout.",
    icon: <FileSearch size={24} />,
  },
  {
    id: 3,
    title: "Correction",
    desc: "Implementation of non-destructive elemental remedies.",
    icon: <PenTool size={24} />,
  },
  {
    id: 4,
    title: "Activation",
    desc: "Final tuning to activate wealth and health sectors.",
    icon: <Gem size={24} />,
  },
];

export default function Process() {
  return (
    <section
      id={"PROCESS"}
      className="py-24 bg-brand-bg relative border-b border-brand-champagne/20"
    >
      <div className="absolute inset-0 bg-rhombus opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-200 pb-10">
          <div className="max-w-2xl">
            <h4 className="text-brand-saffron font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Methodology
            </h4>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">
              The Alignment Protocol
            </h2>
          </div>
          <p className="md:w-1/3 text-gray-500 font-light text-sm mt-4 md:mt-0 text-right md:text-left">
            A systematic four-step approach blending ancient wisdom with architectural science.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-gray-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 group">
                <div className="bg-white p-8 border border-gray-100 transition-all duration-500 hover:border-brand-saffron/40 hover:shadow-xl">
                  <div className="w-12 h-12 bg-brand-dark text-brand-champagne mb-6 flex items-center justify-center rounded-sm shadow-md group-hover:bg-brand-saffron group-hover:text-white transition-colors duration-500">
                    {step.icon}
                  </div>

                  <div className="mt-4">
                    <h3 className="font-serif text-2xl text-brand-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 font-serif text-4xl text-gray-100 font-bold -z-10 group-hover:text-brand-saffron/20 transition-colors duration-500">
                    0{step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
