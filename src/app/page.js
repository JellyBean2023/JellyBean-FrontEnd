"use client";
import styled from 'styled-components';
import Banner from "@/components/Main/Banner";
import Curriculum from '@/components/Main/Curriculum';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.css";
import Section1 from '@/components/Main/Section1';
import Section2 from '@/components/Main/Section2';
import Section3 from '@/components/Main/Section3';
import Section4 from '@/components/Main/Section4';
import Section5 from '@/components/Main/Section5';
import Section6 from '@/components/Main/Section6';

const MainContainer = styled.main`
  section {
    padding: 0.5rem 0;
    min-height: 15rem;
  }
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
      <Section1 />
      <Curriculum />
      <Section2/>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </MainContainer>
  );
}

export default Main;