import Image from "next/image"
const facilitatorData = {
    title: 'Global Facilitators',
    image: '/facilitator.png'
}

export default function Facilitator(){
    return(
        <section className="lg:pb-28 pb-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl  font-bold text-center mb-14">{facilitatorData.title}</h2>
                <Image
                    src={facilitatorData.image}
                    width={1482}
                    height={741}
                    className="w-full"
                />
            </div>
            
        </section>
    )
}