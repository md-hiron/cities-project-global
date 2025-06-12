import HeroSection from "./components/hero";
import ServeSection from "./components/serve";
import WhyWeServe from "./components/why-serve";
import PhilosophySection from "./components/philosophy";
import CultureMakersSection from "./components/culture-makers";
import SpheresOfSociety from "./components/spheres-society";
import QuoteSection from "./components/quote";
import SocialMediaSection from "./components/social";
import Subscribe from "./components/subscribe";
export default function Home() {
  return (
    <>
      <HeroSection/>
      <ServeSection/>
      <WhyWeServe />
      <PhilosophySection />
      <SpheresOfSociety />
      <CultureMakersSection />
      <QuoteSection />
      <SocialMediaSection />
      <Subscribe />
    </>
  );
}
