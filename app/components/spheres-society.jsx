import Image from 'next/image';

const spheres = [
  { name: 'Arts', icon: '/society/art.svg' },
  { name: 'Business', icon: '/society/business.svg' },
  { name: 'Religion', icon: '/society/religion.svg' },
  { name: 'Family', icon: '/society/family.svg' },
  { name: 'Media', icon: '/society/media.svg' },
  { name: 'Government', icon: '/society/crown.svg' },
  { name: 'Education', icon: '/society/education.svg' },
];

export default function SpheresOfSociety() {
  return (
    <section className="lg:pb-28 pb-16 text-center">
      <h2 className="text-2xl md:text-4xl font-sans font-bold mb-14">Spheres of Society</h2>
      <div className="bg-[url(/society-bg.png)]">
        <div className="container mx-auto px-4">
          <div className="flex max-lg:flex-wrap w-full">
            {spheres.map((sphere, idx) => (
              <div key={idx} className="w-1/2 sm:w-1/3 lg:w-full px-4 py-12 sm:odd:bg-[#ECECEC] bg-white border-t border-b border-l border-[#ECECEC] last:border-r">
                <div className="text-center">
                  <div className="h-14 mb-2 flex items-center">
                    <Image
                      src={sphere.icon}
                      alt={sphere.name}
                      width={50}
                      height={56}
                      className="mx-auto"
                    />
                  </div>
                  
                  <span className="text-xl font-sans font-medium">{sphere.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
