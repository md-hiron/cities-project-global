'use client';

import Branding from "@/app/components/branding";
import Facilitator from "@/app/components/facilitator";
import FoundersSection from "@/app/components/founder";
import Member from "@/app/components/member";
import PartnerLogosSection from "@/app/components/partners";
import SpheresOfSociety from "@/app/components/spheres-society";
import Goal from "@/app/components/sub-components/goal";
import ImageCard from "@/app/components/sub-components/image-card";
import Testimonial from "@/app/components/testimonial";
import VideoInterviewSection from "@/app/components/video-interview";

// ✅ All content in a single data object
const aboutUsData = {
  mission: {
    highlight: 'Our Mission:',
    text: 'We awaken people to the sacred nature of their work, equip them to live purposefully through an integrated life, and unleash them to renew workplaces and communities throughout the world, all for the glory of God. We do this through thought leadership, redemptive teaching and our global community.'
  },
  goal: {
    highlight : 'Our Vision:',
    text: 'We see a world where Jesus-followers in every sphere of society live out their calling, transforming their workplaces and communities into flourishing centers for the common good of all people.',
    subtitle: 'Just as God intended.'
  },
  items: [
    {
      title: 'Awaken',
      description: "you to your sacred role in God's story",
      image: '/serve1.png',
    },
    {
      title: 'Equip',
      description: 'you to live purposefully',
      image: '/serve2.png',
    },
    {
      title: 'Unleash',
      description: 'you to transform your workplace and communities',
      image: '/serve3.png',
    },
  ]
};

const boardData = {
  sectionTitle: 'Board',
  members: [
    {
      name: 'Dr. Robert C. Varney',
      role: 'President and founder of Cities Project Global (CPG)',
      image: '/member1.jpg',
      bio: `Bob, a seasoned TECH entrepreneur with a Ph.D. in computer science from Penn State, has served as a leader and advisor in Christian organizations worldwide and founded CPG in 2019 to help believers fulfill their God-given purpose.`,
    },
    {
      name: 'David Hamilton',
      role: 'Vice President for Strategic Innovation, University of the Nations',
      image: '/member2.jpg',
      bio: `David Joel Hamilton, a missionary kid turned global leader, has served with YWAM for over 46 years, pioneering bases, authoring impactful books, and driving biblical innovation as Vice President for Strategic Innovation at the University of the Nations.`,
    },
    {
      name: 'John Brady',
      role: 'Vice President, Global Engagement, IMB',
      image: '/member3.jpg',
      bio: `John, a Southern Baptist missionary’s son from Guyana, holds degrees from Furman University and Southwestern Baptist Theological Seminary, and has over two decades of leadership with IMB, including mission work in Northern Africa and the Middle East alongside his wife, Jenny.`,
    },
    {
      name: 'Hugh Brandt',
      role: 'Chief Culture Officer & founding member of Cities Project Global',
      image: '/member4.jpg',
      bio: `Hugh, Global City Consultant and author inspired by Isaiah 58:12 and Timothy Keller, has championed flourishing cities through collaborative efforts in over 40 cities worldwide, enhancing our flagship curriculum and shaping urban renewal with a heart for love and restoration.`,
    },
  ],
}

