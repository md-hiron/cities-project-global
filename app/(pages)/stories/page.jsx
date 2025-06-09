import Banner from "@/app/components/banner";
import SocialMediaShowcase from "@/app/components/social-showcase";
import StoriesBlog from "@/app/components/story-blog";
import VideoTestimony from "@/app/components/video-testimony";


export default function Stories() {
  return (
    <>
       <VideoTestimony />
       <Banner />
       <StoriesBlog />
       <SocialMediaShowcase />
    </>
    
  );
}
