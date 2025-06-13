import Image from 'next/image';
import Button from '../sub-components/button';

const content = {
  heading: 'Empowering Change Moving Into Action to Impact Cities and Communities',
  intro: `As you read the articles in the book, when you find your mind and heart stimulated, consider two different actions:`,
  actionText: `Find something around you that breaks God’s heart; if it also breaks your heart, determine what you can do to move it closer to how it ought to be, and then begin to do it;`,
  callout: {
    text: 'If you want help on your journey, consider registering with us.',
    button: {
      text: 'Join Us',
      url: '#',
      type: 'url',
      variant: 'outline',
    },
  },
  image1: '/book-author.jpg',
  image2: '/book-banner.jpg',
};

export default function BookFeature() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="max-w-[728px] md:pr-1">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
              {content.heading}
            </h2>
          </div>
          <div className="max-w-[340px]">
            <hr className="border-black w-full mb-4" />
            <p>{content.intro}</p>
          </div>
        </div>
        <div className="max-w-[950px] ml-auto md:flex relative">
            <div className="md:w-2/3 bg-[#B8EA81] md:p-12 p-8 h-[330px] flex items-center">
                <p className="font-medium text-xl max-w-[473px]">{content.actionText}</p>
            </div>
            <div className="md:w-1/3 bg-black flex items-center p-8">
                <div>
                    <p className="font-bold text-lg text-white mb-4">{content.callout.text}</p>
                    <Button 
                        text={content.callout.button.text}
                        url={content.callout.button.url}
                        classes="!bg-white !text-black"
                    />
                </div>
            </div>
        </div>
        <div className="lg:flex lg:-mx-4 lg:-mt-20">
            <div className="lg:w-1/3 lg:px-4 max-lg:mb-5">
                <Image 
                    src={content.image1}
                    width={436}
                    height={436}
                    className="w-full"
                />
            </div>
            <div className="lg:w-2/3 lg:px-4">
                <Image 
                    src={content.image2}
                    width={1018}
                    height={436}
                    className="w-full"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
