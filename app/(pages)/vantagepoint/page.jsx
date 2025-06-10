import SmallGroupSeries from "@/app/components/small-group";
import Subscribe from "@/app/components/subscribe";
import VantagePointSection from "@/app/components/vantagepoint";
import VantagePointJourney from "@/app/components/vantagepoint-journey";
import VantagePointPricing from "@/app/components/vantagepoint-pricing";
import VoicesOfChangeSection from "@/app/components/voices-of-change";

export default function Vantagepoint() {
  return (
    <>
       <VantagePointSection />
       <VoicesOfChangeSection />
       {/* <VantagePointJourney /> */}
       <SmallGroupSeries />
       <VantagePointPricing />
       <Subscribe />
    </>
    
  );
}
