'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {loginState} from "./Login/Login"
import { Skeleton } from '@mui/material';

const TESTContainer = styled.section`
  background-color: wheat;
  color: black;
  height: 100vh;
  padding: 100px;
`;


const TEST = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 30000);
  
    return () => clearTimeout(timer);
  }, []);
  

  // const [imageUrl, setImageUrl] = useState('');
  
  // const fileName = 'banners_image_007.png';
  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/fileSystem/${fileName}`, {
  //         responseType: 'blob',
  //       });

  //       console.log('response:', response.data);
  //       const imageUrl = URL.createObjectURL(response.data);
  //       setImageUrl(imageUrl);

  //       console.log('이미지 경로:', imageUrl);
  //     } catch (error) {
  //       console.error('Error fetching image:', error);
  //     }
  //   };
  //   fetchImage();
  // }, []);

  return (
    <TESTContainer>
      {/* <Image src={imageUrl} alt="이미지" width={300} height={200} /> */}
      {loading ? (
        <Skeleton 
          className='h-50' //tailwind 크기조절
          count={5}        //줄 개수
          animation="wave"
          variant="rectangular"
        />
        ):(
          <div>
            Not Loading
          </div>
      )}
      <Skeleton variant="rectangular" width={210} height={60} />
    </TESTContainer>
  );
};

export default TEST;