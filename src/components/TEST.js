'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {loginState} from "./Login/Login"
const TESTContainer = styled.section`
  background-color: wheat;
  color: black;
  height: 100vh;
`;


const TEST = () => {
  const [imageUrl, setImageUrl] = useState('');
  const token = useRecoilValue(loginState);
  
  const fileName = 'banners_image_007.png';
  
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/fileSystem/${fileName}`, {
          responseType: 'blob',
        });

        console.log('response:', response.data);
        const imageUrl = URL.createObjectURL(response.data);
        setImageUrl(imageUrl);

        console.log('이미지 경로:', imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchImage();
  }, []);

  return (
    <TESTContainer>
      ID_TOKEN:{token}
      {token && imageUrl && <Image src={imageUrl} alt="이미지" width={300} height={200} />}
    </TESTContainer>
  );
};

export default TEST;