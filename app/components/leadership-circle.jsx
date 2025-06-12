import Image from 'next/image';

const leadershipCircleData = {
  heading: 'Empowering Change Through Leadership Circle',
  paragraphs: [
    `Are you a leader wondering how you can live out your faith in the workplace?`,
    `Perhaps you heard about the separation of church and state and have concluded that you are not allowed to bring your faith into your work. Perhaps you only think that evangelism is the only way to bring your faith to work. Leadership Circle offers you an opportunity to discover, together with a small group of peers, the truth about integrating your faith, work and life.`,
    `Leadership Circles have already equipped more than 400 alumni from different denominational, cultural and demographic backgrounds. These gatherings are of workplace leaders from all spheres of society (i.e., economics, education, government, family, media, celebration and religion). Alumni have initiated projects that impact their communities and companies because they are called to action with Renewal Projects.`
  ],
  images: [
    {
      src: '/leader1.jpg',
      alt: 'Leadership circle group 1',
    },
    {
      src: '/leader2.jpg',
      alt: 'Leadership circle group 2',
    },
  ],
};

export default function LeadershipCircle() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-bold  text-center mb-14 max-w-[850px] mx-auto">
          {leadershipCircleData.heading}
        </h2>

        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/4 w-full self-start max-lg:mb-8">
            <Image
              src={leadershipCircleData.images[0].src}
              alt={leadershipCircleData.images[0].alt}
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </div>

          <div className="lg:w-2/4 w-full lg:px-10 max-lg:mb-8">
            <div className="max-w-[630px] mx-auto">
                {leadershipCircleData.paragraphs.map((para, index) => (
                <p key={index} className="mb-4 text-base md:text-lg ">
                    {para}
                </p>
                ))}
            </div>
          </div>

          <div className="lg:w-1/4 w-full self-end">
            <Image
              src={leadershipCircleData.images[1].src}
              alt={leadershipCircleData.images[1].alt}
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
