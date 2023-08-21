import Image from 'next/image';
import React from 'react';
import ReactStars from 'react-stars'
const UserCard = ({ imageSrc, content, name }) => {
    return (
        <div className="border rounded-lg bg-blurs text-white  p-2">
            <div className='flex gap-2'>
                <div className='w-[80px] h-[80px] rounded-lg border border-gray-500 p-1 overflow-hidden '>
                    <img src={imageSrc} alt='' className='h-full w-full rounded-lg' />

                </div>
                <div>
                    <p className='uppercase  text-sky-600 font-semibold' >{name}</p>
                    <ReactStars
                        value={4}
                        count={5}
                        size={18}
                        color2={'#ffd700'} />
                </div>
            </div>

            <div>
                <div>

                    <p className="text-gray-300 py-1">{content}</p>


                </div>
            </div>


        </div>
    );
};

export default UserCard;
