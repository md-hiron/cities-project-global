import FeaturedPost from "@/app/components/blog-components/featured-post";
import PostGrid from "@/app/components/blog-components/post-grid";
import Subscribe from "@/app/components/subscribe";

export default function Blogs() {
  return (
    <>
        <section className="lg:py-20 py-16">
            <h1 className="font-bold text-4xl lg:text-6xl max-w-[700px] mx-auto text-center">The Intersection Faith, Work, Cities</h1>
        </section>
        <FeaturedPost />
        <PostGrid />
        <Subscribe />
    </>
    
  );
}
