import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function BoxLink({title, text, url = '#', classes = 'ml-auto w-[175px] h-[240px] border border-black hover:border-[#A1CF5F]'}){
    return(
        <Link href={url} className={`relative flex flex-col justify-end p-3 transition ${classes}`}>
            <ArrowUpRight size={20} className="absolute top-3 right-3"/>
            <h3 className="font-bold text-xl">{title}</h3>
            <span className="underline">{text}</span>
        </Link>
    )
}