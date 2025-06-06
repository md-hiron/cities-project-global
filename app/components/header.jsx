'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// Header content as JSON at the top
const headerData = {
  logo: "/logo.svg",
  languageIcon: "/globe.svg",
  languageText: "English",
  donateText: "Donate Now",
  navItems: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Stories", path: "/stories" },
    { name: "Contact", path: "/contact" }
  ]
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6 px-4 lg:px-0">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={headerData.logo} alt="Cities Project Global" width={112} height={58} className="max-w-full" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex text-sm font-light">
              {headerData.navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="hover:text-[#A1CF5F] text-sm font-sans text-white block mx-3"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions (desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-sans text-white flex items-center hover:text-[#A1CF5F]">
              <Image src={headerData.languageIcon} width={20} height={20} className="mr-1" alt="Language" />
              {headerData.languageText}
            </button>
            <button className="px-5 py-3 text-sm font-sans font-bold text-white bg-[#A1CF5F] rounded hover:bg-[#94bf55]">
              {headerData.donateText}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
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
          {headerData.navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="block py-2 hover:text-[#A1CF5F]"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="text-sm font-sans text-white flex items-center hover:text-[#A1CF5F]">
              <Image src={headerData.languageIcon} width={20} height={20} className="mr-2" alt="Language" />
              {headerData.languageText}
            </button>
          </li>
          <li>
            <button className="w-full px-5 py-3 text-sm font-sans font-bold text-white bg-[#A1CF5F] rounded hover:bg-[#94bf55]">
              {headerData.donateText}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
