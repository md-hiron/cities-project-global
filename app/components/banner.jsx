'use client';

const sectionData = {
  title: 'Empowering You',
  text: 'to live purposefully by integrating faith, work, and life',
  buttonText: 'Learn How ↗',
  buttonUrl: '#',
};

export default function EmpoweringSection() {
  return (
    <section className="bg-[#eeeeee] py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-sans font-normal mb-4 bg-gradient-to-r from-[#045643] to-[#9ACB00] text-transparent bg-clip-text pb-1">
          {sectionData.title}
        </h2>
        <p className="lg:text-3xl te md:text-xl font-sans mb-8">{sectionData.text}</p>
        <a
          href={sectionData.buttonUrl}
          className="inline-block bg-[#A1CF5F] text-black font-semibold font-sans px-6 py-3 rounded-md hover:bg-[#9ACB00] transition"
        >
          {sectionData.buttonText}
        </a>
      </div>
    </section>
  );
}
