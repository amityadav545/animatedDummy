// import React from 'react'

// const ChooseUs = () => {
//   return (
//     <div>ChooseUs</div>
//   )
// }

// export default ChooseUs


"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import 'intersection-observer';
import HrSlider from './HrSlider';


gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');
const ChooseUs = () => {
    const titleRef = useRef(null);
    useEffect(() => {
        console.log('useEffect is triggered');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            console.log('IntersectionObserver callback is triggered');

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animation code...
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
    }, []);
    return (
        <div className='Choose-section relative '>


            <img src='/images/choosebgsecond.png' alt='' className='w-full h-[100px] absolute bottom-0 z-10 left-0' />



            <div className=" pt-20   ">


                <h1 ref={titleRef} className="h_title relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[4.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="font_aeonik inline-block  translate-y-full pb-1.5  pt-6    font-medium leading-[81%] text-sky-600 will-change-transform ">
                            WHY
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block text-white overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;CHOOSE US
                        </span>
                    </span>
                </h1>

            </div>
            <div className='text-white mt-20  lg:flex items-center border-white h-full w-full'>
                <div className='w-full lg:oredr-1 relative  h-full order-2  '>
                    {/* <HrSlider /> */}
                    <img src='/images/ui.png' alt='' className='w-full h-full' />



                </div>
                <div className='w-full lg:order-2 order-1'>
                    <div class="p-4  w-full relative z-20">
                        <div className='flex flex-wrap md:flex-nowrap justify-center gap-8'>
                            <div className="border-2 border-transparent hover:border-gray-300 px-4 py-6 rounded-lg transform transition duration-300 bg-blurs">
                                <h1 className='title-font font-medium text-4xl text-sky-400'>6100k</h1>

                                <h2 className="title-font font-medium text-2xl text-white">Customer</h2>
                                <p className="leading-relaxed">
                                    We use advanced coding skills that make your business stand out at the highest priority.
                                </p>
                            </div>
                            <div className="border-2 border-transparent hover:border-gray-300 px-4 py-6 rounded-lg transform transition duration-300 bg-blurs">
                                <h1 className='title-font font-medium text-4xl text-sky-400'>100k</h1>

                                <h2 className="title-font font-medium text-2xl text-white">Projects</h2>
                                <p className="leading-relaxed">
                                    We use advanced coding skills that make your business stand out at the highest priority.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-wrap md:flex-nowrap justify-center gap-8 mt-8'>
                            <div className="border-2 border-transparent hover:border-gray-300 px-4 py-6 rounded-lg transform transition duration-300 bg-blurs">
                                <h1 className='title-font font-medium text-4xl text-sky-400'>50k</h1>


                                <h2 className="title-font font-medium text-2xl text-white">Employees</h2>
                                <p className="leading-relaxed">
                                    We use advanced coding skills that make your business stand out at the highest priority.
                                </p>
                            </div>
                            <div className="border-2 border-transparent hover:border-gray-300 px-4 py-6 rounded-lg transform transition duration-300 bg-blurs">
                                <h1 className='title-font font-medium text-4xl text-sky-400'>50k</h1>

                                <h2 className="title-font font-medium text-2xl text-white">Partner</h2>
                                <p className="leading-relaxed">
                                    We use advanced coding skills that make your business stand out at the highest priority.
                                </p>
                            </div>
                        </div>
                    </div>





                </div>
            </div>



        </div>
    )
}

export default ChooseUs