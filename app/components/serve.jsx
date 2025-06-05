'use client';

import ImageCard from './sub-components/image-card';

// ✅ JSON-like data block
const serveSectionData = {
  title: 'How We Serve You',
  services: [
    {
      title: 'Awaken',
      description: "you to your sacred role in God's story",
      image: '/serve1.png',
    },
    {
      title: 'Equip',
      description: 'you to live purposefully',
      image: '/serve2.png',
    },
    {
      title: 'Unleash',
      description: 'you to transform your workplace and communities',
      image: '/serve3.png',
    },
  ],
};

export default function ServeSection() {
  return (
    <section className="lg:py-[110px] py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-sans font-bold mb-14">
          {serveSectionData.title}
        </h2>
        <ImageCard items={serveSectionData.services} />
      </div>
    </section>
  );
}
