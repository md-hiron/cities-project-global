import Image from 'next/image';
import HebraicTeaching from "@/app/components/hebraic-teaching";
import LeaderTestimony from "@/app/components/leader-testimony";
import LeadershipCircle from "@/app/components/leadership-circle";
import LeadershipJourney from "@/app/components/leadership-journey";
import ProgramTopics from "@/app/components/program-topics";
import TailoredSolutions from "@/app/components/tailored-solution";
import CityPhases from '@/app/components/city-phase';
import VideoBanner from '@/app/components/sub-components/video-banner';
import CompletionOutcomes from '@/app/components/complete-outcome';
import RenewalProjects from '@/app/components/renewal-projects';
import ProgramForWho from '@/app/components/program-for-who';
import Inquery from '@/app/components/inquery';
import Subscribe from '@/app/components/subscribe';

const videoData = {
  videoThumbnail: '/video-thumb.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=bjxTIcuzB6k',
  title: 'CPG \nOutcomes',
  text: 'For decades now, I have witnessed the near non-existence of the practical intersection between faith and work.',
  speakerImage: '/speaker.png',
  speakerName: 'Bob Varney',
  speakerRole: 'Cities Project Global CEO, President'
}

export default function WhatWeDo() {
  return (
    <>
       <LeadershipCircle />
       <LeaderTestimony />
       <LeadershipJourney />
       <TailoredSolutions />
       <HebraicTeaching />
       <ProgramTopics />
       <section className="py-16">
        <Image 
            src="/city-life.png"
            width={1630}
            height={790}
            className="mx-auto max-w-full"
        />
       </section>

       <CityPhases />

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
       

       <CompletionOutcomes />
       <RenewalProjects />
       <ProgramForWho />
       <Inquery />
       <Subscribe />

    </>
    
  );
}
