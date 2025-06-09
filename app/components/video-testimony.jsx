'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const alumniData = [
  {
    name: 'Calebe Luo',
    location: 'São Paulo, Brazil',
    image: '/man.jpg',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    bg: 'bg-green-100',
  },
  {
    name: 'Vladimir Jikhar',
    location: 'Almaty, Kazakhstan',
    image: '/man.jpg',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    bg: 'bg-blue-100',
  },
  {
    name: 'Jervis Dicicco',
    location: 'Denver, Colorado',
    image: '/man.jpg',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    bg: 'bg-green-100',
  },
  {
    name: 'Eduardo Almeida',
    location: 'Pompeia, Brazil',
    image: '/man.jpg',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    bg: 'bg-blue-100',
  },
];

export default function VideoTestimony() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 12 },
      },
      '(max-width: 768px)': {
        slides: { perView: 1.2, spacing: 8 },
      },
    },
  });

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-16 lg:py-28 relative">
      <h2 className="text-4xl font-sans font-bold text-center mb-2">
        Living Purposefully for Your Life
      </h2>
      <p className="text-xl font-sans font-bold mb-14 text-center">
        What Our Alumni Are Saying
      </p>
      <div className="relative">
        {/* Slider Navigation Arrows */}
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
        {/* Slider Area */}
        <div className="container mx-auto px-4">
            <div ref={sliderRef} className="keen-slider">
            {alumniData.map((alumnus, index) => (
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
                    onClick={() => setActiveVideo(alumnus.video)}
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
                <div
                    className={`w-1/2 p-4 flex flex-col justify-center ${alumnus.bg} text-left`}
                >
                    <h3 className="font-bold font-sans text-lg">{alumnus.name}</h3>
                    <p className="text-sm font-sans">{alumnus.location}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      {/* Video Popup Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-video bg-black">
            <ReactPlayer url={activeVideo} controls width="100%" height="100%" />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
                <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7a1 1 0 00-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
