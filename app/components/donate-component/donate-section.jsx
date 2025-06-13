// components/DonateSection.jsx
import Image from 'next/image';
import { ArrowUpRight, Currency } from 'lucide-react';

const content = {
  heading: 'Donate Now',
  subheading:
    'Your donation will equip Christian leaders to make a lasting impact in their workplaces and communities.',
  currency: '$',
  amount: '0',
  message: 'Empower Communities Your Gift Makes an Impact',
  options: {
    frequency: 'Give This Weekly',
    startDate: 'Starting Monday, September 23. 24',
    method: 'Give by CH Bank Transfer',
  },
  buttonText: 'Continue',
  image: '/donate.png',
};

export default function DonateSection() {
  return (
    <section className="lg:py-20 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-4">{content.heading}</h1>
        <p className="text-center mb-14 max-w-2xl mx-auto">{content.subheading}</p>

        <div className="flex flex-wrap lg:-mx-5">
          {/* Left Side: Donation Form */}
          <div className="w-full lg:w-1/2 lg:px-5">
            <div className="rounded-lg border border-[#E2E2E2] lg:px-16 px-8 lg:py-20 py-10">
                <div className="text-center my-6 max-w-[370px] mx-auto">
                    <p className="text-5xl lg:text-[96px] font-normal">{content.currency} <span className="font-extralight text-[#919191]">{content.amount}</span></p>
                    <p className="text-xl font-bold mt-2">{content.message}</p>
                </div>

                <form className="space-y-4 border border-[#E2E2E2] p-8">
                    <select className="w-full border-b border-[#E2E2E2] px-4 py-3 rounded">
                        <option>{content.options.frequency}</option>
                    </select>
                    <select className="w-full border-b border-[#E2E2E2] px-4 py-3 ">
                        <option>{content.options.startDate}</option>
                    </select>
                    <select className="w-full border-b border-[#E2E2E2] px-4 py-3 ">
                        <option>{content.options.method}</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-[#A1CF5F] mt-12 text-black font-bold text-sm px-6 py-3 rounded flex items-center justify-center gap-1 w-full transition"
                    >
                        {content.buttonText} <ArrowUpRight size={15} />
                    </button>
                </form>
            </div>
          </div>

          {/* Right Side: Image Only */}
          <div className="w-full lg:w-1/2 lg:px-5 max-lg:mt-10">
            <Image
                src={content.image}
                alt="Donate visual"
                layout="responsive"
                width={733}
                height={791}
                className="object-cover rounded w-full"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
