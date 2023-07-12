import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Image from 'next/image';
import dummy from '@/assets/img/Dummy.jpg';
import dummy2 from '@/assets/img/Dummy2.png';
import banner from '@/assets/scss/Main/Banner.module.scss';

const dummyImg = [dummy, dummy2, dummy, dummy2, dummy];

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = memo(() => {
  const [fileNames, setFileNames] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  // 파일 목록 불러오기
  useEffect(() => {
    const fetchFileNames = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/fileSystem/images`);
        setFileNames(response.data);
      } catch (error) {
        console.error('Error fetching file names:', error);
      }
    };

    fetchFileNames();
  }, []);

  // 이미지 불러오기
  useEffect(() => {
    const fetchImageUrl = async (fileName) => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/fileSystem/${fileName}`, {
          responseType: 'blob',
        });
        const imageUrl = URL.createObjectURL(response.data);
        setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fileNames.forEach((fileName) => {
      fetchImageUrl(fileName);
    });
  }, [fileNames]);

  // imageUrls가 없을 경우 dummy 이미지 사용
  const renderedImages = imageUrls.length > 0 ? imageUrls : dummyImg;

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
          disableOnInteraction: true,
        }}
      >
        {renderedImages.map((imgUrl, idx) => (
          <SwiperSlide key={idx}>
            <Image src={imgUrl} alt={dummy} width={100} height={100} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default Banner;
