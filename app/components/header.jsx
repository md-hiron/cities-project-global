'use client';

import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  // Move header data inside component
  const headerData = useMemo(() => ({
    logo: isHomePage ? "/logo.svg" : "/logo-alt.svg",
    languageIcon: "/globe.svg",
    languageText: "English",
    donateText: "Donate Now",
    navItems: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      {
        name: "What We Do",
        path: "/what-we-do",
        submenu: [
          { name: "Leadership Circle", path: "/leadership-circle" },
          { name: "Vantagepoint", path: "/vantagepoint" },
          { name: "Blogs", path: "/blogs" },
          { name: "Single Post", path: "/single-post" },
          { name: "Donate", path: "/donate" },
          { name: "Book", path: "/book" },
        ]
      },
      { name: "Stories", path: "/stories" },
      { name: "Contact", path: "/contact" },
    ],
  }), [isHomePage]);

  const textColor = isHomePage ? 'text-white' : 'text-black';
  const bgColor = isHomePage ? 'bg-transparent' : 'bg-white';

  return (
    <header className={`${isHomePage ? 'absolute top-0 left-0 right-0 z-10' : 'relative z-50'} mt-10 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${isHomePage ? 'border-y border-white' : 'border-y border-black'} px-3 lg:px-0`}>

          {/* Logo */}
          <Link href="/">
            <Image src={headerData.logo} alt="Logo" width={80} height={46} className="max-w-full" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex text-sm font-light">
              {headerData.navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name} className="relative group mx-2">
                    <Link
                      href={item.path}
                      className={`flex items-center py-5 px-5 text-sm ${
                        isActive
                          ? `${textColor} font-bold bg-[#A1CF5F]`
                          : `${textColor} hover:bg-[#A1CF5F]`
                      }`}
                    >
                      {item.name}
                      {item.submenu && <ChevronDown size={20} className="mt-[2px]" />}
                    </Link>
                    {item.submenu && (
                      <ul className="absolute left-0 top-full bg-white border border-gray-200 rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[200px] z-50">
                        {item.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.path}
                              className="block px-4 py-2 text-sm hover:bg-[#A1CF5F]"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Right Actions */}
          <div className={`hidden lg:flex items-center space-x-4 ${textColor}`}>
            <button className="text-sm flex items-center hover:text-[#A1CF5F]">
              <Image src={headerData.languageIcon} width={20} height={20} className="mr-1" alt="Language" />
              {headerData.languageText}
            </button>
            <button className="px-5 py-3 text-sm font-bold text-white bg-[#A1CF5F] rounded hover:bg-[#94bf55]">
              {headerData.donateText}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 ${isHomePage ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'} z-50 transform transition-transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 px-6 text-sm">
          {headerData.navItems.map((item) => {
            const isActive = pathname === item.path;

            return item.submenu ? (
              <li key={item.name}>
                <details className="group">
                  <summary className="cursor-pointer py-2 px-2 hover:text-[#A1CF5F]">
                    {item.name}
                  </summary>
                  <ul className="pl-4 mt-1">
                    {item.submenu.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.path}
                          className="block py-1 text-sm hover:text-[#A1CF5F]"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block py-2 px-2 ${
                    isActive ? 'font-bold bg-[#A1CF5F] rounded' : 'hover:text-[#A1CF5F]'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li>
            <button className={`text-sm flex items-center hover:text-[#A1CF5F] ${textColor}`}>
              <Image src={headerData.languageIcon} width={20} height={20} className="mr-2" alt="Language" />
              {headerData.languageText}
            </button>
          </li>
          <li>
            <button className="w-full px-5 py-3 text-sm font-bold text-white bg-[#A1CF5F] rounded hover:bg-[#94bf55]">
              {headerData.donateText}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
