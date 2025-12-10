// components/VideoGallery.jsx
import React from "react";
import { ArrowLeft, Play, Search, Filter } from "lucide-react";

export default function VideoGallery({ onBack }) {
  const allVideos = [
    {
      id: "1",
      title: "The Science of Direction",
      description: "Understanding the magnetic grid.",
      thumbnail:
        "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=600",
      duration: "12:04",
      category: "Fundamentals",
    },
    {
      id: "2",
      title: "5 Wealth Secrets",
      description: "Unlocking the North Zone.",
      thumbnail:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=600",
      duration: "08:45",
      category: "Prosperity",
    },
    {
      id: "3",
      title: "Energy Clearing 101",
      description: "Space purification rituals.",
      thumbnail:
        "https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80&w=600",
      duration: "15:20",
      category: "Remedies",
    },
    {
      id: "4",
      title: "Kitchen Vastu Guide",
      description: "Balancing the fire element.",
      thumbnail:
        "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=600",
      duration: "10:30",
      category: "Interiors",
    },
    {
      id: "5",
      title: "Master Bedroom Peace",
      description: "Enhancing relationships & sleep.",
      thumbnail:
        "https://images.unsplash.com/photo-1616594039964-40891a909639?auto=format&fit=crop&q=80&w=600",
      duration: "14:15",
      category: "Interiors",
    },
    {
      id: "6",
      title: "Entrance Significance",
      description: "Inviting positive opportunities.",
      thumbnail:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
      duration: "09:00",
      category: "Fundamentals",
    },
  ];

  const categories = ["All", "Fundamentals", "Prosperity", "Interiors", "Remedies"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredVideos =
    activeCategory === "All"
      ? allVideos
      : allVideos.filter((v) => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-bg pt-32 pb-20 animate-fade-in-up">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors text-xs uppercase tracking-widest font-bold group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </button>

          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
                Wisdom Hub
              </h1>
              <p className="text-gray-500 font-light max-w-2xl">
                Deep dive into the ancient mechanics of Vastu Shastra. Watch,
                learn, and transform your reality.
              </p>
            </div>

            <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm w-full md:w-auto">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search topics..."
                className="bg-transparent border-none outline-none px-3 text-sm text-brand-dark placeholder-gray-400 w-full"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 mr-4 text-gray-400">
            <Filter size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Filter By:
            </span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                    <Play size={18} className="fill-white text-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-[10px] text-white font-medium">
                  {video.duration}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider bg-brand-primary/5 px-2 py-0.5 rounded-sm">
                  {video.category}
                </span>
              </div>

              <h3 className="font-serif text-xl text-brand-dark mb-2 group-hover:text-brand-primary transition-colors line-clamp-1">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500 font-light line-clamp-2">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
