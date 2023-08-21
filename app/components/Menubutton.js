"use client"
import React from 'react'
import { usePathname } from "next/navigation"
import Link from "next/link";
const Menubutton = ({ children, href }) => {
    const router = usePathname();
    return (
        <Link href={href}>
            <div className={`group overflow-hidden relative cursor-pointer uppercase leading-6 ${router == href ? 'text-blue-700' : 'text-black'}`}>
                <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[100%]'>{children}</span>
                <span className='absolute left-0 translate-y-[100%] rotate-20 inline-block group-hover:translate-y-[0%] group-hover:rotate-0 p-1 transition duration-500 ease-out'>{children}</span>
            </div>
        </Link>
    )
}

export default Menubutton