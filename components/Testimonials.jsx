// components/Testimonials.jsx
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    name: "Ananya Gupta",
    role: "Architect",
    rating: 5,
    content:
      "The aesthetic remedies are genius. They blend perfectly with my modern decor. My studio feels lighter, and client footfall has increased significantly.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "t2",
    name: "Robert Chen",
    role: "Founder, TechStart",
    rating: 5,
    content:
      "I didn't believe in energy flows until Digital Vastu corrected my office layout. The team conflict dropped to zero, and we closed our Series A funding.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "t3",
    name: "Priya Sharma",
    role: "Wellness Coach",
    rating: 5,
    content:
      "A divine experience. The team is professional, and their insights into Astro-Vastu are incredibly accurate. Highly recommended for peace of mind.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-bg border-t border-brand-champagne/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">
            Client Reflections
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-10 border border-gray-100 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary/0 group-hover:bg-brand-primary transition-all duration-300" />

              <div className="mb-6 text-brand-champagne/50">
                <Quote size={32} className="transform rotate-180" />
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed font-light italic font-serif text-lg">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="font-bold text-brand-dark font-sans text-sm tracking-wide uppercase">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
