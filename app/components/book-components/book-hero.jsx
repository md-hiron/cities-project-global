import Image from "next/image"
const content = {
    title: `Discover Our Book
A Guide to Integrating Faith, Work, 
and Community`,
    image: '/book-hero.jpg'
}

export default function BookHero(){
    return(
        <>
            <section className="lg:pt-28 pt-16">
                <div className="container mx-auto px-4">
                    <h1 className="lg:text-6xl text-4xl font-bold max-w-[1170px] mx-auto text-center whitespace-break-spaces lg:mb-20 mb-10">{content.title}</h1>
                    <Image 
                        src={content.image}
                        width={1480}
                        height={230}
                        className="rounded-lg"
                    />
                </div>
            </section>
        </>
    )
}   