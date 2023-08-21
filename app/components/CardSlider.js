"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import "../style/cardSlider.css"
import UserCard from './UserCard';
const CardSlider = () => {
    return (
        <div>
            <div className='cardSlider py-5'>
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <UserCard
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                            name="amit"
                            content="Explore the beauty of nature  of nature  of nature  of nature  of nature  of nature  of  landscapes."

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCard
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                            name="amit"
                            content="Explore the beauty of nature  of nature  of nature  of nature  of nature  of nature  of  landscapes."

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCard
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                            name="amit"
                            content="Explore the beauty of nature  of nature  of nature  of nature  of nature  of nature  of  landscapes."

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCard
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                            name="amit"
                            content="Explore the beauty of nature  of nature  of nature  of nature  of nature  of nature  of  landscapes."

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCard
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                            name="amit"
                            content="Explore the beauty of nature  of nature  of nature  of nature  of nature  of nature  of  landscapes."

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCard
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                            name="amit"
                            content="Explore the beauty of nature  of nature  of nature  of nature  of nature  of nature  of  landscapes."

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCard
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                            name="amit"
                            content="Explore the beauty of nature  of nature  of nature  of nature  of nature  of nature  of  landscapes."

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCard
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                            name="amit"
                            content="Explore the beauty of nature  of nature  of nature  of nature  of nature  of nature  of  landscapes."

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCard
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                            name="amit"
                            content="Explore the beauty of nature  of nature  of nature  of nature  of nature  of nature  of  landscapes."

                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default CardSlider