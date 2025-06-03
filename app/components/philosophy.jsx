import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="lg:py-28 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-sans font-bold text-center mb-14">
              Our Philosophy
            </h2>
        <div className="flex flex-wrap lg:-mx-4 items-start">
          <div className="lg:w-1/2 w-full lg:px-4 max-lg:mb-8">
            <div className="mx-auto max-w-md">
              <Image
                src="/Barna.png"
                width={695}
                height={378}
                alt="Workplace Sphere Pie Chart"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:px-4">
            

            <h3 className="text-2xl md:text-4xl font-sans font-normal text-[#252525] max-w-[680px] max-lg:text-center">
              The Entire Workplace Needs to 
              Embrace Their Sacred Roles in 
              Influential Centers of Kingdom Culture
            </h3>

            <p className="text-lg font-sans font-normal mt-5 max-lg:text-center">
              Barna Research shows only 1% of Jesus-followers work in the religion sphere.
              Many people wrongly believe that only the religion sphere is sacred work.
              We believe that all spheres are inherently sacred. This means that the other
              99% need to be actively engaged in God’s purposes for their work. Each sphere
              of society has cultural impact. To shape culture, we must empower people
              where they work.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
