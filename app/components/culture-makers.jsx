const cultureCards = [
  {
    title: "People Create Culture",
    description:
      "When we talk about people creating impact within their sphere of society, we're talking about creating cultural transformation, built on justice, love, shalom, and other biblical principles.",
    alignment: "text-right",
  },
  {
    title: "Communities Are Hubs of Culture",
    description:
      "What begins in a community often radiates to surrounding areas. Nearly every cultural, political, artistic or social movement has its roots in the community.",
    alignment: "text-center",
  },
  {
    title: "Culture Builds Kingdom",
    description:
      "Culture-building is kingdom-building, and we need communities to be centers of influence in order to achieve greater global reach.",
    alignment: "text-left",
  },
];

export default function CultureMakersSection() {
  return (
    <section className="py-10 bg-[url(/culture-bg.png)] bg-bottom bg-no-repeat">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl  font-bold mb-14">
          Jesus-Followers Should Be Culture Makers
        </h2>

        <div className="flex flex-wrap lg:-mx-4">
          {cultureCards.map((card, index) => (
            <div key={index} className="lg:w-1/3 w-full lg:px-4 max-lg:mb-8">
              <div
                className={`${
                  index === 0
                    ? "lg:text-right text-center"
                    : index === 2
                    ? "max-lg:text-center"
                    : "text-center"
                } max-w-[350px] mx-auto`}
              >
                <h3 className=" font-bold text-lg mb-4">{card.title}</h3>
                <p className="text-lg  leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
