import Image from 'next/image';

const cardData = {
  title: 'Empowering Leaders with Tailored Solutions and Global Impact',
  items: [
    {
      image: '/tailored.jpg',
      title: 'Highly Tailored Experience',
      description:
        "Each cohort is unique, with discussions shaped by participants' backgrounds, leading to rich conversations and deep insights.",
    },
    {
      image: '/tailored.jpg',
      title: 'Network of Local and Global Collaborators',
      description:
        "Leadership Circle's global reach fosters powerful collaboration, creating a growing network that drives change worldwide.",
    },
    {
      image: '/tailored.jpg',
      title: 'Practical Tools for Renewal and Impact',
      description:
        'Change combines knowledge and heart renewal. We guide you to engage with your community practically, offering a framework for action.',
    },
  ],
};

export default function TailoredSolutions() {
  return (
    <section className="py-16 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-14 text-center max-w-[850px] mx-auto">
          {cardData.title}
        </h2>

        <div className="flex flex-wrap justify-center max-w-[1150px] mx-auto">
          {cardData.items.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 lg:px-4 max-lg:mb-10"
            >
              <div className="bg-[#F5F6FA] rounded-xl overflow-hidden shadow-xl h-full p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-md mb-4 w-full h-auto"
                />
                <h3 className="font-bold  text-lg mb-2">{item.title}</h3>
                <p className="text-sm ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
