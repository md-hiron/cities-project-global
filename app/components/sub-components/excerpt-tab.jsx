'use client';

import { useState } from 'react';

const tabData = [
  {
    title: 'Module One',
    content: {
      heading: 'Module 1, Session 2',
      excerpt: `
Many of us compartmentalize our lives, separating work from spiritual pursuits. We often see jobs as burdens to endure while waiting for time to focus on devotions or church. Sometimes, we value friends in religious roles more than our own “secular” jobs.

However, the Bible offers a different perspective. The Hebrew word for work, avodah, is used in Genesis 2 when God places man in the Garden of Eden to cultivate it. This word means cultivating, creating, laboring, serving, and worshiping, elevating our work as purposeful and pleasing to God.

How often do we wish for more meaning in our work? Budget meetings, tough decisions, and long hours can feel meaningless. But what if we viewed our work as an act of worship? This shift in perspective could transform our experience.
      `,
    },
  },
  {
    title: 'Module Two',
    content: {
      heading: 'Coming Soon...',
      excerpt: 'Content for Module Two will be available in upcoming sessions.',
    },
  },
  {
    title: 'Module Three',
    content: {
      heading: 'Coming Soon...',
      excerpt: 'Content for Module Three will be available in upcoming sessions.',
    },
  },
];

export default function ExcerptTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="excerpt-tab-wrap">
      <h2 className="text-3xl lg:text-5xl  font-bold mb-6 text-white">
        Excerpt <span className="text-[#A1CF5F] block">{tabData[activeTab].content.heading}</span>
      </h2>

      <div className="leading-relaxed whitespace-pre-line mb-8 text-white">
        {tabData[activeTab].content.excerpt}
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-10 pt-4 space-x-8">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`excerpt-tab-button text-sm  font-bold block w-full transition py-2 relative ${
              activeTab === index
                ? 'text-[#A1CF5F] border-t-4 border-[#A1CF5F] before:content-[""] before:block before:absolute before:left-1/2 before:-top-[9px] before:-translate-x-1/2 before:border-l-8 before:border-b-8 before:border[#A1CF5F] before:rotate-45'
                : 'text-white border-t-4 border-[#E0E0E0]'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
