import React, { useState, useEffect } from "react";
import { Film, Menu, X, Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Film className="w-8 h-8" />
              <a href="Hero" className="text-xl font-bold">
                Ferris Wheels Films
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#Highlights" className="hover-slide-text font-medium">
                Highlights
              </a>
              <a href="#services" className="hover-slide-text font-medium">
                Services
              </a>
              <a href="#about" className="hover-slide-text font-medium">
                About
              </a>
              <a href="#Our Client" className="hover-slide-text font-medium">
                Clients
              </a>
              <a href="#contact" className="hover-slide-text font-medium">
                Contact
              </a>
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <div className="p-4 space-y-6">
            <a
              href="#Highlights"
              className="block text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Highlights
            </a>
            <a
              href="#services"
              className="block text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#Our Client"
              className="block text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Clients
            </a>
            <a
              href="#contact"
              className="block text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
