import Image from 'next/image';
import Link from 'next/link';
import { Calendar, CalendarCheck } from 'lucide-react';
import Button from '../sub-components/button';

const featuredPost = {
  image: '/featured-blog.jpg', // Replace with actual image path
  tag: 'Featured',
  title: 'Building Community Around the Common Good',
  description:
    'You don’t have to search the Bible for very long to find passages highlighting the value and importance of community.',
  readMoreLink: '#',
  date: {
    day: '19',
    month: 'December',
    year: '2022',
    thumbnail: '/featured-mini.jpg', // Replace with actual image path
  },
};

export default function FeaturedPost() {
  return (
    <section className="lg:pb-20 pb-16">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap border border-[#E2E2E2] rounded-md overflow-hidden">
                <div className="w-full lg:w-1/2">
                    <Image
                        src={featuredPost.image}
                        alt="Community"
                        width={665}
                        height={637}
                        className=" object-cover w-full h-full"
                    />
                </div>
                <div className="w-full lg:w-1/2 bg-[#F8F8F8]">
                    <div className="md:p-14 p-6 max-w-[600px]">
                        <span className="px-3 py-1 bg-black text-white font-bold text-sm inline-block rounded-full">{featuredPost.tag}</span>
                        <h2 className="font-normal lg:text-3xl text-2xl my-5 text-[#212121]">{featuredPost.title}</h2>
                        <p className="lg:text-xl text-[#414141] mb-5">{featuredPost.description}</p>
                        <Button 
                            text="Read More"
                        />
                    </div>
                    <div className="flex justify-end items-end md:p-8 p-6">
                        <Image 
                            src={featuredPost.date.thumbnail}
                            width={154}
                            height={188}
                            className="rounded-md mr-3"
                        />
                        <div className="w-[175px] h-[240px] border border-black rounded-md flex flex-col justify-between p-5">
                            <CalendarCheck className="self-end"/>
                            <div className="date">
                                <span className="font-bold lg:text-6xl text-4xl block">{featuredPost.date.day}</span>
                                <span>{featuredPost.date.month} {featuredPost.date.year}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
