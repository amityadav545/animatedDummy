import React from 'react'
import Menubox from './Menubox'
import gsap from 'gsap'
import Image from 'next/image'

const Navbar = () => {
    return (

        <div className='flex items-center header min-w-screen fixed left-0 top-0 z-10 w-screen   transition-all duration-500 ease-out xl:px-10 lg:px-5 px-3'>

            <div className='overflow-hidden bg-none w-full'>
                <div className='flex items-center justify-between '>
                    <div className='text-6xl '>
                        <Image
                            src="/images/logo.png"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                    <div><Menubox /></div>
                </div>


            </div>
        </div>
    )
}

export default Navbar