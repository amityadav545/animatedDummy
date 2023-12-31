"use client"

import React, { useEffect } from 'react'
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');


const HomeSection = () => {

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
        <div className="min-h-screen text-gray-300  flex justify-center items-center ">
            <div className="h_container font_apoc flex flex-col items-center  px-2 pb-[20vw]  lg:pb-[4vw]">
                <h1 className="h_title  relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[4.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                            You&nbsp;
                        </span>
                    </span>

                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;Can
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;Only
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Build&nbsp;
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Brands&nbsp;
                        </span>
                    </span>
                </h1>
                <h1 className="h_title relative  w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[4.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            People&nbsp;
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Love
                        </span>
                    </span>
                </h1>
                <h1 className="h_title relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[4.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="font_aeonik inline-block  translate-y-full pb-1.5  pt-6    font-medium leading-[81%] text-orange will-change-transform ">
                            By Loving
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;Your
                        </span>
                    </span>
                </h1>
                <h1 className="h_title relative flex w-full flex-col items-center justify-center text-center text-[15vw]  font-light uppercase leading-[90%] lg:flex-row lg:text-[4.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Audience
                        </span>
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default HomeSection