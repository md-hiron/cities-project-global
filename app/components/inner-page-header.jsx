'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// JSON-like data defined at the top
const headerData = {
  logo: "/logo-alt.svg",
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

export default function InnerPageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="z-50 relative  mt-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 lg:px-0 border-y border-black">

          <div className="flex items-center space-x-2">
            <Image src={headerData.logo} alt="Cities Project Global" width={80} height={46} className="max-w-full" />
          </div>

          <button
            className="lg:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden lg:block">
            <ul className="flex text-sm font-light">
              {headerData.navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`block mx-3 text-sm font-sans py-5 px-6 ${
                        isActive
                          ? 'text-black font-bold bg-[#A1CF5F]'
                          : 'text-black hover:bg-[#A1CF5F]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-sans text-black flex items-center hover:text-[#A1CF5F]">
              <Image src={headerData.languageIcon} width={20} height={20} className="mr-1" alt="Language" />
              {headerData.languageText}
            </button>
            <button className="px-5 py-3 text-sm font-sans font-bold text-white bg-[#A1CF5F] rounded hover:bg-[#94bf55]">
              {headerData.donateText}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white text-black z-50 transform transition-transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 px-6 text-sm font-sans">
          {headerData.navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block py-2 px-2 ${
                    isActive
                      ? 'text-black font-bold bg-[#A1CF5F] rounded'
                      : 'hover:text-[#A1CF5F]'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li>
            <button className="text-sm font-sans text-black flex items-center hover:text-[#A1CF5F]">
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
