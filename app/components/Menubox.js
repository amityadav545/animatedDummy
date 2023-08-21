import React from 'react'
import Menubutton from './Menubutton'

const Menubox = () => {
    return (
        <div className='flex gap-5'>
            <div>
                <Menubutton href="/">
                    Home
                </Menubutton >
            </div>
            <div>
                <Menubutton href="/about">
                    About Us
                </Menubutton >
            </div>

            <div>
                <Menubutton href="/portfolio">
                    Portfolio
                </Menubutton >
            </div>
            <div>
                <Menubutton href="/career">
                    Career
                </Menubutton >
            </div>
            <div>
                <Menubutton href="/contact">
                    Contact Us
                </Menubutton >
            </div>

        </div>
    )
}

export default Menubox