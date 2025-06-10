import Image from 'next/image';

const contentData = {
  heading: 'Why a small group discussion series?',
  description: `It's one thing to gain an understanding through absorbing information; listening to a sermon or reading a book can present challenging and valuable ideas. But at Cities Project Global, we believe the greatest transformation happens in community, and discussion gives people an understanding to more deeply challenge and process their own perspectives, as well as relate to beliefs and experiences shared by others.`,
  extraText: `A small group setting, within a trusted community or circle of friends, is the perfect place to begin a journey of discovery.`,
  images: [
    { src: '/small-group.png', width: 400, height: 400 },
    { src: '/small-group2.png', width: 250, height: 250 },
  ],
};

export default function SmallGroupSeries() {
  return (
    <section className="lg:py-24 py-16">
        <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/3 md:px-1 max-md:mb-2">
                    <Image
                        src={contentData.images[0].src}
                        width={contentData.images[0].width}
                        height={contentData.images[0].height}
                        className="rounded-lg w-full h-auto"
                    />
                </div>
                <div className="w-full md:w-2/3 md:px-1">
                    <div className="lg:py-20 lg:px-16 p-10 bg-[#F8F8F8] rounded">
                        <h2 className="lg:text-5xl text-3xl font-sans font-bold mb-5">{contentData.heading}</h2>
                        <p className="mb-4">{contentData.description}</p>
                        <p>{contentData.extraText}</p>
                    </div>
                    <Image
                        src={contentData.images[1].src}
                        alt="Portrait"
                        width={contentData.images[1].width}
                        height={contentData.images[1].height}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}
