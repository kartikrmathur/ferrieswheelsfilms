import React, { useState } from "react";
import { Play, X } from "lucide-react";

const portfolioItems = [
  {
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80",
    title: "Acne Star",
    category: "Commercial",
    videoUrl: "https://player.vimeo.com/video/588407653",
    description: "Innovative skincare campaign",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80",
    title: "Garnier Men's Cream",
    category: "Commercial",
    videoUrl: "https://player.vimeo.com/video/525052249",
    description: "Men's grooming product launch",
  },
  {
    image:
      "https://images.unsplash.com/photo-1585840887185-57cc492587e5?auto=format&fit=crop&q=80",
    title: "Smartplay Baleno",
    category: "Automotive",
    videoUrl: "https://player.vimeo.com/video/678043283",
    description: "Feature showcase campaign",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80",
    title: "Birla Putty",
    category: "Corporate",
    videoUrl: "https://player.vimeo.com/video/525069660",
    description: "Building materials promotion",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80",
    title: "Espresso Campaign",
    category: "Food & Beverage",
    videoUrl: "https://player.vimeo.com/video/738242953",
    description: "Coffee brand storytelling",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?auto=format&fit=crop&q=80",
    title: "Smile Foundation",
    category: "Non-Profit",
    videoUrl: "https://player.vimeo.com/video/518905252",
    description: "Social impact storytelling",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&q=80",
    title: "Happydent",
    category: "Commercial",
    videoUrl: "https://player.vimeo.com/video/518906208",
    description: "Innovative product campaign",
  },
  {
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80",
    title: "GRT Jewellers",
    category: "Luxury",
    videoUrl: "https://player.vimeo.com/video/525096380",
    description: "Premium jewelry showcase",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(portfolioItems.map((item) => item.category))),
  ];
  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of our creative endeavors and successful campaigns
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredItem === index ? "opacity-60" : "opacity-0"
                  }`}
                />

                <button
                  onClick={() => setSelectedVideo(item.videoUrl)}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-red-500 text-white rounded-full p-4 transition-all duration-300 ${
                      hoveredItem === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    }`}
                >
                  <Play className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
                <span className="inline-block mt-2 text-xs bg-red-500 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl mx-auto aspect-video">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={`${selectedVideo}?autoplay=1&title=0&byline=0&portrait=0`}
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
