import VideoBanner from "./sub-components/video-banner";

const serveContent = {
  backgroundImage: '/serve-bg.png',
  heading: 'Why We Serve You',
  description:
    'We see a world where Jesus-followers in every sphere of society live out their calling, transforming their workplaces and communities into flourishing centers for the common good of all people.',
  emphasis: 'Just as God Intended',
  videoThumbnail: '/video-thumb.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=bjxTIcuzB6k',
  title: 'Begin to live \nPurposefully',
  text: 'For decades now, I have witnessed the near non-existence of the practical intersection between faith and work.',
};

export default function WhyWeServe() {
  return (
    <section
      className="bg-cover bg-center lg:py-28 py-16"
      style={{ backgroundImage: `url(${serveContent.backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[1200px] mx-auto mb-14">
          <h2 className="text-2xl md:text-4xl  font-bold mb-12">
            {serveContent.heading}
          </h2>
          <p className="md:text-4xl text-2xl text-black  font-normal">
            {serveContent.description}
          </p>
          <p className="text-2xl md:text-4xl  font-bold text-[#A1CF5F] mt-8">
            {serveContent.emphasis}
          </p>
        </div>
        
        <VideoBanner 
          backgroundImage={serveContent.videoThumbnail}
          videoUrl={serveContent.videoUrl}
          title={serveContent.title}
          description={serveContent.text}
          speakerImage={serveContent.speakerImage}
          speakerName={serveContent.speakerName}
          speakerRole={serveContent.speakerRole}
        />
      </div>
    </section>
  );
}
