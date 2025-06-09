'use client';

import { useState } from 'react';
import Image from 'next/image';

const filters = [
  'Faith at Work',
  'Love as Leadership',
  'Leading for City Impact',
  'Vision to Action',
  'Purpose in the Everyday',
  'Renewal Projects',
];

const headerContent = {
    title: 'Living Purposefully for the World',
    subtitle: 'Redemptive Stories Transforming\n Workplaces and Communities',
};

const stories = [
  {
    title: "Receiving and Reflecting God's Inherent Love for Us",
    image: '/blog1.jpg',
  },
  {
    title: "Receiving and Reflecting God's Inherent Love for Us",
    image: '/blog2.jpg',
  },
  {
    title: "Receiving and Reflecting God's Inherent Love for Us",
    image: '/blog3.jpg',
  },
  {
    title: "Receiving and Reflecting God's Inherent Love for Us",
    image: '/blog4.jpg',
  },
  {
    title: "Receiving and Reflecting God's Inherent Love for Us",
    image: '/blog5.jpg',
  },
  {
    title: "Receiving and Reflecting God's Inherent Love for Us",
    image: '/blog6.jpg',
  },
];

export default function StoriesBlog() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [search, setSearch] = useState('');

  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-5xl font-sans font-bold text-center mb-3">
            {headerContent.title}
          </h2>
          <p className="text-3xl font-semibold font-sans whitespace-pre-line">
            {headerContent.subtitle}
          </p>
        </div>
        {/* Search */}
        <div className="flex justify-end mb-6">
            <div className="relative w-full max-w-[300px]">
            <input
                type="text"
                placeholder="Search"
                className="w-full border-b border-black bg-transparent py-1 pr-10 focus:outline-none font-sans text-xl placeholder:text-xl placeholder:text-black"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <svg
                className="absolute right-2 top-1.5 w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
            </svg>
            </div>
        </div>

        <div className="flex flex-wrap lg:-mx-4">
          {/* Filters */}
          <div className="lg:w-1/4 w-full lg:px-4 mb-10 lg:mb-0">
            <div className="filter-button-wrap">
              {filters.map((filter) => (
                <div className="mb-3" key={filter}>
                    <button
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-1 rounded-full border text-sm transition inline-block cursor-pointer font-sans ${
                            activeFilter === filter
                            ? 'text-[#A1CF5F] font-semibold border-[#A1CF5F]'
                            : 'border-black text-black hover:bg-gray-100'
                        }`}
                        >
                        {filter}
                    </button>
                </div>
                
              ))}
            </div>
          </div>

          {/* Search + Cards */}
          <div className="lg:w-3/4 w-full lg:px-4">
            {/* Cards in Flexbox Pattern */}
            <div className="flex flex-wrap lg:-mx-4">
              {stories.map((story, index) => (
                <div key={index} className="lg:w-1/3 w-full lg:px-4 mb-10">
                  <div className="rounded-md overflow-hidden aspect-[4/3] relative mb-2">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-lg font-sans font-semibold">
                    {story.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-10">
              <button className="px-6 py-2 text-sm font-semibold bg-[#A1CF5F] rounded-md hover:bg-[#9ACB00] transition cursor-pointer">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
