import Image from "next/image";

export default function CultureMakersSection() {
  return (
    <section className="py-10 bg-[url(/culture-bg.png)] bg-bottom bg-no-repeat">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl font-sans font-bold mb-14">
          Jesus-Followers Should Be Culture Makers
        </h2>

        <div className="flex flex-wrap lg:-mx-4">
          <div className="lg:w-1/3 w-full lg:px-4 max-lg:mb-8">
            <div className="lg:text-right text-center max-w-[350px] mx-auto">
              <h3 className="font-sans font-bold text-lg mb-4">People Create Culture</h3>
              <p className="text-lg font-sans leading-relaxed">
                When we talk about people creating impact within their sphere of society,
                we're talking about creating cultural transformation, built on justice,
                love, shalom, and other biblical principles.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full lg:px-4 max-lg:mb-8">
            <div className="text-center max-w-[350px] mx-auto">
              <h3 className="font-sans font-bold text-lg mb-4">Communities Are Hubs of Culture</h3>
              <p className="text-lg font-sans leading-relaxed">
                What begins in a community often radiates to surrounding areas. Nearly
                every cultural, political, artistic or social movement has its roots in
                the community.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full lg:px-4 max-lg:mb-8">
            <div className="max-lg:text-center max-w-[350px] mx-auto">
              <h3 className="font-sans font-bold text-lg mb-4">Culture Builds Kingdom</h3>
              <p className="text-lg font-sans leading-relaxed">
                Culture-building is kingdom-building, and we need communities to be
                centers of influence in order to achieve greater global reach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
