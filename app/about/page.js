"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import Container from '../components/Container';
import AboutSection from '../components/AboutSection';
import AboutContent from '../components/AboutContent';
gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');
const Index = () => {
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
        <Container  >
            <AboutSection />
            <AboutContent />
        </Container>
    )
}

export default Index