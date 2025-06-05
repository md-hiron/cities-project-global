'use client';

import FAQs from "@/app/components/faq";
import KnowledgeHubSection from "@/app/components/knoledge-hub";
import ProgramsSection from "@/app/components/program";
import PurposeSection from "@/app/components/purpose";


export default function WhatWeDo() {
  return (
    <>
       <PurposeSection />
       <ProgramsSection />
       <KnowledgeHubSection />
       <FAQs />
    </>
    
  );
}
