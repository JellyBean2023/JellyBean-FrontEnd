"use client";
import Link from "next/link";
import { styled } from "styled-components";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import obj from '../../../assets/img/오브젝트1.webp';
import Image from "next/image";

const Section1Container = styled.section`
  width: 100%;
  height: 1014.75px;
  background-color: rgb(22, 93, 255);
  margin-top: -20px;
`;

const Main = styled.div`
  width: 100%;
  position: absolute;
  color: white;
  white-space: nowrap;
  text-align: center;

  img {
    position: absolute;
    z-index: -1;
    
    &#R {
      right: 0;
      transform: rotate(90deg);
    }
  }

  & #detail {
    margin: 20px 0 40px 0;
  }
`;

const Title = styled.div`
  font-size: 80px;
  padding-top: 100px;
  margin: 0 auto;
  text-align: center;
  align-items: center;

  
  @media screen and (max-width: 1024px) {
    font-size: 43px;
  }

  #Emphasis {
    color: yellow;
  }
`;

const SubTitle = styled.div`
  font-size: 18px;

  @media screen and (max-width: 1024px) {
    font-size: 11px;
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
  margin: 40px 0 0 0;

  &:hover {
    border: 0px solid rgb(29, 103, 205);
    background: #163070;
    color: white;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Box = styled.div`
  width: 225px;
  height: 200px;
  margin: 0 10px;
  background-color: rgba(0,0,0,0.3);
  text-align: left;
  word-wrap: break-word; 
  padding: 20px;

  @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
  }

  span {
    display: inline-block;
    font-size: 20px;
    margin: 10px 0;
  }

  div {
    white-space: break-spaces;

    p {
      font-size: 13px;
    }
  }
`;

const CurriculumJava = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <Section1Container>
      <Main data-aos="fade-up">
        <Image id="L" src={obj}/>
        <Image id="R" src={obj}/>
        <Title>
          <p>평범함을 넘어</p>
          <p>대체불가능한</p>
          <p id="Emphasis">온리원 풀스택 개발자</p>
          <SubTitle>
            <p>대한민국 1위 교육˙출판 전문기업 천재교육에서 운영하는 천재 IT교육센터에서</p>
            <p><strong>도전적이고 열정적인 에듀테크 풀스택(Full- stack) 개발자 2기</strong>를 모집합니다.</p>
          </SubTitle>
        </Title>
        <Link href={'/apply/java'}>
          <ApplyButton>신청하기 {`>`}</ApplyButton>
        </Link>
        <p id="detail">※모집 정원에 따라 예정된 기한보다 조기 마감될 수 있습니다. </p>
        <BoxContainer>
          <Box>
            <span>모집기간 ....</span>
            <div>
              <p><b>모집기간 : 2023.05.22~07.04</b></p>
              <p><b>합격자 발표</b> : 전화인터뷰 후</p>
              <p>일주일 이내</p>
            </div>
          </Box>
          <Box>
            <span>지원방법 ....</span>
            <div>
              <p><b>서류심사</b> : 신청폼 작성</p>
              <p><b>면접심사</b> : 개별 연락 후 전화인터뷰</p>
              <p><b>합격자발표</b> : 문자 개별 통보</p>
            </div>
          </Box>
          <Box>
            <span>참여대상 ....</span>
            <div>
              <p>-국민내일배움카드 보유 혹은 발급 가능한 자</p>
              <p>-K-Digital Training 수강 이력이없는 자</p>
            </div>
          </Box>
          <Box>
          <span>훈련기간 ....</span>
          <div>
            <p><b>2023.07.03~12.28</b></p>
            <p>(약 6개월)</p>
          </div>
          </Box>
        </BoxContainer>
      </Main>
    </Section1Container>
  )
}

export default CurriculumJava;