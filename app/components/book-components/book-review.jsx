import Image from "next/image";
const quoteData = {
    quote: `Drawing upon rich theological concepts, the book explores the deep-rooted connection between faith and work, unraveling biblical teachings and shedding light on the original Hebrew words that shape our understanding of vocation, community, and each person’s unique place in it all`,
    author: 'Brian Mueller, LLD - President, Grand Canyon University',
  };
  
  export default function BookReview() {
    return (
      <section className="lg:py-28 py-16">
        <div className="container mx-auto px-4">
            <div className="max-w-[1110px] mx-auto text-center">
                <Image 
                    src="/quote.svg"
                    width={107}
                    height={68}
                    className="mx-auto mb-5"
                />
                <h3 className="text-3xl lg:text-5xl font-normal !font-display leading-snug">
                    {quoteData.quote}
                </h3>
                <p className="text-[#A1CF5F] mt-6 text-3xl font-normal !font-display">
                - {quoteData.author}
                </p>
            </div>
        </div>
      </section>
    );
  }
  