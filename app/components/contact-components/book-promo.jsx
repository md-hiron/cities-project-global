import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const bookPromoData = {
  tag: 'Introducing a New Book',
  heading: 'Discover Our Latest Release – A Must-Read for Changemakers!',
  quote:
    'For decades now, I have witnessed the near non-existence of the practical intersection between faith and work.',
  buttons: [
    {
      text: 'Buy Now',
      href: '#',
      filled: true,
    },
    {
      text: 'Read a Sample Chapter',
      href: '#',
      filled: false,
    },
  ],
  images: {
    left: '/author-left.jpg', // Replace with actual image paths
    right: '/author-right.jpg',
  },
};

export default function BookPromoSection() {
  return (
    <section className="relative lg:py-28 py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Center Content */}
        <div className="text-center max-w-[610px] mx-auto">
          <div className="inline-block mb-4 px-4 py-1 border border-black rounded-full text-sm font-bold ">
            {bookPromoData.tag}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {bookPromoData.heading}
          </h2>
          <p className="text-lg lg:text-2xl mb-8">
            {bookPromoData.quote}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {bookPromoData.buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm  font-bold transition ${
                  btn.filled
                    ? 'bg-[#A1CF5F] text-black hover:bg-[#8fba50]'
                    : 'border border-black text-black hover:bg-gray-100'
                }`}
              >
                {btn.text} <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>
        {/* Left Angled Image */}
        <div className="hidden lg:block absolute left-5 bottom-10 z-0">
            <Image
            src={bookPromoData.images.left}
            alt="Author Left"
            width={200}
            height={200}
            />
        </div>

        {/* Right Angled Image */}
        <div className="hidden lg:block absolute right-5 top-10 z-0">
            <Image
            src={bookPromoData.images.right}
            alt="Author Right"
            width={200}
            height={200}
            />
        </div>
      </div>

      
    </section>
  );
}
