import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">Travel & Tour</h3>
            <p>Explore the world with us.</p>
          </div>
          
          {/* Links */}
          <div className="space-y-2 text-center sm:text-left">
            <a href="#" className="block hover:text-gray-400">Destinations</a>
            <a href="#" className="block hover:text-gray-400">Tours</a>
            <a href="#" className="block hover:text-gray-400">Contact</a>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-2 text-center sm:text-right">
            <p>Phone: +123 456 789</p>
            <p>Email: info@travelandtours.com</p>
          </div>
          
          {/* Social Media Icons */}
    <div className="flex">
        <ul className="flex gap-4">
        <FaFacebookSquare
        size={20}/>
        <Link href="https://github.com/AreebaNafees16?tab=repositories">
        <FaGithubSquare 
        size={20}
        />
        </Link>
        <Link href="https://www.linkedin.com/in/areeba-muhammad-nafees-8561b12bb/">
        <FaLinkedin 
        size={20}/>
        </Link>
        <FaInstagramSquare 
        size={20}/>
        </ul>
    </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Travel & Tour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

