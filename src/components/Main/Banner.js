import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const Dummy = [dummy, dummy2,dummy,dummy2,dummy]

const Banner = () => {
  // const [fileNames, setFileNames] = useState([]);
  // const [imageUrls, setImageUrls] = useState([]);

  // useEffect(() => {
  //   const fetchFileNames = async () => {
  //     try {
  //       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/fileSystem/images`);
  //       setFileNames(response.data);
  //     } catch (error) {
  //       console.error('Error fetching file names:', error);
  //     }
  //   };

  //   fetchFileNames();
  // }, []);

  // useEffect(() => {
  //   const fetchImageUrl = async (fileName) => {
  //     try {
  //       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/fileSystem/${fileName}`, {
  //         responseType: 'blob',
  //       });
  //       const imageUrl = URL.createObjectURL(response.data);
  //       setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
  //     } catch (error) {
  //       console.error('Error fetching image:', error);
  //     }
  //   };

  //   fileNames.forEach((fileName) => {
  //     fetchImageUrl(fileName);
  //   });
  // }, [fileNames]);

  // const banner = imageUrls > 0 ? imageUrls : Dummy;

  return (
    <section className={banner.swiper}>
      <Swiper
        className="bannerScreen"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true
        }}
      >
        {Dummy.map((imgUrl, idx) => (
          <SwiperSlide key={idx}>
            <Image src={imgUrl} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
