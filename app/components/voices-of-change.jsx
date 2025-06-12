"use client"
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useRef } from 'react';

const sectionData = {
  heading: 'Voices of Change',
  subheading: 'What Small Groups Are Saying',
  description:
    '100% of survey respondents said they found VantagePoint useful and that they would recommend it to their friends',
  testimonials: [
    '“Before VantagePoint, I felt stuck in my faith journey. Now, I feel aligned with God’s calling and excited to take the next step.”',
    '“VantagePoint challenged me to rethink how I show up in every area of life. It’s changed how I lead and how I listen.”',
    '“This journey gave me the language and tools to live out my purpose daily. It’s more than a course—it’s a community.”',
    '“VantagePoint gave me clarity. I now see how my everyday work connects to God’s bigger plan for the world.”',
    '“It helped me discover my true identity and purpose through small group dialogue.”',
  ],
};

export default function VoicesOfChangeSection() {
  const sliderRef = useRef(null);

  const [sliderInstanceRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 1.8,
      spacing: 16,
      origin: 'center',
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2.8, spacing: 24, origin: 'center' },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3.8, spacing: 32, origin: 'center' },
      },
    },
    created: (instance) => {
      sliderRef.current = instance;
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lg:pb-28 pb-28">
        <div className="text-center px-4 lg:mb-24 mb-16">
            <h2 className="text-3xl lg:text-5xl  font-bold mb-5">{sectionData.heading}</h2>
            <h3 className="text-2xl lg:text-4xl font-bold  mb-4">{sectionData.subheading}</h3>
            <p className="max-w-[630px] mx-auto">{sectionData.description}</p>
        </div>
        

        <div className="overflow-visible px-4 -mx-4">
          <div ref={sliderInstanceRef} className="keen-slider">
            {sectionData.testimonials.map((text, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-[#F5F5F5] rounded-lg py-9 px-8 text-left shadow"
              >
                <p className="text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
