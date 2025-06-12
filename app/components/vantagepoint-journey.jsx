import Image from 'next/image';
import ExcerptTabs from './sub-components/excerpt-tab';
import { ArrowUpRight } from 'lucide-react';

const journeyData = {
  title: 'Overview of Your VantagePoint™ Journey',
  intro: "VantagePoint™ is divided into three modules, containing three sessions each. The session chapters are two to three pages long, concluding with a set of questions to facilitate discussion.",
  contentModules: [
    {
      title: 'Module One',
      subtitle: 'A Different View Of Our Roles',
      sessions: ['Our role with others', 'Our own roles', 'Our roles together'],
    },
    {
      title: 'Module Two',
      subtitle: 'A Different View Of Story',
      sessions: ['God’s story', 'Our own story', 'Our stories connecting'],
    },
    {
      title: 'Module Three',
      subtitle: 'A different view of city',
      sessions: ['The city', 'Life in the city', 'Impacting the city'],
    },
  ],
  images: {
    leftImage: '/happy-group.jpg',
    logo: '/logo-alt.svg',
    rightImage: '/group-meeting.jpg',
    beachBg: '/beach-hero.jpg',
  },
  excerptSection: {
    buttonText: 'Join Our Community of Culturemakers',
    heading: 'Join Our \nCommunity of \nCulturemakers',
    buttonHref: '#',
  },
};

export default function VantagePointJourney() {
  return (
    <section className="vantagepoint-journey">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:w-1/4 w-full">
            <Image
              src={journeyData.images.leftImage}
              width={356}
              height={786}
              className="w-full h-full"
            />
          </div>
          <div className="lg:w-2/4 w-full border-y border-[#E8E8E8]">
            <div className="md:flex justify-between w-full items-start px-12 py-16 lg:h-1/2 border-b border-[#E8E8E8]">
              <h2 className=" font-bold text-3xl lg:text-5xl max-w-[430px] md:mr-4 max-md:mb-4 max-lg:text-center">{journeyData.title}</h2>
              <Image 
                src={journeyData.images.logo}
                width={136}
                height={78}
                className="max-lg:mx-auto"
              />
            </div>
            <div className="px-12 py-16 lg:h-1/2 relative">
              <p className="max-w-[410px] mx-auto max-lg:mb-5 max-lg:text-center">{journeyData.intro}</p>
              <Image 
                src={journeyData.images.rightImage}
                width={360}
                height={390}
                className="lg:absolute -bottom-1/2 right-0 max-lg:mx-auto"
              />
            </div>
          </div>
          <div className="lg:w-1/4 w-full bg-[#263519]">
            <h3 className="py-10 px-8  text-white font-semibold lg:text-2xl text-xl border-b border-[#385024]">Content</h3>
            { journeyData.contentModules.map( ( module, index ) => (
              <div className="py-10 px-8 border-b border-[#385024]" key={index}>
                <h4 className=" font-semibold text-base text-[#A1CF5F]">
                  <span className="block">{module.title}:</span>
                  {module.subtitle}
                </h4>
                <div className="w-10 h-1 bg-white my-3"></div>
                <div className="">
                  {module.sessions.map( (data, index) => (
                    <div className=" text-base text-white" key={index}>
                      <span className='mr-1'>Session {index}: </span>
                      {data}
                    </div>
                  ) )}
                </div>
              </div>
            ) ) }
          </div>
        </div>
        <div className="beach bg-[url(/beach-hero.jpg)] bg-no-repeat bg-cover bg-top-left bg-[#030305] border-b-8 border-[#A1CF5F]">
            <div className="lg:h-[660px] h-[330px]"></div>
            <div className="lg:flex justify-between items-end p-16">
              <div className="max-w-[545px] lg:px-4 max-lg:mb-8">
                <ExcerptTabs />
              </div>
              <div className="max-w-[440px] lg:px-4">
                <h2 className="text-4xl md:text-6xl !font-display font-normal text-white leading-tight uppercase mb-10">
                  Join Our <br />
                  Community of <br />
                  Culturemakers
                </h2>
                <a
                  href={journeyData.excerptSection.buttonHref}
                  className="inline-flex items-center gap-2 bg-[#A1CF5F] text-black font-bold  px-6 py-3 rounded-md text-sm md:text-base hover:bg-[#8fba50] transition"
                >
                  {journeyData.excerptSection.buttonText}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
