"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Menu, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className=" mx-auto px-6 sm:px-8 lg:px-12 ">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-wide">
            MyStore
          </Link>

          {/* Middle: Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link href="/" className="hover:text-gray-300 transition duration-200">
              Home
            </Link>
            <Link href="/products" className="hover:text-gray-300 transition duration-200">
              Products
            </Link>
            <Link href="/cart" className="hover:text-gray-300 flex items-center transition duration-200">
              Cart 
              <ShoppingCart className="ml-2" />
              {cart.length > 0 && (
                <span className="ml-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>

          {/* Right: Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 py-3 transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          href="/"
          className="block px-6 py-3 hover:bg-gray-700 transition duration-200"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/products"
          className="block px-6 py-3 hover:bg-gray-700 transition duration-200"
          onClick={() => setIsOpen(false)}
        >
          Products
        </Link>
        <Link
          href="/cart"
          className="block px-6 py-3 hover:bg-gray-700 flex items-center transition duration-200"
          onClick={() => setIsOpen(false)}
        >
          Cart 
          <ShoppingCart className="ml-2" />
          {cart.length > 0 && (
            <span className="ml-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}