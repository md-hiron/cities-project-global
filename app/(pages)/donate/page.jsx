import AwakenCitizen from "@/app/components/donate-component/awaken-citizen";
import CitizenGallery from "@/app/components/donate-component/citizen-gallery";
import DonateSection from "@/app/components/donate-component/donate-section";
import TextDivider from "@/app/components/donate-component/text-divider";
import UprightCitizen from "@/app/components/donate-component/upright-citizen";
import Subscribe from "@/app/components/subscribe";

export default function Donate(){
    return(
        <>
            <DonateSection />
            <UprightCitizen />
            <CitizenGallery />
            <TextDivider />
            <AwakenCitizen />
            <Subscribe />
        </>
    )
}