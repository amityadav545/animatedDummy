"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



const SwiperSlider = () => {
    return (
        <section class="text-gray-700 body-font ">
            <div class="container px-5 py-24 mx-auto">

                <div class="flex flex-wrap -m-4 text-center text-white">
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-300 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                            </svg>

                            <h2 class="title-font font-medium text-3xl text-white">WEB DEVELOPMENT</h2>
                            <p class="leading-relaxed">

                                We use advanced coding skills that make your business stand out at the highest priority.
                            </p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-400 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                            </svg>
                            <h2 class="title-font font-medium text-3xl text-white">APP DEVELOPMENT</h2>
                            <p class="leading-relaxed">

                                Our team has the latest functionalities experience of creating reliable and user-friendly mobile applications.
                            </p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-400 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                            </svg>
                            <h2 class="title-font font-medium text-3xl text-white">UI/UX DEVELOPEMNT</h2>
                            <p class="leading-relaxed">

                                Our experienced UI/UX designers turn your website accessibility for smartphone users with exclusive creatives and designs.
                            </p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-400 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <h2 class="title-font font-medium text-3xl text-white">SEO</h2>
                            <p class="leading-relaxed">We develop custom websites including those components which make your business constantly engaging to.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwiperSlider;
