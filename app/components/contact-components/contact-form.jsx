import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import BoxLink from '../sub-components/box-link';

const joinData = {
  heading: 'Get in Touch \nwith Cities Project Global',
  description:
    "We're here to support and collaborate. Reach out with your questions, feedback, or partnership inquiries, and we'll get back to you as soon as possible.",
  program: {
    text: 'Explore Our Impactful Programs',
    linkText: 'Join Now!',
    href: '#',
  },
  leftImage: '/happy-hands.jpg',
  badgeImage: '/contact-img.png',
  communityHeading: 'JOIN OUR COMMUNITY OF CULTUREMAKERS',
  communityText:
    'Be the first to know about Cities Project Global news, programs, and impact',
  form: {
    title: 'Become a Culturemaker\nJoin Us Today!',
    confirmTitle: 'Please Confirm *',
    confirmLabel: 'I want to subscribe to all CPG emails',
    submitText: 'Submit',
  },
};

export default function ContactForm() {
  return (
    <section className="py-16 lg:py-28 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="lg:flex justify-between">
            <div className="lg:w-3/4 w-full lg:pr-5 max-lg:mb-10">
                <div className="max-w-[1010px]">
                    <h2 className="text-4xl lg:text-5xl font-bold  mb-4 whitespace-pre-wrap">
                        {joinData.heading}
                    </h2>
                    <p className="lg:text-2xl text-lg">{joinData.description}</p>
                </div>
            </div>
            <div className="w-full lg:w-1/4 relative">
                <BoxLink 
                    title={joinData.program.text}
                    text={joinData.program.linkText}
                />
                <Image
                    src={joinData.badgeImage}
                    width={155}
                    height={190}
                    className="ml-auto mr-[175px]"
                />
            </div>
        </div>

        {/* Main Flex Section */}
        <div className="flex flex-wrap bg-[#F7F7F7] rounded overflow-hidden -mt-10">
            {/* Left Image */}
            <div className="w-full lg:w-1/5">
                <div className="h-[150px]"></div>
                <Image
                src={joinData.leftImage}
                alt="Group hands"
                width={300}
                height={520}
                className="w-full h-full object-cover"
                />
            </div>

            {/* Community Message */}
            <div className="w-full lg:w-2/5 border-x border-[#D0D0D0]">
                <div className="h-[151px] w-[130px] border-b border-[#D0D0D0]"></div>
                <div className="lg:p-20 p-10">
                    <h3 className="!font-display font-normal lg:text-6xl text-4xl mb-3 leading-tight">
                        {joinData.communityHeading}
                    </h3>
                    <p className="lg:text-2xl text-xl">
                        {joinData.communityText}
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-2/5 p-10">
                <div className="lg:h-[150px]"></div>
                <div className="max-w-[460px] mx-auto">
                    <h4 className="text-xl lg:text-2xl  font-bold mb-6 whitespace-pre-wrap">
                        {joinData.form.title}
                    </h4>
                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border-b border-[#555555] bg-transparent  lg:text-xl text-lg text-[#808080] outline-none py-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border-b border-[#555555] bg-transparent  lg:text-xl text-lg text-[#808080] outline-none py-2"
                        />
                        <div className="mt-14">
                            <h3 className=" font-normal lg:text-xl mb-3">{joinData.form.confirmTitle}</h3>
                            <label className="flex items-center text-sm space-x-2">
                                <input type="checkbox" className="accent-[#A1CF5F]" />
                                <span className=" text-[#808080] lg:text-xl">{joinData.form.confirmLabel}</span>
                            </label>
                        </div>
                        
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-[#A1CF5F] text-black font-bold px-6 py-3 text-sm rounded hover:bg-[#8fba50] transition"
                        >
                            {joinData.form.submitText} <ArrowUpRight size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
