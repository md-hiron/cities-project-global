'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FileText, ExternalLink } from 'lucide-react';

const journeyData = {
  headline: 'Embark on a Transformative Journey Integrating Faith, Work and Life',
  verse: 'When the righteous prosper, the city rejoices. Pr 11:10',
  description:
    'Righteous leaders change their cities through justice, love, and working for the common good of all – this is part of the foundation of what we teach at Cities Project Global.',
  buttonText: 'Apply Now',
  buttonUrl: '#',
  image: '/woman.jpg', // Make sure this image exists in your /public directory
  overlays: [
    {
      title: 'Global Leadership Circle',
      description: 'To learn more about the upcoming Global Leadership Circle.',
      linkText: 'View Now',
      linkUrl: '#',
      bg: 'bg-[#B8EA81]',
      buttonBg: 'bg-white',
      buttonTextColor: 'text-black',
    },
    {
      title: 'Denver Leadership Circle',
      description: 'To learn more about the upcoming Denver Leadership Circle',
      linkText: 'View Now',
      linkUrl: '#',
      bg: 'bg-white',
      buttonBg: 'bg-[#A1CF5F]',
      buttonTextColor: 'text-black',
    },
  ],  
};

export default function LeadershipJourney() {
  return (
    <section className="py-16 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:-mx-4 items-stretch">
          {/* Left Panel */}
          <div className="lg:w-1/3 w-full lg:px-4 bg-black text-white p-10 rounded-md flex flex-col justify-center">
            <div className="max-w-[430px] mx-auto">
                <h2 className="text-3xl text-center font-bold mb-8">
                    {journeyData.headline}
                </h2>
                <div className="mb-8 flex items-center">
                    <div className="border-b border-[#323232] w-full h-[1px]"></div>
                    <div className="px-5">
                        <Image
                            src="/anchor.png"
                            alt="Faith Icon"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="border-b border-[#323232] w-full h-[1px]"></div>
                </div>
                <p className="fon-sans text-center mb-4">{journeyData.verse}</p>
                <p className="font-sans text-center mb-8">{journeyData.description}</p>
                <div className="text-center">
                    <Link
                        href={journeyData.buttonUrl}
                        className="inline-flex items-center bg-[#A1CF5F] text-black px-6 py-3 font-bold font-sans text-sm rounded hover:bg-[#b3e77d] transition"
                        >
                        {journeyData.buttonText}
                        <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:w-2/3 w-full lg:px-4 mt-8 lg:mt-0 relative">
            <div className="relative w-full h-full rounded-md md:overflow-hidden">
              <Image
                src={journeyData.image}
                alt="People"
                width={800}
                height={600}
                className="w-full md:h-full md:object-cover"
              />
              <div className="md:absolute bottom-6 right-6 md:flex md:flex-col md:gap-4">
              {journeyData.overlays.map((card, index) => (
                <div
                    key={index}
                    className={`relative p-5 pt-8 w-[300px] rounded shadow-md max-md:mx-auto max-md:mt-5 ${card.bg}`}
                >
                    <h3 className="font-bold font-sans text-2xl mb-1">{card.title}</h3>
                    <p className="font-sans mb-3">{card.description}</p>
                    <Link
                    href={card.linkUrl}
                    className={`inline-flex items-center text-sm font-sans font-bold px-6 py-3 rounded hover:bg-[#b3e77d] transition ${card.buttonBg} ${card.buttonTextColor}`}
                    >
                    {card.linkText}
                        <ExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                    <div className="absolute bottom-2 right-2">
                        <FileText className="w-4 h-4 text-black opacity-50" />
                    </div>
                </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
