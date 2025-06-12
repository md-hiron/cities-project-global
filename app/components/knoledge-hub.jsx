import Image from 'next/image';
import Link from 'next/link';

const knowledgeData = {
  articles: {
    cards: [
      {
        title: 'An Excerpt From Our Small Group Study VantagePoint™',
        excerpt: 'An Excerpt From Our Small Group Study VantagePoint™\nAn Excerpt From Our Small Group Study VantagePoint™\n\nAn Excerpt From Our Small Group Study VantagePoint™',
        date: 'Dec 19, 2022',
        image: '/article1.png',
        link: '#',
        buttonLabel: 'Read More',
      },
      {
        title: 'An Excerpt From Our Small Group Study VantagePoint™',
        excerpt: 'An Excerpt From Our Small Group Study VantagePoint™\nAn Excerpt From Our Small Group Study VantagePoint™\n\nAn Excerpt From Our Small Group Study VantagePoint™',
        date: 'Dec 19, 2022',
        image: '/article2.png',
        link: '#',
        buttonLabel: 'Read More',
      },
    ],
    excerpts: [
      'An Excerpt From Our Small Group Study VantagePoint™',
      'An Excerpt From Our Small Group Study VantagePoint™',
      'An Excerpt From Our Small Group Study VantagePoint™',
    ],
  },
  podcasts: {
    cards: [
      {
        title: 'An Excerpt From Our Small Group Study VantagePoint™',
        excerpt: 'An Excerpt From Our Small Group Study VantagePoint™\nAn Excerpt From Our Small Group Study VantagePoint™\n\nAn Excerpt From Our Small Group Study VantagePoint™',
        date: 'Dec 19, 2022',
        image: '/podcast1.png',
        link: '#',
        buttonLabel: 'Watch',
      },
      {
        title: 'An Excerpt From Our Small Group Study VantagePoint™',
        excerpt: 'An Excerpt From Our Small Group Study VantagePoint™\nAn Excerpt From Our Small Group Study VantagePoint™\n\nAn Excerpt From Our Small Group Study VantagePoint™',
        date: 'Dec 19, 2022',
        image: '/podcast2.png',
        link: '#',
        buttonLabel: 'Watch',
      },
    ],
    excerpts: [
      '',
      'An Excerpt From Our Small Group Study VantagePoint™',
      'An Excerpt From Our Small Group Study VantagePoint™',
    ],
  },
};

export default function KnowledgeHubSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl  font-bold mb-10">Knowledge Hub</h2>
        <div className="flex flex-wrap lg:-mx-6">
          {/* Articles */}
          <div className="w-full lg:w-1/2 lg:px-6 mb-10">
            <h3 className="lg:text-4xl text-2xl  font-bold mb-6">Articles</h3>
            <div className="flex flex-wrap md:-mx-3 ">
              {knowledgeData.articles.cards.map((item, index) => (
                <div key={index} className="w-full md:w-1/2 md:px-3 max-md:mb-8">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={350}
                      className="w-full object-cover"
                    />
                    <div className="py-10 px-5 border border-[#E2E2E2] border-t-0 rounded-b-lg">
                      <p className="text-sm  mb-3">{item.date}</p>
                      <p className=" font-normal text-xl mb-3">{item.title}</p>
                      <Link
                        href={item.link}
                        className="inline-block text-sm px-4 py-2 bg-[#A1CF5F] text-black  font-bold rounded hover:bg-[#92bc52] transition"
                      >
                        {item.buttonLabel} ↗
                      </Link>
                    </div>
                  </div>
                  <div className="blog-footer">
                    <p className=" text-xl whitespace-pre-line my-10">{item.excerpt}</p>
                    <Link href="#" className="font-bold  text-xl">All Articles</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Podcasts */}
          <div className="w-full lg:w-1/2 lg:px-6 mb-10">
            <h3 className="lg:text-4xl text-2xl  font-bold mb-6">Podcasts</h3>
            <div className="flex flex-wrap md:-mx-3 md:mb-6">
              {knowledgeData.podcasts.cards.map((item, index) => (
                <div key={index} className="w-full md:w-1/2 md:px-3 max-md:mb-8">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={350}
                      className="w-full"
                    />
                    <div className="py-10 px-5 border border-[#E2E2E2] border-t-0 rounded-b-lg">
                      <p className="text-sm  mb-3">{item.date}</p>
                      <p className=" font-normal text-xl mb-3">{item.title}</p>
                      <Link
                        href={item.link}
                        className="inline-block text-sm px-4 py-2 bg-[#A1CF5F] text-black  font-bold rounded hover:bg-[#92bc52] transition"
                      >
                        {item.buttonLabel} ↗
                      </Link>
                    </div>
                  </div>
                  <div className="blog-footer">
                    <p className=" text-xl whitespace-pre-line my-10">{item.excerpt}</p>
                    <Link href="#" className="font-bold  text-xl">All Podcasts</Link>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
