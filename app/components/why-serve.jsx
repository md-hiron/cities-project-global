'use client'; // Only for App Router (Next.js 13+)

import { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

const serveContent = {
  backgroundImage: '/serve-bg.png',
  heading: 'Why We Serve You',
  description:
    'We see a world where Jesus-followers in every sphere of society live out their calling, transforming their workplaces and communities into flourishing centers for the common good of all people.',
  emphasis: 'Just as God Intended',
  videoThumbnail: '/serve-video-banner.png',
  videoUrl: 'https://www.youtube.com/watch?v=bjxTIcuzB6k',
};

export default function WhyWeServe() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="bg-cover bg-center lg:py-28 py-16"
      style={{ backgroundImage: `url(${serveContent.backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-sans font-bold mb-12">
            {serveContent.heading}
          </h2>
          <p className="md:text-4xl text-2xl text-black font-sans font-normal">
            {serveContent.description}
          </p>
          <p className="text-2xl md:text-4xl font-sans font-bold text-[#A1CF5F] mt-8">
            {serveContent.emphasis}
          </p>
        </div>

        {/* Clickable Banner Image */}
        <div
          className="mt-12 max-w-[950px] mx-auto cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={serveContent.videoThumbnail}
            width={950}
            height={534}
            alt="Banner video thumbnail"
          />
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative w-full max-w-4xl mx-auto aspect-video px-4">
              <ReactPlayer
                url={serveContent.videoUrl}
                width="100%"
                height="100%"
                playing
                controls
              />
              <button
                className="absolute top-0 -right-3 text-white text-xl font-bold cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
