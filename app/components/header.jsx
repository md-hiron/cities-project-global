'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function Header(){
    return(
        <header className="absolute top-0 left-0 right-0 z-10">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-14">
                    <div className="flex items-center space-x-2">
                        <Image src="/logo.svg" alt="Cities Project Global" className='max-w-full' width={112} height={58}/>
                    </div>

                    {/* Nav Links */}
                    <nav className="">
                        <ul className="flex text-sm font-light">
                            <li><Link href="#" className="hover:text-[#A1CF5F] text-sm text-white block mx-3">Home</Link></li>
                            <li><Link href="#" className="hover:text-[#A1CF5F] text-white block mx-3">About</Link></li>
                            <li><Link href="#" className="hover:text-[#A1CF5F] text-white block mx-3">What We Do</Link></li>
                            <li><Link href="#" className="hover:text-[#A1CF5F] text-white block mx-3">Stories</Link></li>
                            <li><Link href="#" className="hover:text-[#A1CF5F] text-white block mx-3">Contact</Link></li>
                        </ul>
                    </nav>

                    {/* Language and Donate */}
                    <div className="flex items-center space-x-4">
                        <button className="text-sm hover:[#A1CF5F] text-white">🌐 English</button>
                        <button className="px-5 py-3 text-sm text-white bg-[#A1CF5F] rounded hover:bg-[#A1CF5F]">Donate Now</button>
                    </div>
                </div>
            </div>
            {/* Logo */}
            
        </header>
    )
}