import Image from 'next/image';

const content = {
  heading: 'Taking Your Whole Self to Work',
  subText: `Have you ever felt like your work has no meaning? Or like faith and daily life fall into separate days of the week and modes of being? Or like the only valid contribution you have toward kingdom building is tithing, evangelizing, or working in ministry?`,
  paragraph: `Many believers feel that way and live as though there is a significant divide between their “faith life” and their “work life.” The truth is that God never intended the two to be separate. Work was created as a God-human partnership toward building flourishing cultures of redemption—toward building God’s kingdom on earth. No matter what your area of work or influence is, whether it’s in science, economics, the arts, education, or family, etc., God sees your daily life as a vital part of his story.

At Cities Project Global, we believe that in order to build a world of flourishing cities and kingdom cultures, we need leaders in every sphere of society to be engaging their work in union with their faith.`,
  mainImage: '/self.jpg',
  smallImage: '/self2.jpg',
};

export default function WholeSelf() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-12 items-start">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
            <hr className="border-black mb-6 w-full" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">{content.heading}</h2>
            <p className="text-base leading-relaxed mb-10 max-w-xl">{content.subText}</p>
            <div className="mb-8">
                <Image
                src={content.smallImage}
                width={300}
                height={200}
                className="rounded-md ml-auto mt-10"
                />
            </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
            <div className="mb-8">
                <Image
                src={content.mainImage}
                alt="Main image of man reading"
                width={600}
                height={400}
                className="rounded"
                />
            </div>
            <p className="text-base leading-relaxed whitespace-pre-line">{content.paragraph}</p>
            </div>
        </div>
      </div>
    </section>
  );
}
