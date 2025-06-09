import VideoBanner from "./sub-components/video-banner";


const serveContent = {
  backgroundImage: '/serve-bg.png',
  heading: 'Why We Serve You',
  description:
    'We see a world where Jesus-followers in every sphere of society live out their calling, transforming their workplaces and communities into flourishing centers for the common good of all people.',
  emphasis: 'Just as God Intended',
  videoThumbnail: '/serve-video-banner.png',
  videoUrl: 'https://www.youtube.com/watch?v=bjxTIcuzB6k',
};

export default function WhyWeServe() {
  return (
    <section
      className="bg-cover bg-center lg:py-28 py-16"
      style={{ backgroundImage: `url(${serveContent.backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-sans font-bold mb-12">
            {serveContent.heading}
          </h2>
          <p className="md:text-4xl text-2xl text-black font-sans font-normal">
            {serveContent.description}
          </p>
          <p className="text-2xl md:text-4xl font-sans font-bold text-[#A1CF5F] mt-8">
            {serveContent.emphasis}
          </p>
        </div>
        
        <VideoBanner
          thumbnail={serveContent.videoThumbnail}
          videoUrl={serveContent.videoUrl}
        />
      </div>
    </section>
  );
}
