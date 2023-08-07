import styled from 'styled-components';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Skeleton } from "@mui/material";

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

  .BFTitleLoading{
    width: 7rem;
    height: 3rem;
    margin-left: 4rem;
    margin-top: -1rem;
  }

  .BFContentLoading{
    width: 30rem;
    height: 2rem;
    margin-left: 4rem;
    padding-top: 3rem;
  }

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

const ImageBox = styled.div`
    margin: 10px 10px 10px 10px;
    width: 20rem;
    height: 13rem;
    border-radius: 50%;
    border: 1px solid;
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
    display: flex;
    align-items: center;

    div{
      &#benefitContentBox{
        margin: -5rem 0 0 -1rem;
      }

      &#benefitBox{
        display: flex;
        align-items: center;
      }
    }

    p{
      &#textLoading{
        margin-bottom: -1rem;
      }

      &#rightTitle{
        font-size: 40px;
        padding-left: 2rem;
        margin-top: -3rem;
        
        @media screen and (max-width: 1024px) {
          font-size: 30px;
          padding-left: 10px;
        }
      }

      &#rightContent{
        font-size: 20px;
        padding-left: 2rem;
        margin-top: 1rem;

        @media screen and (max-width: 1024px) {
          font-size: 15px;
          padding: 10px 10px 20px 10px
        }
      }

      &#leftTitle{
        font-size: 40px;
        padding-left: 5rem;

        @media screen and (max-width: 1024px) {
          font-size: 30px;
          padding-left: 10px;
        }
      }

      &#leftContent{
        font-size: 20px;
        padding-left: 5rem;

        @media screen and (max-width: 1024px) {
          font-size: 15px;
          padding: 10px 10px 20px 10px
        }
      }
    }

    @media screen and (max-width: 1024px) {
    width: 35rem;
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

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (

    <LayerContainer id='benefitContainer'>
      <span data-aos="zoom-in-up">
        <p id='title1'>왜 천재교육 IT센터여야 할까요?</p> <p id='title2'>훈련생들분들께 제공되는 혜택을 소개합니다</p>
        <BoxContainer>
          <Box id='benefit' data-aos="zoom-in-up">
            {loading ? (
              <Skeleton variant="circular" width={200} height={200} />
            ) : (
              <ImageBox />
            )}

            <div id='benefitContnetBox'>
              <p id='textLoading'>
                {loading ? (
                  <Skeleton className='BFTitleLoading' variant="text" />
                ) : (
                  <p id='rightTitle'>제목1</p>
                )}
              </p>

              {loading ? (
                <Skeleton className='BFContentLoading' variant="text" />
              ) : (
                <p id='rightContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
              )}
            </div>
          </Box>

          <Box id='benefit' data-aos="zoom-in-up">           
            <div id='benefitBox'>
              <div id='benefitContentBox'>
                <p id='leftTitle'>제목2</p>
                <p id='leftContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
              </div>
              {loading ? (
                <Skeleton variant="circular" width={200} height={200} />
              ) : (
                <ImageBox />
              )}
            </div>
          </Box>

          <Box id='benefit' data-aos="zoom-in-up">
            {loading ? (
              <Skeleton variant="circular" width={200} height={200} />
            ) : (
              <ImageBox />
            )}

            <div id='benefitContnetBox'>
              <p id='textLoading'>
                {loading ? (
                  <Skeleton className='BFTitleLoading' variant="text" />
                ) : (
                  <p id='rightTitle'>제목3</p>
                )}
              </p>

              {loading ? (
                <Skeleton className='BFContentLoading' variant="text" />
              ) : (
                <p id='rightContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
              )}
            </div>
          </Box>

          <Box id='benefit' data-aos="zoom-in-up">           
            <div id='benefitBox'>
              <div id='benefitContentBox'>
                <p id='leftTitle'>제목4</p>
                <p id='leftContent'>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</p>
              </div>
              {loading ? (
                <Skeleton variant="circular" width={200} height={200} />
              ) : (
                <ImageBox />
              )}
            </div>
          </Box>

        </BoxContainer>

      </span>
    </LayerContainer>
  )
}

export default Section3;