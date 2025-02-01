import React from "react";
import {
  Camera,
  Film,
  Video,
  Palette,
  Megaphone,
  Users,
  Search,
  Newspaper,
  ShoppingBag,
  Store,
  Gift,
  MapPin,
  Globe,
  Pencil,
  BarChart3,
  Building2,
  Clapperboard,
} from "lucide-react";

const services = [
  {
    icon: <Search className="w-10 h-10 text-red-500" />,
    title: "Research",
    description:
      "Collaborate with research agencies for comprehensive qualitative and quantitative research across India.",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-red-500" />,
    title: "Advertising",
    description:
      "Strategic advertising solutions across print, digital, OOH, radio, retail, and film to achieve client objectives.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-red-500" />,
    title: "Strategic Planning",
    description:
      "Deep analysis of consumer behavior and market landscape to develop purposeful brand strategies.",
  },
  {
    icon: <Clapperboard className="w-10 h-10 text-red-500" />,
    title: "Film Production & Photography",
    description:
      "Professional TV and digital content production with in-house and leading external directors.",
  },
  {
    icon: <Store className="w-10 h-10 text-red-500" />,
    title: "Visual Merchandising",
    description:
      "Cutting-edge in-store solutions to elevate the shopping experience.",
  },
  {
    icon: <Newspaper className="w-10 h-10 text-red-500" />,
    title: "Print & Packaging",
    description:
      "Quality-controlled printing solutions including offset and digital printing with competitive pricing.",
  },
  {
    icon: <Film className="w-10 h-10 text-red-500" />,
    title: "Animation",
    description:
      "Full-service animation and production team creating commercials, documentaries, and presentations.",
  },
  {
    icon: <Palette className="w-10 h-10 text-red-500" />,
    title: "Graphic Designing",
    description:
      "Expert design services from logo creation to complete campaign execution.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-red-500" />,
    title: "Media Planning",
    description:
      "Strategic media planning and buying solutions for optimal market presence.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-red-500" />,
    title: "Mall Promotions",
    description:
      "End-to-end mall activity organization and execution for brands.",
  },
  {
    icon: <Gift className="w-10 h-10 text-red-500" />,
    title: "Promotional Items",
    description:
      "Wholesale and retail promotional gift items imported at competitive prices.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-red-500" />,
    title: "Outdoor",
    description:
      "Comprehensive OOH solutions including billboards, digital displays, and vehicle branding.",
  },
  {
    icon: <Pencil className="w-10 h-10 text-red-500" />,
    title: "Publications (PR)",
    description:
      "High-profile media relations for product launches and event coverage.",
  },
  {
    icon: <Globe className="w-10 h-10 text-red-500" />,
    title: "Digital Marketing",
    description:
      "Comprehensive digital solutions including SMM, SEO, SEM, and content production.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions for all your creative and marketing needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black/50 p-8 rounded-2xl hover:bg-black/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
