"use client"
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-black via-gray-900 to-indigo-950 text-white pt-10 pb-6 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        {/* Brand & Social */}
        <div className="flex flex-col items-center md:items-start gap-3 flex-1">
          <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
            Artistly
          </span>
          <span className="text-xs text-gray-300">India’s Luxury Event Platform</span>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition">
              <FaInstagram size={22} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-sky-400 transition">
              <FaTwitter size={22} />
            </a>
            <a href="mailto:hello@artistly.com" aria-label="Email" className="hover:text-yellow-400 transition">
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-col items-center md:items-center gap-2 flex-1">
          <a href="/careers" className="hover:underline hover:text-yellow-300 transition text-sm">Careers</a>
          <a href="/contact" className="hover:underline hover:text-yellow-300 transition text-sm">Contact Us</a>
          <a href="mailto:hello@artistly.com" className="hover:underline hover:text-yellow-300 transition text-sm">Email: hello@artistly.com</a>
          <a href="/ads" className="hover:underline hover:text-yellow-300 transition text-sm">Advertise</a>
        </div>

        {/* Disclaimer */}
        <div className="flex flex-col items-center md:items-end gap-2 flex-1 mt-4 md:mt-0 text-xs text-gray-400">
          <span>
            &copy; 2025 Artistly.com. All Rights Reserved.
          </span>
          <span>
            Artistly connects clients with independent artists for luxury events. For all queries and bookings, email us directly.
          </span>
          <span>
            Designed with <span className="text-pink-400">♥</span> in India.
          </span>
        </div>
      </div>
      {/* Responsive stacking for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer > div {
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }
          footer a, footer span {
            text-align: center;
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
