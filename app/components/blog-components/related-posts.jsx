'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

// JSON-based blog post data
const blogPosts = [
  {
    date: '5 SEP 2024',
    title: "Receiving and Reflecting God’s Inherent Love for Us",
    image: '/relpost.png',
    url: '#',
  },
  {
    date: '5 SEP 2024',
    title: 'Healing the Trauma of Homelessness Through Affordable Housing',
    image: '/relpost3.png',
    url: '#',
  },
  {
    date: '5 SEP 2024',
    title: 'In the Midst of War, Love Comes Through Action',
    image: '/relpost.png',
    url: '#',
  },
  {
    date: '5 SEP 2024',
    title: 'Faith in Crisis: Supporting Families on the Run',
    image: '/relpost3.png',
    url: '#',
  },
  {
    date: '5 SEP 2024',
    title: 'A Home for the Displaced: Stories of Renewal',
    image: '/relpost.png',
    url: '#',
  },
];

export default function RelatedBlogs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2 },
      },
      '(max-width: 640px)': {
        slides: { perView: 1 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-14">Related Blogs</h2>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {blogPosts.map((post, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={336}
                    height={336}
                    className="rounded"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white font-bold px-3 py-1 rounded-full">
                    {post.date}
                  </div>
                </div>
                <p className="mt-4 text-base font-medium max-w-xs">{post.title}</p>
                <a
                  href={post.url}
                  className="mt-2 inline-flex items-center font-bold text-black hover:underline"
                >
                  Learn More <ArrowUpRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({
            length: Math.ceil(blogPosts.length / 4),
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx * 4)}
              className={`h-2 rounded-full transition-all lg:w-[180px] w-[80px] ${
                currentSlide === idx * 4 ? 'w-10 bg-[#A1CF5F]' : ' bg-[#E0E0E0]'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
