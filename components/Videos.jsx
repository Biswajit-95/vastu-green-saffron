// components/Videos.jsx
import React from "react";
import { Play, ArrowRight } from "lucide-react";

const videos = [
  {
    id: "1",
    title: "The Science of Direction",
    description: "Understanding the magnetic grid.",
    thumbnail:
      "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=600",
    duration: "12:04",
  },
  {
    id: "2",
    title: "5 Wealth Secrets",
    description: "Unlocking the North Zone.",
    thumbnail:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=600",
    duration: "08:45",
  },
  {
    id: "3",
    title: "Energy Clearing 101",
    description: "Space purification rituals.",
    thumbnail:
      "https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80&w=600",
    duration: "15:20",
  },
];

export default function Videos({ onViewAll }) {
  return (
    <section id={"VIDEOS"} className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block">
              Knowledge Hub
            </span>
            <h2 className="font-serif text-4xl text-brand-dark">Wisdom Series</h2>
          </div>

          {onViewAll && (
            <button
              onClick={onViewAll}
              className="hidden md:flex text-brand-primary text-xs uppercase tracking-widest hover:text-brand-dark items-center gap-2 group"
            >
              View Channel
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4 shadow-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center group-hover:scale-110">
                    <Play size={20} className="fill-white text-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 text-[10px] bg-black/70 text-white px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <h3 className="font-serif text-xl text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">
                {video.title}
              </h3>

              <p className="text-sm text-gray-500">{video.description}</p>
            </div>
          ))}
        </div>

        {onViewAll && (
          <div className="mt-8 text-center md:hidden">
            <button className="text-brand-primary text-xs uppercase tracking-widest">
              View All Videos →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
