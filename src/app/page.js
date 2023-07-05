"use client";
import styled from 'styled-components';
import Banner from "@/components/Main/Banner";
import Curriculum from '@/components/Main/Curriculum';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainContainer = styled.main`
  section {
    padding: 0.5rem 0;
    min-height: 15rem;
  }
`;

const LayerContainer = styled.section`
  text-align: center;
  vertical-align: middle;
  display : flex;
  justify-content : center;
  align-items : center;
  font-size: 40px;
  color: var(--text-color);
  height: 50rem;
`;

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  });

  return (
    <MainContainer>
      <Banner />
      <LayerContainer><span data-aos="zoom-in-up">내게 맞는 코스를 찾아주세요</span></LayerContainer>
      <Curriculum/>
      <LayerContainer><span data-aos="zoom-in-up">천재교육 디지털 러닝팀에서 만나요</span></LayerContainer>
      <section>
        dddd
      </section>
    </MainContainer>
  );
}

export default Main;