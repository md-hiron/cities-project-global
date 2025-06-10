import Image from 'next/image';

// ✅ All content in a JSON-style data object
const foundersData = {
  sectionTitle: 'Founders',
  items: [
    {
      name: 'Bob Varney',
      title: 'CEO and President of Cities Project Global, Inc.',
      image: '/founder-bob.png',
      bio: `Bob was a serial entrepreneur for 25 years. Prior to that, he received his Ph.D. in computer science from Penn State followed by research at Bell Laboratories for three years.

During his business career he was invited to the White House under Pres. Clinton and testified on Capitol Hill for mid-sized companies in the USA. He appeared in The Wall Street Journal, Report on ABC television, and also chaired Washington Chapter of the Council of Growing Companies.

For the last 20+ years he has done pro-bono work with Christian organizations. He was architect of Bill Bright’s transition out of presidency of CCC and Senior Advisor for new president, Steve Douglass and was Chairman of Table 71 a major partnering model.`,
    },
    {
      name: 'Hugh Brandt',
      title: 'Chief Culture Officer',
      image: '/founder-hugh.png',
      bio: `Hugh has lived in 3 global cities for 40 years and has experienced first-hand the major problems cities have. In his book “Why God Made Cities”, Timothy Keller says, “If sin has twisted the city as it’s twisted the family, and God invented the city, then we don’t abandon it – we build it.”

He has experienced twisted problems of a city that can feel overwhelming and beyond repair. He has also experienced city leaders from different spheres of society successfully work together to address these problems when their collaborative efforts reflect a culture of love for one another. He believes in Isaiah 58:12: “You’ll be known as those who can fix anything, restore old ruins, rebuild and renovate, make the community livable again.”

Hugh has greatly enhanced our Flourishing Cities curriculum and has facilitated this flagship product in over 40 cities around the world. He continues to lead our educational work and has recently begun to serve as Chief Culture Officer.`,
    },
  ],
};

export default function FoundersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold font-sans mb-16">
          {foundersData.sectionTitle}
        </h2>
        <div className="flex flex-wrap lg:-mx-5">
          {foundersData.items.map((founder, index) => (
            <div
              key={index}
              className="founder-card relative w-full lg:w-1/2 lg:px-5 max-lg:mb-10"
            >
              <div className="md:flex bg-[#A1CF5F] h-full items-center">
                <div className="w-full p-5 max-lg:py-14 relative z-10 max-md:bg-[#263519]">
                  <p className="whitespace-pre-line text-white leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
                <div className="w-full self-end relative">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute w-full ml-auto h-20 bg-[#A1CF5F] left-0 bottom-0">
                    <div className="founder-info-text absolute p-3 lg:pl-14 md:pl-24 pl-20 w-4/5 h-28 right-0 bottom-4 bg-[#A1CF5F]">
                      <h3 className="font-sans font-bold text-3xl text-[#263519]">{founder.name}</h3>
                      <p className="text-lg">{founder.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
