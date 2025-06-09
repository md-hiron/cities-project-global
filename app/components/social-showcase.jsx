'use client';

import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedin } from 'react-icons/fa';

const socialIcons = [
  { name: 'Instagram', icon: <FaInstagram size={28} />, link: '#' },
  { name: 'Facebook', icon: <FaFacebookF size={28} />, link: '#' },
  { name: 'YouTube', icon: <FaYoutube size={28} />, link: '#' },
  { name: 'LinkedIn', icon: <FaLinkedin size={28} />, link: '#' },
];

const mediaItems = [
  { type: 'image', src: '/social1.png' },
  { type: 'image', src: '/social2.png' },
  { type: 'image', src: '/social3.png' },
  { type: 'image', src: '/social1.png' },
];

export default function SocialMediaShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 12 },
      },
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8 items-start px-4">
        {/* Left: Text + Icons */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl lg:text-5xl font-sans font-bold mb-4 leading-tight">
            See What’s<br />Happening in<br />Social Media
          </h2>
          <p className="text-base font-sans mb-4">
            Stay connected with us through all major social media
          </p>
          <div className="flex gap-4 flex-wrap">
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
        </div>

        {/* Right: Slider + Dots */}
        <div className="w-full lg:w-2/3">
          <div ref={sliderRef} className="keen-slider">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="keen-slider__slide aspect-[9/16] relative rounded-md overflow-hidden shadow"
              >
                <Image
                  src={item.src}
                  alt={`Media ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-5 mt-8">
            {mediaItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-10 h-4 transition cursor-pointer ${
                  currentSlide === idx
                    ? 'bg-[#A1CF5F]'
                    : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
