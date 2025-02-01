import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        "service_u65dnwo", // Replace with your actual service ID
        "template_uaadlyx", // Replace with your actual template ID
        formData,
        "uhI9Odz8XhQAZvNUD" // Replace with your actual user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-6xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to bring your story to life? We'd love to hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-red-50 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call Us</p>
                  <p className="font-bold">+91 97692 49334</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-50 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Us</p>
                  <p className="font-bold">naveen@ferriswheelsfilms.in</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-50 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Visit Us</p>
                  <p className="font-bold">
                    Naveen Harita Mathur Flat no. 703, B Wing, Pranay Leela
                    Co-operative Housing Society Ltd., Piramal Nagar Estate,
                    Goregaon (West) Mumbai-400104.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
