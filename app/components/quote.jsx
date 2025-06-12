import Image from 'next/image';

const quoteContent = {
  heading: `GOD CARES NOT ONLY ABOUT \nREDEEMING SOULS BUT ALSO ABOUT\nRESTORING HIS CREATION . . .`,
  paragraph:
    'We are called to help sustain and renew his creation, to uphold the created institutions of family and society, to pursue science and scholarship, to create works of art and beauty, and to heal and help those suffering from the results of the Fall.',
  citation: {
    author: 'Charles Colson & Nancy Pearcey',
    source: 'How then shall we live?',
  },
  image: {
    src: '/forest.png',
    alt: 'Forest',
    width: 740,
    height: 380,
  },
};

export default function QuoteSection() {
  return (
    <section className="lg:py-24 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:-mx-4">
          {/* Text Content */}
          <div className="lg:w-1/2 w-full lg:px-4 max-lg:mb-8">
            <h2 className="text-2xl md:text-5xl !font-display font-normal text-[#252525] tracking-tight leading-tight mb-6 whitespace-pre-line">
              {quoteContent.heading}
            </h2>
            <p className="text-base  leading-relaxed mb-6 max-w-[660px]">
              {quoteContent.paragraph}
            </p>
            <div className="flex">
              <div className="w-10 mr-5 mt-3 border-t border-black"></div>
              <div>
                <p className=" font-bold text-xl">
                  {quoteContent.citation.author}
                </p>
                <p className=" text-base">
                  {quoteContent.citation.source}
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 w-full lg:px-4">
            <Image
              src={quoteContent.image.src}
              alt={quoteContent.image.alt}
              width={quoteContent.image.width}
              height={quoteContent.image.height}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
