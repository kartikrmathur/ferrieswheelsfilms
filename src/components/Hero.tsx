import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 hero-clip">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('assets/images/ferrieswheelsfilms_background.png')",
          filter: "brightness(0.3)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-7xl font-bold leading-tight animate-slide-up text-white">
              TELL YOUR
              <br />
              <span className="text-stroke-white">STORY</span>
              <br />
              THROUGH FILM
            </h1>
            <p
              className="text-xl text-gray-300 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Full service advertising agency dedicated to implementing
              traditional and non-traditional advertising solutions to expand
              your brand across a vast range of media.
            </p>
            <button
              className="group flex items-center space-x-2 text-lg font-semibold animate-slide-up text-white"
              style={{ animationDelay: "0.4s" }}
            >
              <span>View Latest Work</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="relative animate-fade-in"></div>
        </div>
      </div>
    </section>
  );
}
