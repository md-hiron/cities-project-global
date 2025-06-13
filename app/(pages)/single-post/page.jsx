import RelatedPosts from "@/app/components/blog-components/related-posts";
import SinglePostContent from "@/app/components/blog-components/single-post-content";
import SinglePostHead from "@/app/components/blog-components/single-post-head";
import Subscribe from "@/app/components/subscribe";

export default function SinglePost(){
    return(
        <>
            <SinglePostHead />
            <SinglePostContent />
            <RelatedPosts />
            <Subscribe />
        </>
    )
}