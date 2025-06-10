import Image from 'next/image';
import Link from 'next/link';

const pricingContent = {
  price: '$24.99',
  product: 'VantagePoint™',
  description: 'One purchase is valid for a group of up to eight participants',
  button: {
    text: 'Buy Now',
    link: '#',
  },
  note: `Upon purchase, you will receive an email with immediate access to VantagePoint™. Each purchase is valid for one small group of up to eight people. The material may be distributed to participants via email forwarding, file sharing, or printed copies.`,
  images: {
    left: '/pricing.jpg',
    right: '/pricing2.jpg',
  },
};

export default function VantagePointPricing() {
  return (
    <section className="lg:pb-28 pb-16">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-stretch w-full border-[10px] border-black">
                {/* Left Image */}
                <div className="w-full lg:w-1/4">
                <Image
                    src={pricingContent.images.left}
                    alt="Group laughing"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                />
                </div>

                {/* Middle Pricing Section */}
                <div className="w-full lg:w-2/4 bg-[#F5F0D6]">
                    <div className="bg-[#263519] text-center text-white px-8 py-20 relative border-b-[6px] border-[#A1CF5F]">
                        <h2 className="lg:text-[96px] text-6xl font-normal font-display text-[#A1CF5F] mb-2">{pricingContent.price}</h2>
                        <h3 className="text-4xl font-normal font-display text-white mb-4">{pricingContent.product}</h3>
                        <p className="text-xl mb-6">{pricingContent.description}</p>
                        <Link
                            href={pricingContent.button.link}
                            className="inline-block bg-[#A1CF5F] text-black font-bold py-3 px-6 font-sans rounded"
                        >
                            {pricingContent.button.text} <span className="ml-1">↗</span>
                        </Link>
                    </div>
                    

                    {/* Note Area */}
                    <div className="font-sans text-left text-sm px-4 py-8 w-full">
                        <span className="font-bold block mb-1">Note:</span>
                        {pricingContent.note}
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/4">
                <Image
                    src={pricingContent.images.right}
                    alt="Man smiling with tablet"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                />
                </div>
            </div>
        </div>
    </section>
  );
}
