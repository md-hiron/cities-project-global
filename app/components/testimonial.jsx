import Image from 'next/image';

const sectionData = {
  title: 'The Intersection: Faith, Work, and Life',
  subtitle: "An Introduction to God’s Design for Integrated Living",
  bookImage: {
    src: '/book2.png',
    alt: 'The Intersection Book Cover',
    linkText: 'Read a Sample Chapter',
    linkHref: '#',
  },
  testimonials: [
    {
      name: 'John D. Beckett',
      role: 'Chairman, The Beckett Companies\nAuthor of Loving Monday',
      quote:
        'For decades now, I have witnessed the near non-existence of the practical intersection between faith and work. The sacred-secular divide is pervasive, rendering work forever inferior. The result is confusion and ineffectiveness as we try to straddle these two disconnected worlds. The call to return to God’s design is desperately needed, a message that can transform communities, cities, and nations. The book you hold in your hands is compact, memorable, and rich in wisdom. Properly applied, it can unlock a wonderful new freedom to be all God intended for you personally and for your work.',
      image: '/author.png',
    },
    {
      name: 'David Joel Hamilton',
      role:
        'Vice President for Strategic Innovation\nYouth with a Mission’s University of the Nations',
      quote:
        'Sometimes advancing the kingdom of God is relegated to religious activities on Sundays. Not so in this book. Bob Varney and Hugh Brandt show us in very practical and inspirational ways how people in every walk of life can advance God’s good purposes every day of the week. This is because God cares for what you do on Monday through Saturday as well. If Jesus is not Lord of all, he is not Lord at all. I encourage you to read this brief masterpiece with the intent of becoming a tsaddiq who will daily live a lifestyle of integrated kingdom service in his/her community.',
      image: '/author2.png',
    },
    {
      name: 'Samuel E. Chiang',
      role: 'Deputy Secretary General\nWorld Evangelical Alliance',
      quote:
        'This is a joyful gem of a book that invites every person to contemplate how they show up with God for their family, work, and earth-keeping, and then to live it out',
      image: '/author3.png',
    },
    {
      name: 'Brian Mueller',
      role: 'President \n Grand Canyon University',
      quote:
        'Drawing upon rich theological concepts, the book explores the deep-rooted connection between faith and work, unraveling biblical teachings and shedding light on the original Hebrew words that shape our understanding of vocation, community, and each person’s unique place in it all',
      image: '/author4.png',
    },
  ],
};

export default function Testimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-sans mb-2">
            {sectionData.title}
          </h2>
          <p className="text-lg font-sans">{sectionData.subtitle}</p>
        </div>

        <div className="flex flex-wrap lg:-mx-4 mb-12 justify-center">
          <div className="w-full lg:w-1/3 lg:px-4 mb-8">
            <a
                href={sectionData.bookImage.linkHref}
                className="block"
            >
              <Image
                src={sectionData.bookImage.src}
                alt={sectionData.bookImage.alt}
                width={535}
                height={445}
                className="w-full"
              />
            </a>
          </div>
          <div className="w-full lg:w-2/3 lg:px-4">
            <div className="bg-gradient-to-b from-[#f7f7f7] to-white p-6 shadow-[0_4px_10px_rgba(82,82,82,0.1)] rounded-xl min-h-[390px]">
                <Image
                    src="/Stars.png"
                    width={80}
                    height={30}
                    className='mx-auto mb-3'
                />
              <p className="font-sans mb-6">
                {sectionData.testimonials[0].quote}
              </p>
              <div className="text-center">
                <Image
                    src={sectionData.testimonials[0].image}
                    width={60}
                    height={60}
                    className='mx-auto mb-2'
                />
                <p className="font-sans font-semibold text-xl text-[#2C2C2C]">{sectionData.testimonials[0].name}</p>
                <p className="text-sm text-[#5A5A5A] whitespace-pre-line">{sectionData.testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:-mx-4 justify-center">
          {sectionData.testimonials.slice(1).map((testimonial, index) => (
            <div key={index} className="w-full lg:w-1/3 lg:px-4 max-lg:mb-8">
              <div className="bg-gradient-to-b from-[#f7f7f7] to-white p-6 shadow-[0_4px_10px_rgba(82,82,82,0.1)] rounded-xl">
                <Image
                    src="/Stars.png"
                    width={80}
                    height={30}
                    className='mx-auto mb-3'
                />
                <p className="font-sans mb-6">
                  {testimonial.quote}
                </p>
                <div className="text-center">
                    <Image
                        src={testimonial.image}
                        width={60}
                        height={60}
                        className='mx-auto mb-2'
                    />
                  <p className="font-sans font-semibold text-xl text-[#2C2C2C] mb-2">{testimonial.name}</p>
                  <p className="text-sm font-sans text-[#5A5A5A] whitespace-pre-line">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}