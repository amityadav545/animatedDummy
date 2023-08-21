"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import HireSection from './HireSection';
gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');
const CareerSection = () => {
    useEffect(() => {
        const titles = document.querySelectorAll('.h_title');
        const tl = gsap.timeline({ defaults: { duration: 1 } });

        titles.forEach((title, index) => {
            const el = title.querySelectorAll('span span');
            const delay = index * 0.08;

            tl.to(
                el,
                {
                    y: 0,
                    duration: 1.5,
                    ease: 'cubic-text',
                },
                delay
            );
        });

        return () => { };
    }, []);
    return (
        <div className=' text-white'>
            <div className='xl:m-20 lg:m-12 m-10'>

                <h1 className="h_title  relative w-full  text-[15vw] font-light uppercase leading-[90%] lg:text-[4.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                            The&nbsp;
                        </span>
                    </span>

                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Most&nbsp;
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Exciting&nbsp;
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Jobs&nbsp;
                        </span>
                    </span>

                </h1>
                <p className='py-5 xl:w-[40vw] lg:w-[50vw] '>

                    Experience the essence of "work hard and play hard" with us at Infranix Technologies, Lucknow. Join a vibrant and exciting work environment that offers boundless growth opportunities and a touch of fun. Your journey towards a fulfilling and dynamic career begins here.
                </p>
            </div>


        </div>
    )
}

export default CareerSection