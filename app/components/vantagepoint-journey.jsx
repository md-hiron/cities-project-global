import Image from 'next/image';
import Link from 'next/link';

const journeyData = {
  title: 'Overview of Your VantagePoint™ Journey',
  intro: "VantagePoint™ is divided into three modules, containing three sessions each. The session chapters are two to three pages long, concluding with a set of questions to facilitate discussion.",
  contentModules: [
    {
      title: 'Module One:',
      subtitle: 'A Different View Of Our Roles',
      sessions: ['Our role with others', 'Our own roles', 'Our roles together'],
    },
    {
      title: 'Module Two:',
      subtitle: 'A Different View Of Story',
      sessions: ['God’s story', 'Our own story', 'Our stories connecting'],
    },
    {
      title: 'Module Three:',
      subtitle: 'A different view of city',
      sessions: ['The city', 'Life in the city', 'Impacting the city'],
    },
  ],
  excerpt: {
    module: 'Module 1, Session 2',
    text: [
      'Many of us compartmentalize our lives, separating work from spiritual pursuits. We often see jobs as burdens to endure while waiting for time to focus on devotions or church.',
      'However, the Bible offers a different perspective. The Hebrew word for work, avodah, is used in Genesis 2 when God places man in the Garden of Eden to cultivate it. This word means cultivating, creating, laboring, serving, and worshiping.',
      'How often do we wish for more meaning in our work? Budget meetings, tough decisions, and long hours can feel meaningless. But what if we viewed our work as an act of worship? This shift in perspective could transform our experience.',
    ],
  },
};

export default function VantagePointJourney() {
  return (
    <section className="bg-white text-black">
      {/* Header Section */}
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <Image src="/people-group.jpg" alt="Happy Group" width={800} height={600} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{journeyData.title}</h2>
          <Image src="/cities-logo.svg" alt="Cities Project Global" width={120} height={40} className="mb-6" />
          <p className="text-lg text-gray-700 mb-4 max-w-md">{journeyData.intro}</p>
          <Image src="/group-session.jpg" alt="Discussion Group" width={400} height={300} className="rounded" />
        </div>
      </div>

      {/* Contents Panel */}
      <div className="bg-[#2c441f] text-white p-6 md:absolute right-10 top-[500px] w-[300px] rounded-md z-10">
        {journeyData.contentModules.map((module, idx) => (
          <div key={idx} className="mb-6">
            <h4 className="text-md font-bold">{module.title}</h4>
            <p className="italic text-sm mb-2">{module.subtitle}</p>
            <ul className="list-disc list-inside text-sm">
              {module.sessions.map((session, i) => (
                <li key={i}>{session}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Excerpt Section */}
      <div className="relative">
        <Image
          src="/beach-scene.jpg"
          alt="Beach with rocks"
          width={1600}
          height={800}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-8 lg:p-20">
          <h3 className="text-xl font-light">Excerpt</h3>
          <h2 className="text-2xl md:text-3xl font-bold text-lime-400 mb-6">{journeyData.excerpt.module}</h2>
          {journeyData.excerpt.text.map((para, idx) => (
            <p key={idx} className="mb-4 text-sm md:text-base max-w-3xl">{para}</p>
          ))}
          <div className="mt-8">
            <Link
              href="#"
              className="inline-block bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 px-6 rounded"
            >
              Join Our Community of Culturemakers ↗
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Tabs Placeholder */}
      <div className="bg-black text-white text-center py-4">
        <div className="flex justify-center space-x-6 text-lime-400">
          <span className="font-bold">Module One</span>
          <span>Module Two</span>
          <span>Module Three</span>
        </div>
      </div>
    </section>
  );
}
