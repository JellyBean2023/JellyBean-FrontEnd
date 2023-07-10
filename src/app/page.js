"use client";
import styled from 'styled-components';
import Banner from "@/components/Main/Banner";
import Curriculum from '@/components/Main/Curriculum';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

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
  background-color: #553BF3;

  span{
    &#line-block{
      display: block;
      margin-top: 10px;
      content: "";
    }

    display: block;
  margin-bottom: 10px;
  }

  p{
    &#title{
      color:white;
    }
  }

  &#benefitContainer{
    height: 110rem;
  }
  `;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

const Box = styled.div`
  width: 250px;
  height: 200px;
  margin: 0 25px;
  background-color: white;
  text-align: left;
  color: black;
  word-wrap: break-word; 
  padding: 20px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
  }
  
  &#review{
    width: 54rem;
    height: 100px;
    background-color: #EDE0E0;
    margin-top: 40px;
    margin-left: 50px;
    border-radius: 20px;
    color:black;

    @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
  }
  }

  &#benefit{
    width: 54rem;
    height: 250px;
    margin-top: 35px;

    p{
      
      &#rightTitle{
        font-size: 40px;
        padding-left: 230px;
      }

      &#rightContent{
        font-size: 20px;
        padding-left: 230px;
      }

      &#leftTitle{
        font-size: 40px;
        padding-right: 230px;
        padding-left: 20px;
      }

      &#leftContent{
        font-size: 20px;
        padding-right: 230px;
        padding-left: 20px;
      }
    }
  }
  &#FAQ{
    width: 300px;
    height: 300px;

    @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
  }
  }

  &#info{
    width:600px;
    height: 400px;

    @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
  }
    p{
      font-size: 17px;
      padding-top: 10px ;
      padding-left: 20px;

      &#margintop{
        margin-top: 20px;
      }
    }
  }

  p{
    font-size: 13px;

    &#center{
      text-align: center;
    }

    &#margintop{
      margin-top: 30px;
     }
  }

  span {
    display: inline-block;
    font-size: 25px;
    margin: 10px 0;

    &#puple{
      color: rgb(45, 20, 132);
      font-weight: 900;
    }
  }

  div {
    white-space: break-spaces;
  }

  a {
    color: var(--accent-link-color);
    text-decoration: none;
    margin-left: 7px;
    
    &:hover {
      text-decoration-line: underline
    }
  }
`;

const ReviewBox = styled.div`
  width: 60rem;
  height: 38rem;
  background-color: #D9D9D9;
  border-radius: 20px;

`
const BannerBox = styled.div`
  width: 93.5rem;
  height: 130px;
  background-color: pink;
`

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  });

  return (
    <MainContainer>
      <Banner />
      <LayerContainer>
        <div>
          <span data-aos="zoom-in-up">
            <p id='title'>내게 맞는 코스를 찾아주세요</p>
            <BoxContainer>
          <Box data-aos="zoom-in-up">
            <span>빅데이터 4기</span>
            <div>
              <p>제너릴리스트인 당신! 천재 IT교육센터와 함께라면 슈퍼-제너릴리스트가 됩니다.</p>
              <p id="margintop"><Link href= "/curriculum/bigdata"> 더알아보기</Link></p>
            </div>
          </Box>
          <Box data-aos="zoom-in-up">
            <span>풀스택 2기</span>
            <div>
              <p>제너릴리스트인 당신! 천재 IT교육센터와 함께라면 슈퍼-제너릴리스트가 됩니다.</p>
              <p id="margintop"><Link href= "/curriculum/java"> 더알아보기</Link></p>
            </div>
          </Box>
          <Box data-aos="zoom-in-up">
            <span>프로덕트 매니저 2기</span>
            <div>
              <p>제너릴리스트인 당신! 천재 IT교육센터와 함께라면 슈퍼-제너릴리스트가 됩니다.</p>
              <p id="margintop"><Link href= "/curriculum/pm"> 더알아보기</Link></p>
            </div>
          </Box>
        </BoxContainer>
          </span>
        </div>
      </LayerContainer>

      <LayerContainer>
        <span data-aos="zoom-in-up">
          <p id='title'>천재교육 디지털 러닝팀에서 만나요</p>
          <BoxContainer>
            <ReviewBox data-aos="zoom-in-up">
              <Box id='review'></Box>
              <Box id='review'></Box>
              <Box id='review'></Box>
              <Box id='review'></Box>
            </ReviewBox>
          </BoxContainer>
        </span>
      </LayerContainer>
      <LayerContainer id='benefitContainer'>
        <span data-aos="zoom-in-up">
          <p id='title'><p>왜 천재교육 IT센터여야 할까요?</p> 훈련생들분들께 제공되는 혜택을 소개합니다</p>
            <BoxContainer>
              <Box id='benefit'>
                <p id='rightTitle'>제목1</p>
                <p id='rightContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
              </Box>
              <Box id='benefit'>
                <p id='leftTitle'>제목2</p>
                <p id='leftContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
              </Box>
              <Box id='benefit'>
                <p id='rightTitle'>제목3</p>
                <p id='rightContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
              </Box>
              <Box id='benefit'>
                <p id='leftTitle'>제목4</p>
                <p id='leftContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
              </Box>
              
            </BoxContainer>
        </span>
      </LayerContainer>

      <LayerContainer>
        <span data-aos="zoom-in-up">
          <p id='title'>천재가 되는 교육의 발견</p>
            <BoxContainer>
              <Box id='FAQ'>
                <p><b>카카오톡 1:1 상담</b></p>
              </Box>
              <Box id='FAQ'>
                <p><b>고객문의</b></p>
              </Box>
              <Box id='FAQ'>
                <p><b>자주하는 질문</b></p>
              </Box>
            </BoxContainer>
        </span>
      </LayerContainer>

      <LayerContainer>
        <span data-aos="zoom-in-up">
          <p id='title'>교육 혁신을 선도하는 정보 공간</p>
            <BoxContainer>
              <Box id='info'></Box>
              <Box id='info'>
                <p><b>공지사항</b></p>
                <p id='margintop'>내용들어갈 자리</p>
              </Box>
            </BoxContainer>
        </span>
      </LayerContainer>
      
      <BannerBox>하단 배너 이미지 들어갈 자리</BannerBox>  

    </MainContainer>
  );
}

export default Main;