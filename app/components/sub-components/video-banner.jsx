'use client';

import { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

export default function VideoBanner({ thumbnail, videoUrl, width = 950, height = 534 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="mt-12 max-w-[950px] mx-auto cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={thumbnail}
          width={width}
          height={height}
          alt="Video thumbnail"
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto aspect-video px-4">
            <ReactPlayer
              url={videoUrl}
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
    </>
  );
}
