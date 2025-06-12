import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from 'react-icons/fa';

const content = {
  heading: 'Who is This Program Right For?',
  columns: [
    `The Leadership Circle is often best fit for mid to late career leaders who can commit the time to participate. But don’t let the term “leader” deter you if you’re not sure that describes you.

While the term “leader” may describe someone who holds an executive title or senior level position, we also define a leader as someone who is well positioned for potential impact. We talk about workplace impact often, but your potential for impact in a non-work-related community (such as your church, school, association, etc.) is equally valid.

We have had entrepreneurs, artists, coaches, public servants, and people from many different backgrounds come through the Leadership Circle and find it very enriching.`,
    `We look for a balance of men and women from a broad range of professions and diverse cultural backgrounds with varying levels of leadership and responsibility.

If you’re not sure, please apply anyway – you will have the opportunity to speak to one of our facilitators to explore your questions further.`
  ],
  socialSection: {
    heading: 'See What’s Happening in Real Time',
    subtext: 'Stay connected with us through All major social media channels!',
    icons: [
      { icon: <FaFacebookF />, link: '#' },
      { icon: <FaLinkedinIn />, link: '#' },
      { icon: <FaInstagram />, link: '#' },
      { icon: <FaYoutube />, link: '#' }
    ]
  },
  image: {
    src: '/program-for-who.png',
  }
};

export default function ProgramForWho() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold  mb-14 max-w-[500px]">
          {content.heading}
        </h2>
        <div className="flex flex-wrap lg:-mx-8 mb-20">
          {content.columns.map((col, index) => (
            <div key={index} className="lg:w-1/2 w-full lg:px-8 mb-10 lg:mb-0 whitespace-pre-line text-base leading-relaxed  text-black">
              {col}
            </div>
          ))}
        </div>

        {/* Social Section */}
        <div className="flex flex-wrap lg:-mx-4 items-center">
          <div className="lg:w-1/2 w-full lg:px-4 mb-10 lg:mb-0">
            <h3 className="text-base  font-bold mb-2">
              {content.socialSection.heading}
            </h3>
            <hr className="border-black w-2/3 mb-4" />
            <p className="mb-6 max-w-[300px]">{content.socialSection.subtext}</p>
            <div className="flex space-x-4 text-black text-2xl">
              {content.socialSection.icons.map((item, i) => (
                <a key={i} href={item.link} className="hover:text-gray-600 transition">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full lg:px-4">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={800}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
