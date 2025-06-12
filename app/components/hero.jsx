import Image from 'next/image';

const heroContent = {
  backgroundImage: '/hero.jpg',
  heading: 'Live Life\nPurposefully',
  lead: 'We guide you to…',
  subpoints: [
    'Live purposefully for your life',
    'Live purposefully for the world',
  ],
};

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white flex items-end">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={heroContent.backgroundImage}
          layout="fill"
          objectFit="cover"
          priority
          alt="Hero background"
        />
      </div>
      <div className="container mx-auto pb-20 relative px-4">
        <h1 className="!font-display font-normal lg:text-[92px] text-6xl leading-none uppercase whitespace-pre-line">
          {heroContent.heading}
        </h1>
        <div className="mt-4 text-base  tracking-wide">
          <p className="font-bold mb-4">{heroContent.lead}</p>
          {heroContent.subpoints.map((point, idx) => (
            <p key={idx}>{point}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
