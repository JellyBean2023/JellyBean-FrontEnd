"use client";
import Link from "next/link";
import { styled } from "styled-components";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.css";

const SectionHeroContainer = styled.section`
  width: 100%;
  height: 1014.75px;
  background-color: rgb(45, 20, 132);
  padding: 2rem;
  color: white;
`;

const Main = styled.div`
  width: 100%;
  position: absolute;
  color: white;
  white-space: nowrap;
  text-align: left;

  img {
    position: absolute;
    z-index: -1;
    
    &#R {
      right: 0;
      transform: rotate(90deg);
    }
  }

  & #detail {
    margin: 20px 0 40px 20px;
  }
`;

const Title = styled.div`
  font-size: 80px;
  font-weight: 900;
  padding-top: 150px;
  margin-left: 200px;
  text-align: left;
  align-items: center;
  line-height: 90px;
  
  @media screen and (max-width: 1024px) {
    font-size: 43px;
  }

  #Emphasis {
    color: #FAE300;
  }

  #thin{
    font-weight: 350;
  }

`;

const SubTitle = styled.div`
  font-size: 25px;
  line-height: 80px;

  @media screen and (max-width: 1024px) {
    font-size: 11px;
  }

  &#sub {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }

  &#yello{
    color: #FAE300;
  }
`;

const ApplyButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #FAE300;
  color: black;
  border-radius: 60px;
  box-shadow: 0.31px 2.98px 8px -3px #595959;
  transition: all 0.2s ease, visibility 0s;
  margin-top: 40px;
  margin-left: 200px;

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
  margin-top: 50px;
  margin-left: -50px;
`;

const Box = styled.div`
  width: 250px;
  height: 200px;
  margin: 0 10px;
  background-color: white;
  text-align: left;
  word-wrap: break-word; 
  padding: 20px;
  color: var(--text-color);
  border-radius: 20px;

  @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
  }

  p{

    &#center{
      text-align: center;
    }
  }

  span {
    display: inline-block;
    font-size: 20px;
    margin: 10px 0;

    &#puple{
      color: rgb(45, 20, 132);
      font-weight: 900;
    }
  }

  div {
    white-space: break-spaces;

    p {
      font-size: 13px;
    }
  }
`;

const CurriculumPM = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <SectionHeroContainer>
      <Main data-aos="fade-up">
        <Title>
          <p id ="thin">제너릴리스트인 당신!</p>
          <p><strong>천재 IT교육센터와 함께라면</strong></p>
          <p><span id="Emphasis">슈퍼-제너릴리스트</span>가 됩니다.</p>
          <SubTitle id ="yello">
            <p>에듀테크 프로덕트 매니저 [PM/서비스 기획자] 2기 모집</p>
          </SubTitle>
          <SubTitle id = "sub">
            <p>대한민국 1위 교육·출판 전문 기업 천재교육 GeniA 아카데미가 운영하는</p>
            <p>에듀테크 PM 과정은 그동안 없었던 <strong>새로운 PM 교육과정</strong>입니다.</p>
          </SubTitle>
        </Title>
        <Link href={'/apply/pm'}>
          <ApplyButton>신청하기 {`>`}</ApplyButton>
        </Link>
        <span id="detail">※모집 정원에 따라 예정된 기한보다 조기 마감될 수 있습니다. </span>
        <BoxContainer>
          <Box>
            <p id="center">1</p>
            <span id="puple">모집기간</span>
            <div>
              <p><b>모집기간 : 2023.05.22~07.04</b></p>
              <p><b>합격자 발표</b> : 전화인터뷰 후</p>
              <p>일주일 이내</p>
            </div>
          </Box>
          <Box>
          <p id="center">2</p>
            <span id="puple">지원방법</span>
            <div>
              <p><b>서류심사</b> : 신청폼 작성</p>
              <p><b>면접심사</b> : 개별 연락 후 전화인터뷰</p>
              <p><b>합격자발표</b> : 문자 개별 통보</p>
            </div>
          </Box>
          <Box>
          <p id="center">3</p>
            <span id="puple">참여대상</span>
            <div>
              <p>-국민내일배움카드 보유 혹은 발급 가능한 자</p>
              <p>-K-Digital Training 수강 이력이없는 자</p>
            </div>
          </Box>
          <Box>
          <p id="center">3</p>
          <span id="puple">훈련기간</span>
          <div>
            <p><b>2023.07.03~12.28 (약 6개월)</b></p>
          </div>
          </Box>
        </BoxContainer>
      </Main>
    </SectionHeroContainer>
  )
}

export default CurriculumPM;