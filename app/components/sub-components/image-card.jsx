'use client';

import Image from 'next/image';

export default function ImageCard({ items = [], classes = '' }) {
  return (
    <div className={`flex flex-col lg:flex-row items-center justify-center gap-14 px-4 md:px-0 ${classes}`}>
      {items.map((item, idx) => (
        <div key={idx} className="max-w-xs text-center">
          <div className="w-[300px] h-[400px] mx-auto border-2 border-green-200 rounded-full overflow-hidden mb-4">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold font-sans text-black">{item.title}</h3>
          <p className="font-sans text-black max-w-[250px] mx-auto">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
