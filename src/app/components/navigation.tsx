"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scrolling and update navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-2 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo2.png" // Replace with your logo file path
            alt="Travel Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span
            className={`font-bold f text-xl ml-1 ${
              isScrolled ? "text-teal-500" : "text-white"
            }`}
          >
            Travel
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6">
          {navItems.map((nav) => (
            <li key={nav.title}>
              <Link
                href={nav.href}
                className={`${
                  isScrolled ? "text-teal-500" : "text-white"
                } hover:text-teal-400 hover:underline underline-offset-4`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Login Button */}
        <button
          className={`hidden lg:block px-6 py-2 rounded-md ${
            isScrolled
              ? "bg-teal-500 text-white hover:bg-teal-600"
              : "bg-transparent border border-white text-white hover:bg-white hover:text-teal-500"
          }`}
        >
          Login
        </button>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:outline-none ${
              isScrolled ? "text-teal-500" : "text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-teal-300 p-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((nav) => (
              <li key={nav.title}>
                <Link
                  href={nav.href}
                  className="text-white hover:text-teal-500 hover:underline underline-offset-4 block"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {nav.title}
                </Link>
              </li>
            ))}

            {/* Mobile Login Button */}
            <li>
              <button className="w-full mt-4 px-6 py-2 bg-white text-teal-500 font-bold rounded-md hover:bg-gray-100">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
