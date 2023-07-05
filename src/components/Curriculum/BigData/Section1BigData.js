"use client";
import Link from "next/link";
import { styled } from "styled-components";
import o1 from '../../../assets/img/0101.webp'
import Image from "next/image";

const Section1Container = styled.main`
  width: 100%;
  height: 1014.75px;
  background-color: rgb(85, 59, 243);
  padding: 1rem;
  color: white;

  @media screen and (min-width: 1024px) {
    padding: 5rem;
  }
  
  img {
    top: 5rem;
    left: 0;
    z-index: -1;
    height: 80%;
  } 
`;

const MainContainer = styled.div`
  position: absolute;
  top: 12rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
    top: 8rem;
  }
`;

const Title = styled.div`
  font-size: 80px;
  white-space: nowrap;
  line-height: 90px;
  font-weight: bold;

  & strong {
    color: yellow;
  }

  @media screen and (max-width: 1024px) {
    line-height: 70px;
    font-size: 60px;
  }
`;

const SubTitle = styled.div`
  margin: 40px 0;
  span {
    font-size: 23px;
    @media screen and (min-width: 1024px) {
      white-space: nowrap;
    }
  }

  @media screen and (max-width: 1024px) {
    white-space: break-spaces;

    p {
      font-size: 10px;
    }
  }
`;

const ApplyButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: yellow;
  color: black;
  border-radius: 60px;
  box-shadow: 0.31px 2.98px 8px -3px #595959;
  transition: all 0.2s ease, visibility 0s;

  &:hover {
  border: 0px solid rgb(29, 103, 205);
  background: #163070;
  color: white;
  }
`;

const Section1BigData = () => {
  return (
  <Section1Container>
    <Image src={o1} alt="Image" />
    <MainContainer>
      <Title>
        <p>프로젝트 기반</p>
        <p><strong>​빅데이터</strong> 서비스</p>
        <p>​개발자 4기 모집</p>
      </Title>
      <SubTitle>
        <span>천재 IT교육센터 에서 교육-인턴-취업, 취준생에서 천재그룹 개발자까지!</span>
        <p>대한민국 1위 교육출판 전문 기업 천재교육과 함께 교육의 미래를 선도할 도전적이고 열정적인 인재를 기다립니다.</p>
        <p>'천재 IT교육센터'는 고용노동부 K-digital Training 프로그램의 정식 운영 기관으로, 천재교육의 ​빅데이터를 활용한 프로젝트 기반의 디지털 인재 양성 기관입니다.</p>
      </SubTitle>

      <Link href={'/apply/bigdata'}>
        <ApplyButton>신청하기 {`>`}</ApplyButton>
      </Link>
      <p id="detail">※모집 정원에 따라 예정된 기한보다 조기 마감될 수 있습니다. </p>
    </MainContainer>
  </Section1Container>
  )
}

export default Section1BigData;