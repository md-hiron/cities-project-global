import Image from 'next/image';

const outcomesContent = {
  heading: 'Tangible outcomes on completion?',
  leftImage: '/outcome2.png',
  rightImage: '/outcome3.png',
  bullets: [
    'Have the tools to practice living an integrated life',
    'Have clarity about your role in God’s kingdom',
    'Be more greatly attuned to the stakeholders in your place of influence (work, community, city, etc.)',
    'Be able to describe those stakeholders’ needs and motivate or work with people toward measurable change in those areas of need',
    'Have access to a centralized resource as a result of your cohort’s work',
  ],
  note: 'Graduates will also be certified to recruit, facilitate, and train future Leadership Circle cohorts thereby creating exponential impact in other lives and cities, and many have already been led to do so.',
};

export default function CompletionOutcomes() {
  return (
    <section className="py-16 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl  font-bold mb-12 max-w-[450px]">
          {outcomesContent.heading}
        </h2>

        {/* Flex Layout */}
        <div className="flex flex-wrap lg:-mx-8 items-start">
          {/* Column 1: Left Image */}
          <div className="w-full lg:w-1/5 lg:px-8 mb-8 lg:mb-0">
            <Image
              src={outcomesContent.leftImage}
              alt="City View"
              width={300}
              height={300}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Column 2: Bullet List & Note */}
          <div className="w-full lg:w-2/5 lg:px-8 mb-8 lg:mb-0">
            <ul className="list-disc pl-5 space-y-3 text-base">
              {outcomesContent.bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="font-medium mt-6">
              {outcomesContent.note}
            </p>
          </div>

          {/* Column 3: Right Image */}
          <div className="w-full lg:w-2/5 lg:px-8">
            <Image
              src={outcomesContent.rightImage}
              alt="Classroom"
              width={600}
              height={500}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
