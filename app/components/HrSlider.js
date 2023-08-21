import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../style/hrslider.css"
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');
const HrSlider = () => {

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
        <div className='hrslider'>
            <Swiper




                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}


                modules={[Mousewheel, Pagination,]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-full h-full lg:p-[30px]'>
                        <h1 className="h_title py-3  relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[3.7vw] ">
                            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                                    Best&nbsp;
                                </span>
                            </span>

                            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                                    &nbsp;Web
                                </span>
                            </span>
                            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                                    &nbsp;Development
                                </span>
                            </span>
                            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                                    &nbsp;Company
                                </span>
                            </span>
                            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                                    &nbsp;in India
                                </span>
                            </span>
                        </h1>
                        <p className='text-black text-gray-300'>
                           
                            INFRANIX TECHNOLOGY PRIVATE LIMITED is one of the best IT Companies in India that has practical experience in Graphic Design, Website Design and Development, Mobile Application (Android & iOS) Design and Development, and Digital Marketing (SEO, SMO, and PPC, and so forth). We have a large team of professional designers and developers who produce quality products that meet all the client’s requirements. We deliver high-quality work reliably for our clients located in different parts of the world. We are eager to be a part of your website, mobile application, or website design development. Making a versatile application and Website design, our expert team is completely fit for giving something one of a kind that will assist you with developing your business.
                        
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full lg:p-[30px]'>
                        <h1 className=" text-[5vw] font-light uppercase  lg:text-[1.7vw] ">

                            <span className="   font-medium  text-sky-600 ">
                                Best Web Development Company in India
                            </span>


                        </h1>
                        <p className='text-black text-gray-300'>INFRANIX TECHNOLOGY PRIVATE LIMITED is one of the best IT Companies in India that has practical experience in Graphic Design, Website Design and Development, Mobile Application (Android & iOS) Design and Development, and Digital Marketing (SEO, SMO, and PPC, and so forth). We have a large team of professional designers and developers who produce quality products that meet all the client’s requirements. We deliver high-quality work reliably for our clients located in different parts of the world. We are eager to be a part of your website, mobile application, or website design development. Making a versatile application and Website design, our expert team is completely fit for giving something one of a kind that will assist you with developing your business.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full lg:p-[30px]'>
                        <h1 className=" text-[5vw] font-light uppercase  lg:text-[1.7vw] ">

                            <span className="   font-medium  text-sky-600 ">
                                Search Engine Optimization
                            </span>


                        </h1>
                        <p className='text-black text-gray-300'>INFRANIX TECHNOLOGY PRIVATE LIMITED is one of the best IT Companies in India that has practical experience in Graphic Design, Website Design and Development, Mobile Application (Android & iOS) Design and Development, and Digital Marketing (SEO, SMO, and PPC, and so forth). We have a large team of professional designers and developers who produce quality products that meet all the client’s requirements. We deliver high-quality work reliably for our clients located in different parts of the world. We are eager to be a part of your website, mobile application, or website design development. Making a versatile application and Website design, our expert team is completely fit for giving something one of a kind that will assist you with developing your business.</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    )
}

export default HrSlider