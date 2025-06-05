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
        <div className="grid lg:grid-cols-2 gap-12">
          {foundersData.items.map((founder, index) => (
            <div
              key={index}
              className="relative bg-[#2c3a1c] text-white rounded-lg overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2 p-8 z-10">
                <p className="whitespace-pre-line font-sans text-sm md:text-base leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              {/* Image Section with angled green background */}
              <div className="w-full lg:w-1/2 relative">
                {/* Green diagonal overlay */}
                <div className="absolute top-0 right-0 w-full h-full bg-[#a1cf5f] skew-x-[-15deg] origin-left z-0"></div>

                {/* Image */}
                <div className="relative z-10">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nameplate */}
                <div className="absolute bottom-0 left-0 w-full bg-[#a1cf5f] px-6 py-4 z-20">
                  <h3 className="text-black font-bold text-xl">{founder.name}</h3>
                  <p className="text-black text-sm">{founder.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
