'use client';

import { useState } from 'react';
import ReactPlayer from 'react-player';
import AlumniSlider from './sub-components/alumni-slider';

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

export default function LeaderTestimony() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-16 lg:py-28 relative">
      <h2 className="text-4xl  font-bold text-center mb-14 max-w-[660px] mx-auto">Watch Our Community Share Their Leadership Circle Experiences</h2>

      <AlumniSlider
        data={alumniData}
        onPlay={(videoUrl) => setActiveVideo(videoUrl)}
        showControls={false}
        containerClass=''
        perViewConfig={{
            default: 3,
            md: 2,
            sm: 1,
        }}
      />

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
