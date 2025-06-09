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
    videoThumbnail: '/outcome.png',
    videoUrl: 'https://www.youtube.com/watch?v=bjxTIcuzB6k',
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

       <section className="lg:pb-28 pb-16">
        <div className="container">
            <VideoBanner 
                thumbnail={videoData.videoThumbnail}
                videoUrl={videoData.videoUrl}
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
