import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: "Commercial Films",
    description: "Impactful storytelling for brands",
    image: "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?auto=format&fit=crop&q=80"
  },
  {
    title: "Corporate Videos",
    description: "Professional business narratives",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12">Collections</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[16/9]">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">{collection.title}</h3>
                <p className="text-gray-200 mb-4">{collection.description}</p>
                <button className="group inline-flex items-center space-x-2 text-white">
                  <span>View Collection</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}