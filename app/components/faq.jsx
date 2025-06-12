'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const tipsData = [
    {
    title: 'Prioritize Sustainability in Urban Planning',
    content:
        'The future of cities depends on how we balance growth with environmental stewardship. When planning urban developments, always ask: How can we reduce the carbon footprint? How can we make cities more energy-efficient? Sustainability should not be an afterthought, but a core principle.',
    },
  {
    title: 'Embrace Innovation, But Stay Grounded in Human Needs',
    content:
      'Cities should adopt new technologies while ensuring those innovations serve real, human-centered purposes that improve daily life.',
  },
  {
    title: 'Foster Collaboration Across Sectors',
    content:
      'Cross-sector collaboration between government, private, and civic organizations leads to more sustainable and inclusive urban solutions.',
  },
  {
    title: 'Focus on Resilience: Cities Must Adapt to Change',
    content:
      'Resilient cities are prepared for disruptions. Planning should anticipate change and ensure continuity of key services.',
  },
  {
    title: 'Data-Driven Decisions Lead to Better Outcomes',
    content:
      'Smart cities use data to guide development, infrastructure, and services to improve quality of life.',
  },
  {
    title: 'Invest in Green Spaces for Better Quality of Life',
    content:
      'Urban greenery contributes to health, reduces heat, and fosters stronger community bonds.',
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0); // initially expanded first one

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 lg:pb-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl  font-bold mb-14">Essential Tips for Success</h2>


        {/* Accordion Panels */}
        {tipsData.map((tip, index) => (
          <div key={index} className="border-b border-black max-w-[700px]">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center py-4 text-left cursor-pointer  font-semibold hover:text-[#A1CF5F] transition"
            >
              <span>{tip.title}</span>
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeIndex === index && (
              <div className="pb-4 ">{tip.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
