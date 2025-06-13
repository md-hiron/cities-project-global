import Image from 'next/image';

// JSON-style content data
const singlePost = {

  featureImage: '/single-post.jpg',
  textContent: `Since last year, some of us have been trying to guess at Putin’s  intentions as he has amassed forces on the border. Since last week, many  of us have been checking the news each day as the Russian army advances  on Ukrainian cities, looking for predictions on how it will all end.  The fear of a widespread European or World War has taken up residence in  many of our minds as we question what we should do and how we should  respond.

It is true that the future is in God’s hands; none of us  knows what will come in the days ahead. The present also is in God’s  hands — but it is in ours as well. It is right for us to pray for an end  to war and for our leaders to enact justice and make decisions that  bring that possibility closer. But it is also right to take action in  alignment with our hopes and values.

At the time of writing, over  one million refugees have fled Ukraine, pouring into Poland, Slovakia,  Hungary, Romania, Moldova, and Russia. UNICEF has reported that this may  be Europe’s largest refugee crisis since WWII, and in the near future,  Ukrainian families around the world will likely look to receive their  relatives.`,

  images: [
    {
      src: '/sp-img.jpg',
      width: 370,
      height: 422,
    },
    {
      src: '/sp-img2.jpg',
      width: 465,
      height: 278,
    },
  ],

  middle: `Many news outlets are reporting accounts of neighboring countries rising to the occasion. In Poland—and elsewhere—citizens are arriving at the border, offering rides and provisions to those seeking refuge. Humanitarian organizations are rallying, and Germany and Austria are offering free train travel to those seeking to reach their countries.`,

  quote: `The European response has been, by and large, unified, and the actions of those meeting Ukrainians at the border have embodied a core part of God’s nature: hesed.`,
};

export default function SinglePostContent() {
  return (
    <section className="single-post-content">
      <div className="container mx-auto px-4 border-b border-[#E2E2E2] lg:pb-28 pb-16">
        <Image 
            src={singlePost.featureImage}
            width={1480}
            height={637}
            className="w-full rounded-md lg:mb-14 mb-8"
        />
        <div className="max-w-[685px] mx-auto">
            <p className="whitespace-pre-line">{singlePost.textContent}</p>
        </div>
        <div className="max-w-[900px] mx-auto md:flex md:gap-8 py-10">
            { singlePost.images.map( (img, index) => (
                <Image 
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    className="max-md:mb-5 w-full h-auto self-start"
                />
            ) ) }
        </div>
        <div className="max-w-[685px] mx-auto">
            <p className="whitespace-pre-line">{singlePost.textContent}</p>
        </div>
      </div>
    </section>
  );
}
