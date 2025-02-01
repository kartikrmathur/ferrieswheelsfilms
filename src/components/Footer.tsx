import React from "react";
import { Film, Instagram, Youtube, Facebook, Phone, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Film className="w-8 h-8" />
              <span className="text-xl font-bold">Ferris Wheels</span>
            </div>
            <p className="text-gray-400">
              Creating compelling visual content that moves people and drives
              results.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <div className="space-y-2">
              <a
                href="#featured"
                className="block text-gray-400 hover:text-white"
              >
                Featured
              </a>
              <a
                href="#collections"
                className="block text-gray-400 hover:text-white"
              >
                Collections
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white">
                About
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Mumbai, Maharashtra, India</p>
              <p>naveen@ferriswheelsfilms.in</p>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <p>+91 97692 49334</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://vimeo.com/user13885731"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Video className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/ferriswheelsfilms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ferriswheelsfilmsindia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@Ferriswheelsfil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Ferris Wheels Films. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
