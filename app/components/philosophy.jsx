import Image from "next/image";

const philosophyContent = {
  heading: "Our Philosophy",
  image: {
    src: "/Barna.png",
    width: 695,
    height: 378,
    alt: "Workplace Sphere Pie Chart",
  },
  subheading:
    "The Entire Workplace Needs to \nEmbrace Their Sacred Roles in \nInfluential Centers of Kingdom Culture",
  paragraph:
    "Barna Research shows only 1% of Jesus-followers work in the religion sphere. Many people wrongly believe that only the religion sphere is sacred work. We believe that all spheres are inherently sacred. This means that the other 99% need to be actively engaged in God’s purposes for their work. Each sphere of society has cultural impact. To shape culture, we must empower people where they work.",
};

export default function PhilosophySection() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl  font-bold text-center mb-14">
          {philosophyContent.heading}
        </h2>
        <div className="flex flex-wrap lg:-mx-4 items-start">
          <div className="lg:w-1/2 w-full lg:px-4 max-lg:mb-8">
            <div className="mx-auto max-w-md">
              <Image
                src={philosophyContent.image.src}
                width={philosophyContent.image.width}
                height={philosophyContent.image.height}
                alt={philosophyContent.image.alt}
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:px-4">
            <h3 className="text-2xl md:text-4xl  font-normal text-[#252525] max-w-[680px] whitespace-pre-line max-lg:text-center">
              {philosophyContent.subheading}
            </h3>
            <p className="text-lg  font-normal mt-5 max-lg:text-center">
              {philosophyContent.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
