"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  Mail,
  PhoneIncoming,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    try {
      toast.success("Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-10 bg-base-200 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      {error && (
        <div className="alert alert-error mb-6">
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Form Section */}
        <div className="p-10 bg-base-300 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea textarea-bordered w-full"
                placeholder="Write your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="p-10 bg-base-300 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Let's talk about the Future
          </h2>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <p className="text-lg font-medium">Email: Kutumbak@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 mt-2">
            <PhoneIncoming size={18} />
            <p className="text-lg font-medium">Phone: +91 98989 xxxxx</p>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">We are on</h3>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 flex items-center gap-1"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-pink-700 flex items-center gap-1"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-900 flex items-center gap-1"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
