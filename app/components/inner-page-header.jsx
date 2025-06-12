'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

// JSON-like data defined at the top
const headerData = {
  logo: "/logo-alt.svg",
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
      ]
    },
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
                  <li key={item.name} className="relative group mx-1">
                    <Link
                      href={item.path}
                      className={`text-sm  py-5 px-6 flex items-center ${
                        isActive ? 'text-black font-bold bg-[#A1CF5F]' : 'text-black hover:bg-[#A1CF5F]'
                      }`}
                    >
                      {item.name} { item.submenu && <ChevronDown size={20} className='mt-[2px]' /> }
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

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm  text-black flex items-center hover:text-[#A1CF5F]">
              <Image src={headerData.languageIcon} width={20} height={20} className="mr-1" alt="Language" />
              {headerData.languageText}
            </button>
            <button className="px-5 py-3 text-sm  font-bold text-white bg-[#A1CF5F] rounded hover:bg-[#94bf55]">
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
        <ul className="flex flex-col space-y-4 px-6 text-sm ">
          {headerData.navItems.map((item) => {
            const isActive = pathname === item.path;

            return item.submenu ? (
              <li key={item.name}>
                <details className="group">
                  <summary className="cursor-pointer py-2 px-2  hover:text-[#A1CF5F]">
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
            <button className="text-sm  text-black flex items-center hover:text-[#A1CF5F]">
              <Image src={headerData.languageIcon} width={20} height={20} className="mr-2" alt="Language" />
              {headerData.languageText}
            </button>
          </li>
          <li>
            <button className="w-full px-5 py-3 text-sm  font-bold text-white bg-[#A1CF5F] rounded hover:bg-[#94bf55]">
              {headerData.donateText}
            </button>
          </li>
        </ul>

      </div>
    </header>
  );
}
