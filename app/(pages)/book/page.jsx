import BookCriticReview from "@/app/components/book-components/book-critic-review";
import BookFeature from "@/app/components/book-components/book-feature";
import BookHero from "@/app/components/book-components/book-hero";
import BookReview from "@/app/components/book-components/book-review";
import NewBook from "@/app/components/book-components/new-book";
import WholeSelf from "@/app/components/book-components/whole-self";
import PartnerLogosSection from "@/app/components/partners";
import VideoBanner from "@/app/components/sub-components/video-banner";
import Subscribe from "@/app/components/subscribe";
const videoData = {
    videoThumbnail: '/video-thumb.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=bjxTIcuzB6k',
    title: 'CPG \nOutcomes',
    text: 'For decades now, I have witnessed the near non-existence of the practical intersection between faith and work.',
    speakerImage: '/speaker.png',
    speakerName: 'Bob Varney',
    speakerRole: 'Cities Project Global CEO, President'
}
const partners = [
    { src: '/partners/bgu.png', link: '#' },
    { src: '/partners/cru.png', link: '#' },
    { src: '/partners/fwe.png', link: '#' },
    { src: '/partners/imb.png', link: '#' },
    { src: '/partners/integrous.png', link: '#' },
    { src: '/partners/leadership.png', link: '#' },
    { src: '/partners/ywamkona.png', link: '#' },
    { src: '/partners/uofn.png', link: '#' },
];
export default function Book(){
    return(
        <>
            <BookHero />
            <NewBook />
            <BookReview />
            <section className='lg:py-28 py-16'>
                <div className="container mx-auto px-4">
                    <VideoBanner 
                        backgroundImage={videoData.videoThumbnail}
                        videoUrl={videoData.videoUrl}
                        title={videoData.title}
                        description={videoData.text}
                        speakerImage={videoData.speakerImage}
                        speakerName={videoData.speakerName}
                        speakerRole={videoData.speakerRole}
                    />
                </div>
            </section>
            <BookCriticReview />
            <WholeSelf />
            <BookFeature />
            <PartnerLogosSection 
                logos={partners}
                title="Our Partners"
                boxLink={true}
                ctaText="Become a Partner"
                ctaSubText="Join Now!"
                subtitle="Be the first to know about Cities Project Global news, programs, and impact"
            />
            <Subscribe />
        </>
    )
}