'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Use any icon library or your SVG

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6 px-4 lg:px-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Cities Project Global" width={112} height={58} className="max-w-full" />
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex text-sm font-light">
              {['Home', 'About', 'What We Do', 'Stories', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-[#A1CF5F] text-sm font-sans text-white block mx-3"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language and Donate (Desktop only) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-sans text-white flex items-center hover:text-[#A1CF5F]">
              <Image src="/globe.svg" width={20} height={20} className="mr-1" alt="Language" />
              English
            </button>
            <button className="px-5 py-3 text-sm font-sans font-bold text-white bg-[#A1CF5F] rounded hover:bg-[#94bf55]">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Offcanvas) */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-[#0a0a0a] text-white z-50 transform transition-transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 px-6 text-sm font-sans">
          {['Home', 'About', 'What We Do', 'Stories', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="block py-2 hover:text-[#A1CF5F]"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <button className="text-sm font-sans text-white flex items-center hover:text-[#A1CF5F]">
              <Image src="/globe.svg" width={20} height={20} className="mr-2" alt="Language" />
              English
            </button>
          </li>
          <li>
            <button className="w-full px-5 py-3 text-sm font-sans font-bold text-white bg-[#A1CF5F] rounded hover:bg-[#94bf55]">
              Donate Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
