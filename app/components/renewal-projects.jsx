import Image from 'next/image';

const content = {
  heading: "Renewal Projects\nCreating Lasting Impact\nfor Communities and Workplaces",
  paragraphs: [
    "Before graduating, participants create a Renewal Project to address a key need in their city or workplace. With skills gained in the Leadership Circle, graduates can partner with others, regardless of faith, to create lasting, meaningful change.",
    "We offer a framework to plan and execute City Renewal Projects, which participants present at graduation. Past projects include efforts toward cultural and systemic restoration such as combating poverty through ",
    "A Renewal Project seeks to bring about positive change. It focuses on what breaks God’s heart, aligning with what moves us deeply, as we share in God’s joy when things work as they should."
  ],
  highlightedPhrases: {
    first: "serving the underbanked",
    second: "providing affordable housing"
  },
  focusHeading: "There are three areas\nwhere Renewal Projects\ncan focus",
  focusAreas: [
    {
      number: "01",
      text: "in the community or\ncity around us"
    },
    {
      number: "02",
      text: "within our personal\nworkplaces"
    },
    {
      number: "03",
      text: "for others to benefit\nfrom the Leadership\nCircle itself."
    }
  ],
  image: {
    src: "/workplace.png",
    alt: "Group working on Renewal Project"
  },
  impactNote: "When these projects get implemented, we call the resultant entity an Impact Group.",
  button: {
    label: "Apply Now",
    icon: "↗"
  }
};

export default function RenewalProjects() {
  return (
    <section className="renewal-projects">
      <div className="container mx-auto px-4">
        <div className="bg-black text-white lg:p-16 p-8">
          {/* Top Section */}
          <div className="flex flex-wrap lg:-mx-4 mb-20">
            <div className="lg:w-1/2 w-full lg:px-4 mb-10 lg:mb-0">
              <h2 className="text-3xl lg:text-5xl font-sans font-bold leading-tight max-w-[600px]">
                {content.heading}
              </h2>
            </div>
            <div className="lg:w-1/2 w-full lg:px-4">
              <p className="text-base leading-relaxed mb-5">
                {content.paragraphs[0]}
              </p>
              <p className="text-base leading-relaxed mb-5">
                {content.paragraphs[1]}
                <span className="text-[#A1CF5F] underline">{content.highlightedPhrases.first}</span>,{" "}
                <span className="text-[#A1CF5F] underline">{content.highlightedPhrases.second}</span>, and more.
              </p>
              <p className="text-base leading-relaxed">
                {content.paragraphs[2]}
              </p>
            </div>
          </div>

          <hr className="border-[#393939] mb-16" />

          <div className="">
            <h3 className="text-3xl lg:text-5xl font-sans font-bold leading-tight max-w-[600px] mb-20">
              {content.focusHeading}
            </h3>

            {/* Focus Areas Section */}
            <div className="flex flex-wrap lg:-mx-4">
              {/* Text */}
              <div className="lg:w-2/5 w-full lg:px-4 mb-10 lg:mb-0">
                <ul className="space-y-6 text-lg">
                  {content.focusAreas.map((item, index) => (
                    <li key={index} className="font-sans text-xl">
                      <span className="text-[#A1CF5F] font-sans font-bold text-4xl">{item.number}</span><br />
                      {item.text.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="lg:w-3/5 w-full lg:px-4">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  width={800}
                  height={500}
                  className="rounded-lg w-full"
                />
                <p className="mt-10 text-xl text-gray-300 max-w-[610]">
                  {content.impactNote}
                </p>
                <button className="mt-5 bg-[#A1CF5F] text-black text-sm px-6 py-3 rounded font-bold font-sans transition">
                  {content.button.label} <span className="ml-1">{content.button.icon}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
