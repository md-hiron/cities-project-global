import Image from "next/image";
const content = {
    images : [
        '/citizen2.jpg',
        '/citizen3.jpg',
        '/citizen4.jpg',
        '/citizen-badge.png'
    ]
}

export default function CitizenGallery(){
    return(
        <section className="lg:pb-28 pb-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 max-lg:mb-10">
                        <Image 
                            src={content.images[0]}
                            width={740}
                            height={439}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <Image 
                            src={content.images[1]}
                            width={364}
                            height={243}
                            className="ml-auto mb-2 mt-[200px]"
                        />
                        <Image 
                            src={content.images[2]}
                            width={378}
                            height={253}
                            className=""
                        />
                        <Image 
                            src={content.images[3]}
                            width={200}
                            height={200}
                            className="absolute left-1/2 -translate-1/2 top-[200px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}