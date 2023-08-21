import React from 'react'

const Card = ({ images, title }) => {
    const cardStyles = {
        backgroundImage: `url(${images})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // Set background image to cover the container
    };
    return (
        <div style={cardStyles} class="w-full h-full flex justify-center items-center  bg-white border border-gray-200 rounded-lg  ">

            <div className='bg-blur py-5 px-10 rounded-lg font-semibold text-2xl border text-black backdrop-filter backdrop-blur-sm -inset-0.5'>
                {title}
            </div>
        </div>
    )
}

export default Card