const advisoryBoardData = {
    sectionTitle: "Advisory Board",
    members: [
      {
        name: "Nathaniel Baldock",
        role: "YWAM University of Nations, Kona, Hawaii",
        image: '/member5.jpg',
        bio: "Nathaniel Baldock is a dedicated YWAM leader from New Zealand, serving since 2003 with discipleship, evangelism, medical outreach, and community development across the globe, while pioneering biblical worldview courses and coordinating 40,000 hours of biblical research into society’s seven spheres."
      },
      {
        name: "Cindy Bond",
        role: "Founder & CEO, Missions Pictures International",
        image: '/member6.jpg',
        bio: "Cindy Bond is a pioneering force in faith-friendly filmmaking, producing, distributing, and selling over 200 films, including hits like I Can Only Imagine, Redeeming Love, and The Omega Code, while shaping the industry with partners like Norm Miller and Frank Yablans."
      },
      {
        name: "Don Simmonds",
        role: "Founder and CEO of CitiiQ",
        image: '/member7.jpg',
        bio: "Don, a seasoned entrepreneur and Chancellor of Crandall University, has founded or led over 20 startups across diverse industries, including CitiiQ, an innovative city wellbeing measurement system aligned with the UN SDGs, while championing ethical leadership and coaching youth hockey for over 40 years."
      },
      {
        name: "Debbie Butler",
        role: "Director of Operations, Cities Project Global",
        image: '/member8.jpg',
        bio: "Debbie brings over 30 years of experience in organizational and leadership development, serving as an expert Enterprise Agility Coach, ICAgile-approved trainer, and mentor for aspiring professional coaches across diverse sectors."
      },
      {
        name: "Samuel Chiang",
        role: "Deputy Secretary General, World Evangelical Alliance",
        image: '/member9.jpg',
        bio: "Rev. Samuel E. Chiang, a Taiwanese-born global leader and Dallas Theological Seminary board member, has served the Church in China and globally, co-founded 16 diverse companies, and currently coaches senior leadership teams and serves as Deputy Secretary General for World Evangelical Alliance."
      },
      {
        name: "Scott Fast",
        role: "Director of Colorado Projects, Innovate+Educate",
        image: '/member10.jpg',
        bio: "Scott, Director of Colorado Projects at Innovate+Educate, drives the Skills to Jobs model, creates career pathways for low-income earners, and brings over 16 years of IT and leadership expertise from Accenture, where he spearheaded educational and workforce development initiatives."
      },
      {
        name: "Paul Michalski",
        role: "Founder of Integrous LLC",
        image: '/member11.jpg',
        bio: "Paul, founder of Integrous LLC, offers integrity advice and legal counsel to help leaders flourish biblically, drawing on 22 years of corporate law experience at Cravath, Swaine & Moore and extensive service to nonprofits."
      },
      {
        name: "Brian Mueller",
        role: "President, Grand Canyon University",
        image: '/member12.png',
        bio: "Brian Mueller, President of Grand Canyon University since 2008, has led its transformation into a dynamic higher education force, expanding enrollment from 1,000 to over 115,000, driving operational excellence, and revitalizing west Phoenix through visionary public-private partnerships."
      }
    ]
};

const partners = [
  { src: '/partners/bgu.png', link: '#' },
  { src: '/partners/cru.png', link: '#' },
  { src: '/partners/fwe.png', link: '#' },
  { src: '/partners/imb.png', link: '#' },
  { src: '/partners/integrous.png', link: '#' },
  { src: '/partners/leadership.png', link: '#' },
  { src: '/partners/ywamkona.png', link: '#' },
  { src: '/partners/uofn.png', link: '#' },
  { src: '/partners/ncf.png', link: '#' },
  { src: '/partners/seed.png', link: '#' },
  { src: '/partners/wea.png', link: '#' },
  { src: '/partners/cea.png', link: '#' },
  { src: '/partners/gcu.png', link: '#' },
];
    

export default function AboutUs() {
  return (
    <>
        <section className="py-16 bg-[url(/serve-bg.png)]">
            <div className="container mx-auto px-4">
                <Goal
                highlight={aboutUsData.mission.highlight}
                text={aboutUsData.mission.text}
                />
                <ImageCard items={aboutUsData.items} classes="py-20"/>
            </div>
        </section>

        <section className="lg:py-28 py-16 bg-[#F9F9F9] lg:mb-28 mb-16">
            <div className="container mx-auto px-4">
                <Goal
                    highlight={aboutUsData.goal.highlight}
                    text={aboutUsData.goal.text}
                    subtitle={aboutUsData.goal.subtitle}
                />
            </div>
        </section>

        <SpheresOfSociety />

        <FoundersSection />

        <Member title={boardData.sectionTitle} members={boardData.members} />
        <Member title={advisoryBoardData.sectionTitle} members={advisoryBoardData.members} padding="lg:pb-28: pb-16" />
        <Facilitator />
        <Testimonial />
        <Branding />
        <VideoInterviewSection />
        <PartnerLogosSection 
          logos={partners}
        />
    </>
    
  );
}
