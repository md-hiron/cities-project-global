import Image from 'next/image';

const programTopics = {
  heading: 'What topics does the program cover?',
  description:
    'The Leadership Circle is a journey that integrates your faith and work life through nine topics divided into three phases:',
  image: '/program.png',
};

export default function ProgramTopics() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:items-center lg:-mx-4">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 lg:px-4 mb-12 lg:mb-0">
                <div className="max-w-[580px] mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-sans">
                        {programTopics.heading}
                    </h2>
                    <p className="font-sans">
                        {programTopics.description}
                    </p>
                </div>
            
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 lg:px-4 flex justify-center">
            <Image
                src={programTopics.image}
                alt="Program Topics Diagram"
                width={600}
                height={400}
                className="w-full h-auto max-w-[600px]"
            />
            </div>
        </div>
      </div>
    </section>
  );
}
