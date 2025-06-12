'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

export default function AlumniSlider({
  data = [],
  onPlay,
  showControls = true,
  perViewConfig = {
    default: 4,
    md: 2,
    sm: 1.2,
  },
  containerClass = 'container mx-auto px-4',
}) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: perViewConfig.default,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: perViewConfig.md || 2,
          spacing: 12,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: perViewConfig.sm || 1.2,
          spacing: 8,
        },
      },
    },
  });

  return (
    <div className="relative">
      {showControls && (
        <>
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#00000040" viewBox="0 0 24 24">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#00000040" viewBox="0 0 24 24">
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </>
      )}

      <div className={containerClass}>
        <div ref={sliderRef} className="keen-slider">
          {data.map((alumnus, index) => (
            <div
              key={index}
              className="keen-slider__slide flex bg-white rounded-md overflow-hidden shadow-md"
            >
              <div className="relative w-1/2">
                <Image
                  src={alumnus.image}
                  alt={alumnus.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer"
                  onClick={() => onPlay(alumnus.video)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className={`w-1/2 p-4 flex flex-col justify-center ${alumnus.bg} text-left`}>
                <h3 className="font-bold  text-lg">{alumnus.name}</h3>
                <p className="text-sm ">{alumnus.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
