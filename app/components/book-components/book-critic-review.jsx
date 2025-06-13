import Button from "../sub-components/button";

const sectionData = {
  title: 'Bridging the Sacred-Secular Divide Reclaiming the Integration of Faith and Work',
  buttons: [
    { text: 'Buy Now', url: '#', type: 'url', variant: 'filled' },
    { text: 'Read a Sample Chapter', url: '#', type: 'url', variant: 'outline' },
  ],
  quote: `Likewise, Bob Varney is decisive: “Living in an integrated way, where work, worship, and service are one, is avodah—our original calling.”

The call to return to God’s design is desperately needed, a message that can transform communities, cities, and nations. The book you hold in your hands is compact, memorable, and rich in wisdom. Properly applied, it can unlock a wonderful new freedom to be all God intended for you personally and for your work.”

The call to return to God’s design is desperately needed, a message that can transform communities, cities, and nations. The book you hold in your hands is compact, memorable, and rich in wisdom. Properly applied, it can unlock a wonderful new freedom to be all God intended for you personally and for your work.”`,
  author: `– John D. Beckett, Chairman, The Beckett Companies
Author: Loving Monday: Succeeding in Business Without Selling Your Soul.
And Mastering Monday: A Guide to Integrating Faith and Work`,
};

export default function BookCriticReview() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight max-w-[800px]">
            {sectionData.title}
        </h2>
        <div className="lg:flex lg:-mx-4">
            <div className="w-full lg:px-4 max-lg:mb-10 flex flex-wrap items-start gap-4">
                {sectionData.buttons.map( (btn, index) => (
                    <Button 
                        key={index}
                        text={btn.text}
                        url={btn.url}
                        variant={btn.variant}
                    />
                ) )}
            </div>
            <div className="w-full lg:px-4">
                <p className="mb-6">{sectionData.quote}</p>
                <p className="font-bold">{sectionData.author}</p>
            </div>
        </div>
      </div>
    </section>
  );
}
