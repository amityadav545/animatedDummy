import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Card from './Card';

const Slide = () => {
    return (
        <div className="main-swiper">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={'auto'}

                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,

                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf66aUvCGugcjdtlufQ_n_0onI8-d9hXHaxA&usqp=CAU" title="Restaurant" />

                </SwiperSlide>
                <SwiperSlide>
                    <Card images="https://thumbs.dreamstime.com/b/doctor-stethoscope-hand-hospital-background-gown-94227568.jpg?w=1400" title="Hospital" />
                </SwiperSlide>
                <SwiperSlide>
                    <Card images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4PUs2B5VDZR9sa_fWcghnV-3fmSmLoEd6g&usqp=CAU" title="E-commerse" />
                </SwiperSlide>
                <SwiperSlide>
                    <Card images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExmgLapMYOmNsYjKkwQPpdl-cYmtLgy04FA&usqp=CAU" title="Mobility" />
                </SwiperSlide>
                <SwiperSlide>
                    <Card images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipAouWRWUqc_CwLGPD2R9eG7uGxwgymV6yA&usqp=CAU" title="Education" />
                </SwiperSlide>
                <SwiperSlide>
                    <Card images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN402Kxa4qms36gL3Xc-KV2HAny6hVZ2E0ig&usqp=CAU" title="Social Networking" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Slide