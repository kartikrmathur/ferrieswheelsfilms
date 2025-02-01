import React from "react";

const clients = [
  {
    name: "VIVO",
    logo: "assets/client_logo/vivo_logo.png",
  },
  {
    name: "Pepsi",
    logo: "assets/client_logo/pepsi_logo.png",
  },
  {
    name: "Volkswagen",
    logo: "assets/client_logo/VW_Logo.png",
  },
  {
    name: "Colgate",
    logo: "assets/client_logo/Colgate_logo.png",
  },
  {
    name: "Samsung",
    logo: "assets/client_logo/Samsung_logo.png",
  },
  {
    name: "Garnier",
    logo: "assets/client_logo/Garnier_logo.png",
  },
  {
    name: "HDFC Bank",
    logo: "assets/client_logo/hdfc_bank_logo.png",
  },
  {
    name: "P&G",
    logo: "assets/client_logo/p&g_logo.png",
  },
];

export default function Clients() {
  return (
    <section id="Our Client" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6">Our Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've had the privilege of working with some of the world's most
            innovative and respected brands.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                  {client.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
