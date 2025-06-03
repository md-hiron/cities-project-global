'use client';

import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function SocialMediaSection() {
  const socialIcons = [
    { name: 'Instagram', icon: <FaInstagram />, link: '#' },
    { name: 'Facebook', icon: <FaFacebookF />, link: '#' },
    { name: 'YouTube', icon: <FaYoutube />, link: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, link: '#' },
  ];

  return (
    <section className="text-center">
      <h2 className="text-2xl md:text-4xl font-sans font-bold mb-4">
        See What’s Happening in Social Media
      </h2>
      <p className="font-sans text-base mb-6">
        Stay connected with us through all major social media
      </p>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {socialIcons.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            aria-label={item.name}
            className="w-12 h-12 flex items-center justify-center bg-black text-white border border-black rounded-xl transition hover:bg-white hover:text-black"
          >
            <span className="text-xl">{item.icon}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
