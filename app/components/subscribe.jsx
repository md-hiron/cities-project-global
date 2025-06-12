export const subscribeContent = {
  heading: "JOIN OUR GLOBAL \nCOMMUNITY",
  subheading: "Be the first to know about our news, programs, and impact",
  form: {
    title: "Join Us Today!",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    buttonLabel: "Submit",
    buttonIcon: "↗",
  },
};

export default function Subscribe() {
  return (
    <section className="lg:py-25 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap bg-black text-white">
          <div className="lg:w-1/2 w-full px-5 lg:border-r border-b border-[#555] lg:py-[200px] py-20">
            <div className="lg:max-w-[480px] mx-auto">
              <h2 className="!font-display font-normal lg:text-6xl text-4xl mb-4 leading-tight whitespace-pre-line">
                {subscribeContent.heading}
              </h2>
              <p className=" text-2xl">
                {subscribeContent.subheading}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full px-5 lg:py-[200px] py-20">
            <form className="block lg:max-w-[540px] mx-auto">
              <h3 className="text-white  font-bold text-2xl mb-6">
                {subscribeContent.form.title}
              </h3>

              <input
                type="text"
                placeholder={subscribeContent.form.namePlaceholder}
                className="w-full  text-xl bg-transparent border-b border-[#555] text-white placeholder-[#808080] py-2 mb-6 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder={subscribeContent.form.emailPlaceholder}
                className="w-full  text-xl bg-transparent border-b border-[#555] text-white placeholder-[#808080] py-2 mb-6 focus:outline-none focus:border-white"
              />

              <button
                type="submit"
                className="bg-[#A1CF5F] text-black  font-bold text-sm px-5 py-2 rounded flex items-center gap-1 transition"
              >
                {subscribeContent.form.buttonLabel}{' '}
                <span>{subscribeContent.form.buttonIcon}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
