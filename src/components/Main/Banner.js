"use client";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Image from 'next/image';
import dummy from '@/assets/img/Dummy.jpg';
import dummy2 from '@/assets/img/Dummy2.png';
import banner from '@/assets/scss/Main/Banner.module.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const imgs = [dummy2,dummy,dummy2,dummy,dummy2];

const Banner = () => {
  return (
    <section className={banner.swiper}>
      <Swiper className="bannerScreen"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,               // 슬라이드 전환 시간
          disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
        }}
      >
        {imgs.map((img, idx) => {
          return(
            <SwiperSlide key={idx}><Image src={img} alt={``}/></SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
};

export default Banner;