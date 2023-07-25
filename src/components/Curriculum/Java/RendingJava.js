'use client';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../../../assets/scss/Curriculum/swiper.scss';
import Link from "next/link";

SwiperCore.use([Navigation, Pagination]);

const RendingContainer = styled.section`
    background-color: black;
    padding: 3rem 1rem;
`
// const videoIds = ["dAH5prLK_QQ", "8SHu9ksFqk0", "4isSj9WcXUI", "JQvF3vLe1Gc", "5r4IQh4SPNo", "MYPVQccHhAQ"];
const videoIds = ["dAH5prLK_QQ", "8SHu9ksFqk0", "4isSj9WcXUI"];

const RendingJava = () => {
  return(
    <RendingContainer>
      <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
        >
        {videoIds.map((videoId, idx) => (
            <SwiperSlide key={idx}>
                <Link href={`#${idx}`}>
                    <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt="Thumbnail"/>
                </Link>
            </SwiperSlide>
        ))}
        </Swiper>
    </RendingContainer>
  )
}

export default RendingJava;