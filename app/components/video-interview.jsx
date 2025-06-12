import Image from 'next/image';

const interviewData = {
  title: 'THE INTERSECTION',
  subtitle: 'FAITH, WORK,\nAND LIFE',
  name: 'Bob Varney',
  role: 'Cities Project Global CEO, President',
  image: '/interview.png', // <-- Make sure this exists in /public
};

export default function VideoInterviewSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden bg-black">
          <div className="relative w-full h-auto">
            <Image
              src={interviewData.image}
              alt={`${interviewData.name} Interview`}
              width={1000}
              height={613}
              className="max-w-full ml-auto"
            />
            {/* Overlay text section */}
            <div className="md:absolute top-0 left-0 h-full w-full  p-6 md:p-10 flex flex-col justify-between">
              <div className="text-white pt-10">
                <h3 className="text-[#A1CF5F] lg:text-5xl text-3xl font-bold  uppercase">
                  {interviewData.title}
                </h3>
                <h2 className="whitespace-pre-line tg:text-5xl text-3xl font-bold  leading-tight mb-6">
                  {interviewData.subtitle}
                </h2>
                
              </div>
              <div className="">
                <p className="text-white  font-bold lg:text-3xl text-2xl">{interviewData.name}</p>
                <p className="text-sm text-white  font-semibold">{interviewData.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
