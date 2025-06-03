export default function Subscribe() {
  return (
    <section className="lg:py-25 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap bg-black text-white">
          <div className="lg:w-1/2 w-full px-5 lg:border-r border-b border-[#555] lg:py-[200px] py-20">
            <div className="lg:max-w-[480px] mx-auto">
                <h2 className="font-display font-normal lg:text-6xl text-4xl mb-4 leading-tight">
                JOIN OUR GLOBAL <br /> COMMUNITY
                </h2>
                <p className="font-sans text-2xl">
                Be the first to know about our news, programs, and impact
                </p>
            </div>
            
          </div>
          <div className="lg:w-1/2 w-full px-5 lg:py-[200px] py-20">
            <form className="block lg:max-w-[540px] mx-auto">
              <h3 className="text-white font-sans font-bold text-2xl mb-6">Join Us Today!</h3>

              <input
                type="text"
                placeholder="Name"
                className="w-full font-sans text-xl bg-transparent border-b border-[#555] text-white placeholder-[#808080] py-2 mb-6 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full font-sans text-xl bg-transparent border-b border-[#555] text-white placeholder-[#808080] py-2 mb-6 focus:outline-none focus:border-white"
              />

              <button
                type="submit"
                className="bg-[#A1CF5F] text-black font-sans font-bold text-sm px-5 py-2 rounded flex items-center gap-1 transition"
              >
                Submit <span>↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
