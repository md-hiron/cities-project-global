import Image from "next/image";
import Button from "../sub-components/button";
const bookData = {
    title: 'Introducing a New Book',
    description: `For decades now, I have witnessed the near non-existence of the practical intersection between faith and work. The sacred-secular divide is pervasive, rendering work forever inferior. The result is confusion and ineffectiveness as we try to straddle these two disconnected worlds.`,
    buttons: [
      { label: 'Buy Now', link: '#', variant: 'filled' },
      { label: 'Read a Sample Chapter', link: '#', variant: 'outline' },
    ],
    bookImage: '/new-book.png',
    vendorTitle: `Get Your Copy Today
Available on Amazon and More...`,
    logos: [
      { src: '/vendor.png'},
      { src: '/vendor2.png'},
      { src: '/vendor3.png'},
    ],
};

export default function NewBook(){
    return(
        <section className="pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/3 py-8">
                        <Image 
                            src={bookData.bookImage}
                            width={595}
                            height={564}
                        />
                    </div>
                    <div className="w-full lg:w-2/3 lg:p-16 p-8 border-l border-b border-[#DFDFDF] flex flex-col justify-center">
                        <div className="">
                            <h2 className="font-bold text-3xl lg:text-5xl mb-3">{bookData.title}</h2>
                            <p>{bookData.description}</p>
                            <div className="flex mt-5 gap-3">
                                { bookData.buttons.map( (btn, index) => (
                                    <Button
                                        key={index}
                                        text={btn.label}
                                        url={btn.link}
                                        variant={btn.variant}
                                    />
                                ) ) }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/3 bg-black h-[300px] flex justify-between items-center p-4">
                        <h2 className="font-bold lg:text-2xl text-xl whitespace-pre-line text-white max-w-[382px] mx-auto">{bookData.vendorTitle}</h2>
                    </div>
                    <div className="w-full lg:w-2/3 md:h-[300px] h-full md:flex border-b border-[#DFDFDF]">
                        { bookData.logos.map( (logo, index) => (
                            <div key={index} className="w-full border-r first:max-lg:border-l border-[#DFDFDF] max-md:border-l max-md:border-t h-full flex items-center justify-center">
                                <Image 
                                    src={logo.src}
                                    width={180}
                                    height={102}
                                />
                            </div>
                        ) ) }
                    </div>
                </div>
            </div>
        </section>
    )
}