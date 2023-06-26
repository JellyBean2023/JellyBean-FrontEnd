"use client";
import styled from 'styled-components';
import Banner from "@/components/Main/Banner";
import Curriculum from '@/components/Main/Curriculum';

const MainContainer = styled.main`
  section {
    padding: 0.5rem 0;
    min-height: 5rem;
  }
`;

const LayerContainer = styled.section`
  text-align: center;
  vertical-align: middle;
  display : flex;
  justify-content : center;
  align-items : center;
  font-size: 25px;
  color: var(--text-color);
`;

const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <LayerContainer>내게 맞는 코스를 찾아주세요</LayerContainer>
      <Curriculum/>
      <LayerContainer>천재교육 디지털 러닝팀에서 만나요</LayerContainer>
      <section>
        dddd
      </section>
    </MainContainer>
  );
}

export default Main;