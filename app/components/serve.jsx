'use client';

import Image from 'next/image';

export default function ServeSection() {
  const services = [
    {
      title: 'Awaken',
      description: "you to your sacred role in God's story",
      image: '/serve1.png', // Replace with actual image paths in /public
    },
    {
      title: 'Equip',
      description: 'you to live purposefully',
      image: '/serve2.png',
    },
    {
      title: 'Unleash',
      description: 'you to transform your  workplace and communities',
      image: '/serve3.png',
    },
  ];

  return (
    <section className="lg:py-[110px] py-16 bg-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-sans font-bold mb-14">How We Serve You</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-14 px-4 md:px-0">
        {services.map((item, idx) => (
          <div key={idx} className="max-w-xs text-center">
            <div className="w-[300px] h-[400px] mx-auto border-2 border-green-200 rounded-full overflow-hidden mb-4">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={0}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-bold font-sans text-black">{item.title}</h3>
            <p className="font-sans text-black max-w-[250px] mx-auto">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
      
    </section>
  );
}
