import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


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
    display: block;
    margin-bottom: 10px;

    &#line-block{
        display: block;
        margin-top: 10px;
        content: "";
      }

  }

  p{
    &#title1{
      color:white;
    }
    &#title2{
      color:white;
      padding-bottom: 10rem;
    }
  }
  @media (max-width: 1024px) {
        font-size: 20px;
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

  &#benefit{
    width: 54rem;
    height: 250px;
    margin-top: 35px;

    p{

      &#rightTitle{
        font-size: 40px;
        padding-left: 230px;
        
        @media screen and (max-width: 1024px) {
          font-size: 30px;
          padding-left: 10px;
        }
      }

      &#rightContent{
        font-size: 20px;
        padding-left: 230px;

        @media screen and (max-width: 1024px) {
          font-size: 15px;
          padding: 10px 10px 20px 10px
        }
      }

      &#leftTitle{
        font-size: 40px;
        padding-right: 230px;
        padding-left: 20px;

        @media screen and (max-width: 1024px) {
          font-size: 30px;
          padding-left: 10px;
        }
      }

      &#leftContent{
        font-size: 20px;
        padding-right: 230px;
        padding-left: 20px;

        @media screen and (max-width: 1024px) {
          font-size: 15px;
          padding: 10px 10px 20px 10px
        }
      }
    }

    @media screen and (max-width: 1024px) {
    width: 23rem;
    height: 15rem;
    margin-left:20px;
    margin-top: 20px;
  }
  }

  p{
    font-size: 13px;
  }

  span {
    display: inline-block;
    font-size: 25px;
    margin: 10px 0;
  }

  div {
    white-space: break-spaces;
  }
`;

const Section3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  });

  return (

    <LayerContainer id='benefitContainer'>
      <span data-aos="zoom-in-up">
        <p id='title1'>왜 천재교육 IT센터여야 할까요?</p> <p id='title2'>훈련생들분들께 제공되는 혜택을 소개합니다</p>
        <BoxContainer>
          <Box id='benefit' data-aos="zoom-in-up">
            <p id='rightTitle'>제목1</p>
            <p id='rightContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
          </Box>
          <Box id='benefit' data-aos="zoom-in-up">
            <p id='leftTitle'>제목2</p>
            <p id='leftContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
          </Box>
          <Box id='benefit' data-aos="zoom-in-up">
            <p id='rightTitle'>제목3</p>
            <p id='rightContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
          </Box>
          <Box id='benefit' data-aos="zoom-in-up">
            <p id='leftTitle'>제목4</p>
            <p id='leftContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
          </Box>
        </BoxContainer>
       
      </span>
    </LayerContainer>
  )
}

export default Section3;