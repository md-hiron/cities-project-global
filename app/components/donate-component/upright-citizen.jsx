import Image from 'next/image';

const content = {
  image: '/citizen.jpg',
  quote: 'Upright citizens are good for a city and make it prosper',
  reference: '(Prov 11:11a)',
  description:
    'Your donation will help Christian leaders in the workplace learn HOW to be the salt and light God intended. We are helping leaders bless their cities, change their nations, and spread to everyone a desire to know God.',
};

export default function UprightCitizen() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[930px]">
            <div className="md:flex items-end justify-between">
                <Image 
                    src="/quote.svg"
                    width={107}
                    height={68}
                />
                <Image 
                    src={content.image}
                    width={646}
                    height={431}
                    className="max-md:pl-5 rounded-md"
                />
            </div>
            <h2 className="max-w-[688px] !font-display font-normal lg:text-4xl text-3xl mt-12">{content.quote}</h2>
            <div className="md:flex mt-10">
                <h3 className="w-[270px] !font-display font-normal text-[#A1CF5F] lg:text-3xl text-2xl">{content.reference}</h3>
                <div className="mt-5 w-full">
                    <div className="w-[125px] border-b mb-8"></div>
                    <p className="md:text-2xl text-lg">Your donation will help Christian  leaders in the workplace learn HOW to be the salt and light God  intended. We are helping leaders bless their cities, change their  nations, and spread to everyone a desire to know God.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
