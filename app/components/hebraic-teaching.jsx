import Image from 'next/image';

const hebraicData = {
  title: 'The Leadership Circle Difference\nA Hebraic Model of Teaching',
  image: '/hebraic-model.jpg', // Add this image in /public
  columns: [
    {
      type: 'image',
      src: '/teaching.jpg',
      alt: 'Hebraic Model Teaching',
    },
    {
      type: 'text',
      paragraphs: [
        `Most university, professional development, and further education programs are modeled on Greek teaching methods—that is, they treat the mind as a container to be filled with knowledge and trained to rationally engage the world using that information.`,
        `We adopt a more Hebraic model. Each person is full of a wealth of experiences and holds a unique perspective, and by deepening their understanding of certain core biblical principles, the abilities they already possess are multiplied. Think about the parable of the talents in Matthew 15: we’re not here to replace your talents or give you more; we’re here to help you do the most with what you already have, because we`,
      ],
    },
    {
      type: 'text',
      paragraphs: [
        `believe God’s purpose for you comes at the unique intersection of your experience, abilities, and opportunities.`,
        `We engage the mind with theological lessons, but we also engage the heart by developing a rich everyday apprenticeship of Jesus. Our program model also emphasizes relationships with other cohort members, mirroring the way Jesus and his disciples would have engaged with one another. This all results in a practical and remarkable renewal, enabling participants to orient themselves to their communities in new ways and impact their cities on a higher level.`,
      ],
    },
  ],
};

export default function HebraicTeaching() {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl  font-bold whitespace-pre-line mb-14 max-w-6xl">
          {hebraicData.title}
        </h2>

        <div className="flex flex-wrap lg:-mx-8">
          {/* Loop through columns */}
          {hebraicData.columns.map((col, index) => (
            <div key={index} className="w-full lg:w-1/3 lg:px-8 max-lg:mb-8 lg:mb-0">
              {col.type === 'image' ? (
                <Image
                  src={col.src}
                  alt={col.alt}
                  width={600}
                  height={400}
                  className="rounded-md w-full h-auto object-cover"
                />
              ) : (
                <div className="space-y-6 text-base  leading-relaxed">
                  {col.paragraphs.map((text, pIndex) => (
                    <p key={pIndex}>{text}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
