import Image from "next/image";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/hero2.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-white mt-4 text-lg md:text-xl">
            We’re here to assist you with your travel needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-500">Get In Touch</h2>
            <p className="text-gray-600 mt-4">
              Have questions or want to plan your next adventure? We’d love to hear from you!
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Enter the subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Write your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Information</h2>
          <p className="mt-4 text-lg">
            Reach out to us via the following channels for immediate assistance:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-4xl mb-4 text-black" />
              <p className="font-bold">Email</p>
              <p>info@travelandtours.com</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPhoneAlt className="text-4xl mb-4 text-black" />
              <p className="font-bold">Phone</p>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-4xl mb-4 text-black" />
              <p className="font-bold">Address</p>
              <p>123 Main Street, Travel City, USA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
