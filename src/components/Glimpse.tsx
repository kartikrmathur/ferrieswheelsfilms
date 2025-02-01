import { useState } from "react";
import { Play, Clock, Film } from "lucide-react";
import "tailwindcss/tailwind.css";

const videos = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80",
    title: "Behind the Scenes",
    duration: "2:30",
    category: "Documentary",
    views: "12.5K",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80",
    title: "Creative Process",
    duration: "3:45",
    category: "Behind the Scenes",
    views: "8.2K",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1585840887185-57cc492587e5?auto=format&fit=crop&q=80",
    title: "Latest Production",
    duration: "1:55",
    category: "Showcase",
    views: "15.7K",
  },
];

export default function Glimpse() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="Glimpse"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            A Glimpse Into Our World
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Step behind the scenes and discover the magic of our creative
            process
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 transform hover:-translate-y-2 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={`w-full h-full object-cover transform transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110 blur-sm" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-50" : "opacity-0"
                  }`}
                />
              </div>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                  {video.category}
                </span>
              </div>

              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <button className="bg-red-500 hover:bg-red-600 text-white rounded-full p-6 transform hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{video.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Film className="w-4 h-4" />
                    <span className="text-sm">{video.views} views</span>
                  </div>
                </div>
              </div>

              <div
                className={`absolute inset-x-0 bottom-0 h-1 bg-red-500 transform origin-left transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}
