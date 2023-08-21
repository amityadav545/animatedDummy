

"use client"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import 'intersection-observer'; // Import the Intersection Observer polyfill if needed
import SwiperSlider from './SwiperSlider';
gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');



// export default Domain
const Domain = () => {
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
        <div className=" flex-col DomainSection  flex   ">
            <div className=" mt-10   ">


                <h1 ref={titleRef} className="h_title relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[4.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="font_aeonik inline-block  translate-y-full pb-1.5  pt-6    font-medium leading-[81%] text-sky-600 will-change-transform ">
                            OUR
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block text-white overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;DOMAIN
                        </span>
                    </span>
                </h1>

            </div>


            <div>
                <SwiperSlider />
            </div>
        </div>
    )
}

export default Domain