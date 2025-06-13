import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function SinglePostHead() {
  return (
    <section className="lg:py-20 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-4/5 max-lg:mb-10">
                <div className="md:flex gap-4">
                    <span className="bg-black text-white text-xs font-bold px-4 py-1 self-start rounded-full mt-4">
                    FEATURED
                    </span>
                    <div className="md:pl-10">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                            Building Community <br /> Around the Common Good
                        </h1>
                        <p className="text-lg lg:text-2xl max-w-[540px]">
                            You don’t have to search the Bible for very long to find passages highlighting
                            the value and importance of community.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column - 1/5 */}
            <div className="w-full lg:w-1/5 border-l pl-8 border-black h-full self-end">
                <div className="h-full flex flex-col justify-end">
                    <p className="lg:text-6xl text-4xl font-bold">19</p>
                    <p>December 2022</p>
                    <div className="mt-6 flex">
                        <p className="text-sm font-bold mb-2 pr-3">Share</p>
                        <div className="flex gap-4 text-xl">
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
