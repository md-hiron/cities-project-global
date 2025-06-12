import Image from 'next/image';
import Link from 'next/link';

const footerData = {
  navLinks: ['Home', 'About', 'What We Do', 'Stories', 'Articles', 'Contact'],
  topRightLinks: ['Book', 'Donate Now!'],
  programs: [
    { label: 'Global Leadership Circle', href: '#' },
    { label: 'VantagePoint™', href: '#' },
  ],
  book: [
    { label: 'Read a Sample Chapter', href: '#' },
    { label: 'Buy Book', href: '#' },
  ],
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  legal: [
    { label: 'Terms of Use', href: '#' },
    { label: 'Privacy Statement', href: '#' },
  ],
  copyright: '© Copyright 2024',
};

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Navigation */}
      <div className="container mx-auto px-4 py-4 border-b border-t border-black">
        <div className="flex justify-between items-center flex-wrap">
          <nav className="flex flex-wrap gap-4">
            {footerData.navLinks.map((item, idx) => (
              <Link
                href="#"
                key={idx}
                className={`hover:underline  text-sm ${
                  idx === 0 ? 'font-bold' : ''
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 max-lg:mt-4">
            {footerData.topRightLinks.map((item, idx) => (
              <Link
                href="#"
                key={idx}
                className="hover:underline  text-sm font-bold"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between gap-8 text-sm">
          {/* Programs */}
          <div>
            <h4 className=" font-bold text-base mb-5">Programs</h4>
            <ul className="space-y-3">
              {footerData.programs.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="underline  text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About the Book */}
          <div>
            <h4 className=" font-bold text-base mb-5">About the Book</h4>
            <ul className="space-y-3">
              {footerData.book.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="underline  text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Image (kept in middle as in your original) */}
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
            <h4 className=" font-bold text-base mb-5">Stay Connected</h4>
            <ul className="space-y-3">
              {footerData.social.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="underline  text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <ul className="space-y-3 text-right">
              {footerData.legal.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="underline  text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className=" text-sm">{footerData.copyright}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
