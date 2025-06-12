import Image from 'next/image';

const sectionData = {
  title: 'Unlock Your Purpose\nExpand Your Impact',
  image: '/purpose.png', // Make sure this exists in /public
  testimonial:
    'Before joining the program, I felt lost in my calling. Today, I’m leading a city initiative that’s making real change and I finally feel aligned in faith, work, and purpose.',
  name: 'Daniel Okafor',
  location: 'London',
};

export default function PurposeSection() {
  return (
    <section className="lg:py-28 py016">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl  font-bold whitespace-pre-line text-center mb-14">
          {sectionData.title}
        </h2>

        <div className="rounded-xl overflow-hidden mb-6">
          <Image
            src={sectionData.image}
            alt="Testimonial Group"
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className=" text-2xl">
          {sectionData.testimonial}{' '}
          <span className="font-bold">
            ~ {sectionData.name}, {sectionData.location}
          </span>
        </p>
      </div>
    </section>
  );
}
