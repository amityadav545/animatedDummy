"use client"
import ApplyForm from '@/app/components/ApplyForm';

import React, { useEffect } from 'react'
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

const page = ({ params }) => {
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
    console.log(params);
    return (
        <div className="min-h-screen ApplySection  ">
            <div className='pt-[140px] pb-[40px]'>
                <h1 className="h_title  relative w-full text-sky-500 text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[4.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="!text-sky-500 inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                            Apply&nbsp;
                        </span>
                    </span>





                </h1>
            </div>
            <div className='lg:flex lg:px-5 gap-5' >
                <div className="w-full ">
                    <ApplyForm />
                </div>
                <div className="w-full p-5 bg-transparent">
                    <p className="text-xl font-semibold text-white mb-4">NodeJS Developer</p>
                    <p className="mb-4 text-white">
                        We are looking for a highly capable Node.js developer to optimize our web-based application
                        performance. You will be collaborating with our front-end application developers, designing
                        back-end components, and integrating data storage and protection solutions. To ensure success as a
                        Node.js developer, you should possess extensive knowledge of Node.JS based services. An accomplished
                        Node.js developer will be someone whose expertise results in the stable, fast, and secure data
                        exchange between servers and end-users.
                    </p>
                    <p className="mb-4 font-semibold text-white">Requirements:</p>
                    <ul className="list-disc pl-6 mb-4 text-white">
                        <li>At least four years of experience as a Node.js developer.</li>
                        <li>Knowledge of Node.js and frameworks available for it, such as Express.JS</li>
                        <li>Understanding the nature of asynchronous programming and its quirks and workarounds</li>
                        <li>Strong understanding of JavaScript fundamentals such as prototype inheritance, Composition,
                            and CommonJS/AMD module system using RequireJS.
                        </li>
                        <li>Basic understanding of front-end technologies, such as HTML5 and CSS3</li>
                        <li>Integration of multiple data sources and databases into one system, such as MongoDB & MySQL.</li>
                        <li>Understanding fundamental design principles behind a scalable application</li>
                        <li>Availability to resolve urgent web application issues outside of business hours.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;
