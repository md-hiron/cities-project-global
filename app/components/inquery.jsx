'use client';

import Image from 'next/image';

const content = {
  message: `If you’re not sure, please apply anyway\nyou will have the opportunity to speak\nto one of our facilitators to explore\nyour questions further.`,
  button: {
    text: 'Apply Now',
    icon: '↗',
    link: '#'
  },
  images: [
    { src: '/men1.png'},
    { src: '/men2.png'},
    { src: '/man3.png'},
    { src: '/man4.png'},
    { src: '/men5.png'},
  ]
};

export default function Inquery() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold font-sans whitespace-pre-line mb-6 max-w-[910px] mx-auto">
          {content.message}
        </h2>
        <a
          href={content.button.link}
          className="inline-block mt-2 bg-[#A1CF5F] text-black text-sm px-6 py-3 rounded font-bold font-sans transition hover:bg-[#91ba55]"
        >
          {content.button.text} <span className="ml-1">{content.button.icon}</span>
        </a>

        <div className="flex justify-center items-center gap-6 lg:pt-28 pt-16 flex-wrap">
          {content.images.map((img, index) => (
            <div
              key={index}
              className={`relative`}
            >
              <Image
                src={img.src}
                width={280}
                height={280}
                className="max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
