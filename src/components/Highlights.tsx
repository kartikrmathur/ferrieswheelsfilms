import React from "react";
import { Award, Users, Film, Star } from "lucide-react";

const stats = [
  {
    icon: <Award className="w-8 h-8" />,
    value: "150+",
    label: "Awards Won",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: <Film className="w-8 h-8" />,
    value: "1000+",
    label: "Projects Completed",
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: "15+",
    label: "Years Experience",
  },
];

export default function Highlights() {
  return (
    <section id="Highlights" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12">Highlights</h2>
        <p className="mb-6">
          At FERRIS WHEELS FILMS we'll do your Product and Brand Development,
          Media Buying and Planning, Graphic Designing, Outdoor, OOH, Direct
          Mail & SMS, off set & Digital Printing and Gift Items with fully back
          up support. As a flexible, affordable mid-sized advertising agency, we
          focus on getting to know your brand on a personal level. Understanding
          you and your business is the only way we know how to provide you with
          the right customized marketing solutions to meet your brand's growth
          objectives.
        </p>
        <p className="mb-6">
          FERRIS WHEELS FILMS has delivered high impact media communication for
          a wide spectrum of corporate and public sector clients. Our portfolio
          boasts leading global brands, multinational corporations, national
          market leaders, international organizations and government sector.
        </p>
        <p className="mb-6">
          FERRIS WHEELS FILMS has a team of high caliber and seasoned
          professionals equipped with an unrivalled depth of industry insight
          and out of the box creativity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
