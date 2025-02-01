import React from "react";
import { Camera, Film, Video } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl font-bold">Who We Are</h2>
            <p className="text-xl text-gray-600">
              We are a passionate team of filmmakers, storytellers, and creative
              minds dedicated to bringing your vision to life through the power
              of visual storytelling.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Camera className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Creative Excellence</h3>
                  <p className="text-gray-600">
                    Pushing boundaries with innovative storytelling and
                    cutting-edge production techniques.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Film className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Industry Experience</h3>
                  <p className="text-gray-600">
                    Over 15 years of experience creating compelling content for
                    global brands.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Video className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Quality Production</h3>
                  <p className="text-gray-600">
                    State-of-the-art equipment and post-production facilities
                    for superior results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              /* TODO:- Add a photo of Ravi Mama Along with fw family*/
              src="\team\ferries_wheels_films_team.png"
              alt="Team at work"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold text-red-500">15+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
