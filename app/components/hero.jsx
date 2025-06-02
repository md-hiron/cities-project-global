'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white flex items-end">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/hero.jpg" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="container mx-auto pb-20 relative px-4">
        <h1 className="font-display font-normal lg:text-[92px] text-6xl leading-none uppercase">
          Live Life <br />
          Purposefully
        </h1>
        <div className="mt-4 text-base font-sans tracking-wide">
          <p className="font-bold mb-4">We guide you to…</p>
          <p>Live purposefully for your life</p>
          <p>Live purposefully for the world</p>
        </div>
      </div>
    </section>
  );
}
