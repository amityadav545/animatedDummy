import React from 'react'

const Items = ({ title, contents }) => {
    return (
        <div className='my-5'>
            <p className='py-2 font-semibold text-sky-500 text-lg '>{title}</p>
            <p className='text-gray-400'>{contents} </p>
        </div>
    )
}

export default Items