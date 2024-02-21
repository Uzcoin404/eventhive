"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

export default function Hero() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      
      navigation
      className="hero_swiper"
    >
      <SwiperSlide>
        <div className="hero_slide w-full relative">
          <h1 className="font-bold text-white hero_title mx-auto text-center uppercase">Made for those who do</h1>
          <Image
            src="/img/unsplash_F2KRf_QfCqw.jpg"
            alt=""
            fill
            objectFit="cover"
            priority={true}
            placeholder="empty"
            className="-z-10 pointer-events-none "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full relative" style={{ height: '600px' }}>
          <Image
            src="/img/unsplash_F2KRf_QfCqw.jpg"
            alt=""
            fill
            objectFit="cover"
            priority={true}
            placeholder="empty"
            className="rounded-lg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
