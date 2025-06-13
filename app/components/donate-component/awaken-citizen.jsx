import Button from "../sub-components/button"

const content = {
    title: 'Awaken, equip and unleash leaders to live as upright citizens of God’s kingdom',
    description: 'We believe that when leaders are awakened, equipped, and unleashed to  live out their God-given design and purpose, everything changes. Lives  are changed. Work is changed. Communities are changed. This is the path  towards cities being renewed and able to flourish as God intended.',
    link: '#',
    linkText: 'Learn More'
}

export default function AwakenCitizen(){
    return(
        <section className="lg:pt-28 lg:pb-20 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-[790px] mx-auto">
                    <h2 className="font-bold italic text-3xl lg:text-5xl">{content.title}</h2>
                    <div className="mt-8 md:flex">
                        <div className="w-full"></div>
                        <div className="w-full">
                            <p className="font-light italic mb-8">{content.description}</p>
                            <Button 
                                text={content.linkText}
                                url={content.link}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}