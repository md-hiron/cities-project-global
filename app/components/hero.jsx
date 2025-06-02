'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/hero.jpg" // Ensure this matches your actual image path (e.g., public/hero.jpg)
          alt="Man looking joyful in nature"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Hero Text Content */}
      <div className="container mx-auto pb-20 relative">
        <h1 className="text-6xl font-extrabold leading-none uppercase">
          Live Life <br />
          Purposefully
        </h1>
        <div className="mt-4 text-sm tracking-wide">
          <p className="font-semibold mb-4">We guide you to…</p>
          <p>Live purposefully for your life</p>
          <p>Live purposefully for the world</p>
        </div>
      </div>
    </section>
  );
}
