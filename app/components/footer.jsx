'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Navigation */}
      <div className="container mx-auto px-4 py-4 border-b border-t border-black">
        <div className="flex justify-between items-center flex-wrap">
          <nav className="flex flex-wrap gap-4">
            {['Home', 'About', 'What We Do', 'Stories', 'Articles', 'Contact'].map((item, idx) => (
              <Link href="#" key={idx} className={`hover:underline font-sans text-sm ${idx === 0 ? 'font-bold' : ''}`}>
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 max-lg:mt-4">
            <Link href="#" className="hover:underline font-sans text-sm font-bold">Book</Link>
            <Link href="#" className="hover:underline font-sans text-sm font-bold">Donate Now!</Link>
          </div>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between gap-8 text-sm">

          {/* Programs */}
          <div>
            <h4 className="font-sans font-bold text-base mb-5">Programs</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="underline font-sans text-sm">Global Leadership Circle</Link></li>
              <li><Link href="#" className="underline font-sans text-sm">VantagePoint™</Link></li>
            </ul>
          </div>

          {/* About the Book */}
          <div>
            <h4 className="font-sans font-bold text-base mb-5">About the Book</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="underline font-sans text-sm">Read a Sample Chapter</Link></li>
              <li><Link href="#" className="underline font-sans text-sm">Buy Book</Link></li>
            </ul>
          </div>

          {/* Book Image */}
          <div>
            <Image
              src="/book.png"
              alt="Book Cover"
              width={70}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-sans font-bold text-base mb-5">Stay Connected</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="underline font-sans text-sm">Facebook</Link></li>
              <li><Link href="#" className="underline font-sans text-sm">LinkedIn</Link></li>
              <li><Link href="#" className="underline font-sans text-sm">Instagram</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <ul className="space-y-3 text-right">
              <li><Link href="#" className="underline font-sans text-sm">Terms of Use</Link></li>
              <li><Link href="#" className="underline font-sans text-sm">Privacy Statement</Link></li>
              <li className="font-sans text-sm">© Copyright 2024</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
