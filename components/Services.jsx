// components/Services.jsx
import React from "react";
import {
  Globe,
  MapPin,
  Download,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: "1",
    title: "Virtual Analysis",
    description:
      "Expert remote diagnosis using satellite data and floor plans. Ideal for international clients.",
    icon: <Globe size={24} />,
    tag: "Global",
  },
  {
    id: "2",
    title: "On-Site Curation",
    description:
      "A master consultant physically aligns your space, conducting soil tests and elemental balancing.",
    icon: <MapPin size={24} />,
    tag: "Premium",
  },
  {
    id: "3",
    title: "Digital Remedies",
    description:
      "Access our library of high-resonance Yantras, architectural templates, and frequency audio.",
    icon: <Download size={24} />,
  },
  {
    id: "4",
    title: "Corporate Harmony",
    description:
      "Optimizing flow in large-scale commercial environments to enhance productivity and wealth.",
    icon: <Building2 size={24} />,
  },
];

export default function Services({ onServiceClick }) {
  return (
    <section
      id={"SERVICES"}
      className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-b border-brand-champagne/20"
    >
      <div className="absolute inset-0 bg-rhombus opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 border border-brand-primary/20 px-3 py-1 rounded-full bg-white/50">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
            Holistic Offerings
          </h2>
          <p className="text-gray-500 font-light leading-relaxed font-sans">
            Precision-based spiritual engineering for the modern era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={onServiceClick}
              className="group bg-white p-8 border border-gray-100 rounded-sm transition-all duration-500 hover:shadow-xl hover:border-brand-saffron/30 relative overflow-hidden flex flex-col h-full cursor-pointer"
            >
              <div className="relative z-10 flex-1 flex flex-col items-start">
                <div className="flex justify-between items-start w-full mb-6">
                  <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-saffron group-hover:text-white transition-all duration-500 border border-brand-primary/10 group-hover:border-brand-saffron/20">
                    {service.icon}
                  </div>
                  {service.tag && (
                    <span className="px-2 py-1 bg-brand-champagne/30 text-brand-dark text-[10px] font-bold uppercase tracking-wider rounded-sm group-hover:bg-brand-saffron/10 group-hover:text-brand-saffron transition-colors">
                      {service.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 font-light border-t border-gray-50 pt-4 w-full">
                  {service.description}
                </p>

                <button className="flex items-center text-[10px] font-bold text-brand-dark uppercase tracking-[0.2em] group-hover:text-brand-saffron transition-colors mt-auto border-b border-transparent group-hover:border-brand-saffron pb-1">
                  View Investment
                  <ArrowUpRight size={14} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
