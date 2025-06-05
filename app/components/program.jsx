import Image from 'next/image';

const programsData = {
  heading: 'Our Programs',
  subheading: 'We guide people to live purposefully, transforming their workplaces and communities',
  programs: [
    {
      type: 'Free Workshop',
      title: 'Discover How To Start Your Journey',
      image: '/prog.png',
    },
    {
      type: 'Online Course',
      title: 'Learn to Live with Purpose in Every Sphere',
      image: '/prog2.png',
    },
    {
      type: 'A Small Group Study Guide',
      title: 'VantagePoint™',
      description: 'A guided small group journey into purpose and identity.',
      image: '/prog3.png',
    },
    {
      type: 'Flagship Program',
      title: 'Leadership Circle',
      description: 'Our flagship program for transformational leadership.',
      image: '/prog4.png',
    },
  ],
  testimonials: [
    {
      name: 'Sarah Johnson',
      handle: '@kenwood',
      text: "VantagePoint opened my eyes to my true purpose in God’s story. It’s been transformative!",
      avatar: '/prog-author.png',
    },
    {
      name: 'Michael Smith',
      handle: '@kenwood',
      text: "It is so easy to keep looking at things the way that we always have. This material helps shape our vantage point and see things from a fresh point of view as we live life.",
      avatar: '/progauthor2.png',
    },
    {
      name: 'James Johnson',
      handle: '@kenwood',
      text: "I love how VantagePoint fosters discussion and community. It truly deepens understanding!",
      avatar: '/progauthor3.png',
    },
    {
      name: 'Emily Davis',
      handle: '@kenwood',
      text: "The relatable stories and scripture provided in VantagePoint helped me connect my faith to everyday life.",
      avatar: '/progauthor4.png',
    },
  ],
};

export default function ProgramsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-14">
            <h2 className="w-full lg:w-1/3 text-3xl lg:text-5xl font-bold font-sans text-[#0E0E0E] lg:pr-5 max-lg:mb-4">
                {programsData.heading}
            </h2>
            <p className="text-2xl lg:text-4xl text-[#0E0E0E] lg:w-2/3 w-full max-w-[950px] font-sans font-bold">
                {programsData.subheading}
            </p>
        </div>
        

        <div className="flex flex-wrap md:-mx-3 mb-3">
        {programsData.programs.map((program, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 md:px-3 max-lg:mb-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
                {program.image && (
                <Image
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
                )}
                <div className="p-4 text-left flex-grow">
                <p className="uppercase text-base font-sans font-bold mb-14">
                    {program.type}
                </p>
                <h3 className="font-bold font-sans lg:text-3xl text-2xl mb-1">{program.title}</h3>
                {program.description && (
                    <p className="text-xl font-sans font-bold">{program.description}</p>
                )}
                </div>
            </div>
            </div>
        ))}
        </div>

        <div className="flex flex-wrap md:-mx-3">
        {programsData.testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 md:px-3 max-lg:mb-6">
            <div className="bg-[#F5F5F5] rounded-lg p-5 text-left h-full flex flex-col justify-between">
                <div className="flex items-center mb-3">
                <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                />
                <div>
                    <p className="font-bold font-sans">{testimonial.name}</p>
                    <p className="text-sm font-sans">{testimonial.handle}</p>
                </div>
                </div>
                <p className="text-sm font-sans">{testimonial.text}</p>
            </div>
            </div>
        ))}
        </div>

      </div>
    </section>
  );
}
