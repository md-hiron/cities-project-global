import Image from 'next/image';
import Link from 'next/link';

const vantageData = {
  logo: '/vantagepoint.png',
  quote: {
    text: '“Where we stand and who we are make a great deal of difference in how we see the world around us”',
    author: 'C.S. Lewis',
  },
  heading: 'A Small Group\n Discussion Series',
  offer: {
    title: 'Explore VantagePoint™ Now',
    description: 'This keeps it concise and action-driven.',
    price: '$24.99',
    button: {
      label: 'Buy Now',
      link: '#',
    },
  },
  backgroundImage: '/greentownbg.jpg',
};

export default function VantagePointSection() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4">
        <div className="lg:flex justify-between items-end mb-14">
            <div className="max-lg:mb-8 max-w-[410px]">
                <Image src={vantageData.logo} alt="VantagePoint Logo" width={350} height={170} />
                <p className="mt-5">{vantageData.quote.text}</p>
                <p>{vantageData.quote.author}</p>
            </div>
            <div>
                <h2 className="text-3xl lg:text-4xl font-sans font-bold lg:text-right whitespace-pre-line">{vantageData.heading}</h2>
            </div>
        </div>
        <div
          className="relative bg-cover bg-center rounded overflow-hidden"
          style={{ backgroundImage: `url(${vantageData.backgroundImage})` }}
        >
          
          <div className="relative z-10 flex flex-wrap items-center justify-end min-h-[400px] p-6 md:p-12">
            <div className="bg-white p-6 md:p-8 rounded-md text-left max-w-sm shadow-lg">
              <h3 className="text-2xl font-sans font-semibold mb-2">{vantageData.offer.title}</h3>
              <p className="mb-4">{vantageData.offer.description}</p>
              <div className="text-4xl font-sans font-bold text-black mb-4">{vantageData.offer.price}</div>
              <Link
                href={vantageData.offer.button.link}
                className="inline-block bg-[#A1CF5F] px-6 py-3 rounded font-sans font-bold text-sm"
              >
                {vantageData.offer.button.label} <span className="ml-1">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
