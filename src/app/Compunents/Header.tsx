"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <span className="text-yellow-300">My</span>Shop
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-yellow-300 transition">
            Home
          </a>
          <a href="/Products" className="hover:text-yellow-300 transition">
            Products
          </a>
          <a href="/about" className="hover:text-yellow-300 transition">
            About
          </a>
          <a href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-yellow-300 transition"
            >
              Home
            </a>
            <a
              href="/Products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-yellow-300 transition"
            >
              Products
            </a>
            <a
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-yellow-300 transition"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-yellow-300 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
