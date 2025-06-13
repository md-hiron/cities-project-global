import Image from 'next/image';
import Button from '../sub-components/button';

const insights = [
  {
    image: '/post.png',
    title: 'An Excerpt From Our Small Group Study VantagePoint™',
    description:
      'So much wisdom can be gained through simple shifts in perspective—and what if we told you that what many people see the Bible as a two-part story (fall and redemption)—it actually has four parts?',
    date: 'Dec 19, 2022',
    link: '#',
  },
  {
    image: '/post.png',
    title: 'Transformation Comes From Gaining Perspective, Not Just Information',
    description:
      'Have you ever sat through a lecture, presentation, or even a sermon, doing your best to listen and absorb the information',
    date: 'Dec 19, 2022',
    link: '#',
  },
  {
    image: '/post.png',
    title: 'Receiving and Reflecting God’s Inherent Love for Us',
    description:
      'Every year, February 14th comes as a reminder that we, as humans made in God’s image, are wired to give and receive love.',
    date: 'Dec 19, 2022',
    link: '#',
  },
  {
    image: '/post.png',
    title: 'In the Midst of War, Love Comes Through Action',
    description:
      'In recent days we have watched, collectively as a world, as Russia’s invasion of Ukraine has unfolded.',
    date: 'Dec 19, 2022',
    link: '#',
  },
];

export default function PostGrid() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold max-w-[480px]">
            Explore More <br /> Insights and Stories
          </h2>
          <div className="sm:flex items-center gap-3 mt-6 lg:mt-0">
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              ▶
            </div>
            <div className="max-sm:mt-3 sm:ml-5">
              <p className="font-bold pb-3 border-b">See What’s Happening in Real Time</p>
              <p className="pt-3">Stay connected with us through Instagram Reels!</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:-mx-4">
          {insights.map((post, index) => (
            <div key={index} className="w-full md:w-1/2 lg:px-4 mb-10">
              <div className="md:flex overflow-hidden h-full">
                {/* Left: Image */}
                <div className="w-full md:px-3 max-md:mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={347}
                    height={483}
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Right: Content */}
                <div className="w-full md:px-3">
                    <div className="flex flex-col justify-between h-full border border-[#E2E2E2] p-7">
                        <div>
                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                        </div>
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold mb-4 text-[#212121]">{post.title}</h3>
                            <p className="text-sm mb-5 text-[#414141]">{post.description}</p>
                            <Button text="Read More" url={post.url} type="url"/>
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




