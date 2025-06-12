import Image from 'next/image';

const cityPhases = [
  {
    title: 'Our City Today',
    image: '/city.png',
    imagePosition: 'right',
    content: [
      {
        heading: 'Living in Exile',
        text: `In a changing culture where the Church feels less central, we may feel like outsiders. Yet God is still at work—inviting us to reweave His Kingdom into the fabric of our cities through lives that reflect His hope and truth.`,
      },
      {
        heading: 'The Kingdom of God',
        text: `God’s Kingdom is both present and coming. Through the lens of Creation, Fall, Redemption, and Restoration, we see how every person and place matters in His story—including our cities and everyday lives.`,
      },
      {
        heading: 'The City',
        text: `Cities reveal both God’s image and human brokenness. In our daily work and neighborhoods, we’re invited to seek shalom, embracing unseen opportunities to reflect God’s heart and bring lasting impact.`,
      },
    ],
  },
  {
    title: 'Our Lives Transformed',
    image: '/city2.png',
    imagePosition: 'left',
    content: [
      {
        heading: 'Integrated Lives',
        text: `God calls us to live wholly integrated lives—not divided into “faith,” “work,” or “family,” but unified in purpose. Our interconnectedness invites us to seek the common good through every part of life.`,
      },
      {
        heading: 'Vocational Calling',
        text: `Each person plays a distinct role in God’s unfolding story. As God orchestrates our lives for His purposes, we’re invited to discover our calling and affirm the unique contributions of others.`,
      },
      {
        heading: 'Whole–Life Discipleship',
        text: `Discipleship shapes every part of life. As a Spirit-led community, we follow Jesus daily—growing, listening, and taking responsibility for our formation as His apprentices.`,
      },
    ],
  },
  {
    title: 'Our City Renewed',
    image: '/city3.png',
    imagePosition: 'right',
    content: [
      {
        heading: 'Collective Stewardship',
        text: `Embracing God’s call to care for creation, our unity can reveal Jesus as the one sent by God to those observing our collective efforts.`,
      },
      {
        heading: 'Public Square',
        text: `God seeks shalom in our city, calling us to work with diverse people for the common good, guided by discernment, compassion, and godly wisdom.`,
      },
      {
        heading: 'Societal Impact',
        text: `God positions each person in their city to shape its future. By influencing institutions, we help people experience God’s kingdom, leading to flourishing and joy.`,
      },
    ],
  },
];

export default function CityPhases() {
  return (
    <section className="py-16 lg:py-28">
      <div className="container mx-auto px-4 space-y-24">
        {cityPhases.map((section, index) => (
          <div
            key={index}
            className={`flex flex-wrap items-start lg:-mx-4 ${
              section.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text Section */}
            <div className="w-full lg:w-2/3 lg:px-8 mb-8 lg:mb-0">
              <h3 className="text-3xl  font-bold mb-6">{section.title}</h3>
              <div className="space-y-4 text-base ">
                {section.content.map((item, i) => (
                  <p key={i}>
                    <strong>{item.heading}:</strong> {item.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/3 lg:px-8 flex justify-center">
              <Image
                src={section.image}
                alt={section.title}
                width={600}
                height={400}
                className="rounded-md w-full h-auto object-cover max-w-[600px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
