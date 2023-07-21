import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Image from 'next/image';
import d1 from '@/assets/img/dummy.jpg';
import d2 from '@/assets/img/dummy2.png';
import banner from '@/assets/scss/Main/Banner.module.scss';
import { Skeleton } from '@mui/material';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = () => {
  const [loading, setLoading] = useState(true);
  const [fileNames, setFileNames] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchFileNames = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/fileSystem/images`);
        const file = response.data.map((path) => path.substring(path.lastIndexOf('\\') + 1));
        setFileNames(file);
      } catch (error) {
        // console.error('Error fetching file names: ', error);
      }
    };

    fetchFileNames();
  }, []);

  useEffect(() => {
    const fetchImageUrl = async (fileName) => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/fileSystem/${fileName}`, {
          responseType: 'blob',
        });
        const imageUrl = URL.createObjectURL(response.data);
        setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching image:', error);
        setImageUrls((prevImageUrls) => [...prevImageUrls, '']);
        setLoading(false);
      }
    };

    fileNames.forEach((fileName) => {
      fetchImageUrl(fileName);
    });
  }, [fileNames]);

  const images = useMemo(() => {
    return imageUrls.length > 0 ? imageUrls : [d1, d2];
  }, [imageUrls]);

  return (
    <section className={banner.swiper}>
      {loading ? (
          <Skeleton variant="rectangular" height={500}/>
        ) : (
        <Swiper
          className={banner.bannerScreen}
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
          {images.map((imageUrl, idx) => (
            <SwiperSlide key={idx}>
              <Image src={imageUrl} width={100} height={80} alt="Banner Image" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default React.memo(Banner);