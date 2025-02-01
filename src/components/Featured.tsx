import React from 'react';
import { Play } from 'lucide-react';

const featuredProjects = [
  {
    title: "Barbeque Nation",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80"
  },
  {
    title: "Prestige Group",
    category: "Brand Film",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80"
  },
  {
    title: "Marriott Hotels",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80"
  }
];

export default function Featured() {
  return (
    <section id="featured" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12">Featured Projects</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/5]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-4">
                  <Play className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{project.category}</p>
                <h3 className="text-xl font-bold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}