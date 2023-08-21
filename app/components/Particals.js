"use client"
import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";

import { loadFull } from "tsparticles";
const Particals = () => {

    const particlesInit = useCallback(async (main) => {
        console.log(main);

        await loadFull(main);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);
    return (
        <Particles
            className='w-full h-full absolute translate-z-0'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={


                {

                    fullScreen: {
                        enable: false,

                    },
                    background: {
                        color: {
                            value: "#0e2244",
                        },
                        image: {
                            src: "https://cdn.pixabay.com/photo/2018/07/14/11/33/earth-3537401_1280.jpg",
                            width: "100%",
                            height: "100%"
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#7dd3fc",
                        },
                        links: {
                            color: "#7dd3fc",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 600,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
        />
    )
}

export default Particals