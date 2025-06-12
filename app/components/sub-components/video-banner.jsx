'use client';

import { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';

export default function VideoBanner({
  backgroundImage,
  title,
  description,
  speakerImage,
  speakerName,
  speakerRole,
  videoUrl,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
       <>
        <div className="relative h-[600px] max-w-[1110px] mx-auto rounded overflow-hidden">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
          />

          {/* speakerbox */}
          { speakerImage && (
            <div className="absolute top-10 right-10 z-10 bg-[#CCF78E] w-[177px] rounded shadow-md">
              <Image
                src={speakerImage}
                alt={speakerName}
                width={177}
                height={127}
                className="w-full"
              />
              <div className="p-2">
                <p className="text-black font-semibold text-xl">{speakerName}</p>
                <p className="text-xs text-black leading-tight whitespace-pre-line">{speakerRole}</p>
              </div>
            </div>
          ) }

          <div className="absolute bottom-10 left-10 text-white max-w-md z-10">
            <h2 className="lg:text-6xl text-4xl !font-display font-normal leading-tight whitespace-pre-line uppercase">{title}</h2>
            <p className="mt-4">{description}</p>
          </div>

          {/* Play Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute bottom-10 right-10 bg-white text-black w-20 h-20 text-4xl text-center rounded-full shadow-md hover:scale-105 transition-transform z-10 cursor-pointer"
          >
            ▶
          </button>
        </div>

        {/* Modal */}
   
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="w-full max-w-3xl bg-black rounded-lg overflow-hidden relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-xl z-10"
            >
              ✕
            </button>
            <ReactPlayer
              url={videoUrl}
              width="600px"
              height="600px"
              controls
              playing
            />
          </div>
        </div>
      )}
      </>
  );
}
