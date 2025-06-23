'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
        {/* Desktop: Logo left, links right. Mobile: Logo centered, hamburger right */}
        {/* Hamburger (mobile only) */}
        <div className="flex-1 flex md:hidden">
          <div className="w-1/3"></div>
          <div className="w-1/3 flex justify-center">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg font-serif"
            >
              Artistly
            </Link>
          </div>
          <div className="w-1/3 flex justify-end">
            <button
              className="text-2xl text-gray-700 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex w-full items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg font-serif"
          >
            Artistly
          </Link>
          <div className="flex space-x-8 items-center">
            <Link href="/artists" className="text-gray-700 font-medium hover:text-indigo-600 transition">Artists</Link>
            <Link href="/onboard" className="text-gray-700 font-medium hover:text-indigo-600 transition">Onboard</Link>
            <Link href="/dashboard" className="text-gray-700 font-medium hover:text-indigo-600 transition">Dashboard</Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg px-6 py-4 space-y-4 absolute top-full left-0 w-full z-40 animate-fade-in">
          <Link href="/artists" className="block text-gray-800 font-semibold hover:text-indigo-600 transition" onClick={() => setOpen(false)}>Artists</Link>
          <Link href="/onboard" className="block text-gray-800 font-semibold hover:text-indigo-600 transition" onClick={() => setOpen(false)}>Onboard</Link>
          <Link href="/dashboard" className="block text-gray-800 font-semibold hover:text-indigo-600 transition" onClick={() => setOpen(false)}>Dashboard</Link>
        </div>
      )}

      {/* Animation for mobile menu */}
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-16px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease;
        }
      `}</style>
    </nav>
  );
}
