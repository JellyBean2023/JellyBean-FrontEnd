import { Skeleton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Star1 from '../../assets/img/star1.svg';
import Star2 from '../../assets/img/star2.svg';

const LayerContainer = styled.section`
    text-align: center;
    vertical-align: middle;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 40px;
    color: var(--text-color);
    height: 100rem;
    background-color: #553BF3;

    .reviewloading{
        width: 38rem;
        height: 14rem;
        margin-top: -3rem;
    }

    .starloading{
        width: 8rem;
        height: 3rem;
        margin: 3rem 1rem
    }

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
            padding-bottom: 7rem;
        }

        @media screen and (max-width: 1024px) {
           width: 100%;
        }
    }

    @media (max-width: 1024px) {
        font-size: 25px;
        height: 100rem;
        padding-top: 30rem;
    }
`;

const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;

    @media screen and (max-width: 1024px) {
           width: 90%;
        }
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
    display: flex;

    img{
        &#star{
            margin: 0px -9px -14px 10px;
            width: 23px   
        }
        
        @media screen and (max-width: 1024px) {
            &#star{    
                margin: 0px -9px -14px 10px;
                width:1rem;
                height: 1rem;
            }
        }
    }

    &#review{
        width: 54rem;
        height: 11rem;
        background-color: #EDE0E0;
        margin-top: 40px;
        margin-left: 50px;
        border-radius: 20px;
        color:black;

        @media screen and (max-width: 1024px) {
            width: 32rem;
            height: 15.5rem;
            margin-left:20px;
            margin-top: 20px;
            display: inline-block;
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

        &#star{
            white-space: break-spaces;
            display: flex;

        }
       
        &#review{
            white-space: break-spaces;
            display: flex;
            width: 48rem;
            margin-right: -7rem;
        }
    }
    
`;

const ReviewBox = styled.div`
    width: 60rem;
    height: 57rem;
    background-color: #D9D9D9;
    border-radius: 20px;

    @media screen and (max-width: 1024px) {
        width: 38rem;
        height: 68.5rem;
        margin-left: 4rem;
    }

`;

const Review = styled.div`
    width: 80%;
    height: 100%;
    background-color: lightgray;
    margin-left: 30px;
    border-radius: 10px;
    display: inline-block;

    p{
        &#userId{
            margin: 13px 0px 13px 14px;
            font-size: 20px;
        }

        &#reviewText{
            margin: 8px 10px 9px 15px;
            font-size: 13px;
        }

        @media screen and (max-width: 1024px) {
           width: 100%;

           &#reviewText{
            width: auto;
           }
        }
    }


    @media screen and (max-width: 1024px) {
        width: 30rem;
        height: 10rem;
        margin-top: 3rem;
        margin-left: 0rem;
    }
`;


const ImageBox = styled.div`
    margin: 18px 10px 10px 10px;
    width: 7.5rem;
    height: 6.5rem;
    border-radius: 50%;
    border: 1px solid;
    

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

const Section2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    });

    //로딩 구현 함수
    //useState(true) : 로딩 중
    //useState(false) : 로딩 해제
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LayerContainer>
            <span data-aos="zoom-in-up">
                <p id='title'>천재교육 디지털 러닝팀에서 만나요</p>
                <BoxContainer>
                    <ReviewBox data-aos="zoom-in-up">
                        <Box id='review' data-aos="zoom-in-up">
                            {loading ? (
                                <Skeleton variant="circular" width={100} height={100} />
                            ) : (
                                <ImageBox />
                            )}

                            {loading ? (
                                <Skeleton className="starloading" variant="text" />
                            ) : (
                                <div id='star'>
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star2' id='star' />
                                </div>
                            )}

                            {loading ? (
                                <Skeleton className="reviewloading" variant="text" />
                            ) : (
                                <div id="review">
                                    <Review>
                                        <p id="userId">chunjaeFullstack1</p>
                                        <p id="reviewText">지금까지 들어본 강의중에 최고였습니다. 많은 것들을 배우고갑니다. 최고의 천재교육 풀스택강의 꼭 추천합니다!!</p>
                                    </Review>
                                </div>
                            )}
                        </Box>
                        <Box id='review' data-aos="zoom-in-up">
                            {loading ? (
                                <Skeleton variant="circular" width={100} height={100} />
                            ) : (
                                <ImageBox />
                            )}

                            {loading ? (
                                <Skeleton className="starloading" variant="text" />
                            ) : (
                                <div id="star">
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star2' id='star' />
                                </div>
                            )}

                            {loading ? (
                                <Skeleton className="reviewloading" variant="text" />
                            ) : (
                                <div id="review">
                                    <Review>
                                        <p id="userId">chunjaeFullstack2</p>
                                        <p id="reviewText">지금까지 들어본 강의중에 최고였습니다. 많은 것들을 배우고갑니다. 최고의 천재교육 풀스택강의 꼭 추천합니다!!</p>
                                    </Review>
                                </div>
                            )}
                        </Box>
                        <Box id='review' data-aos="zoom-in-up">
                            {loading ? (
                                <Skeleton variant="circular" width={100} height={100} />
                            ) : (
                                <ImageBox />
                            )}

                            {loading ? (
                                <Skeleton className="starloading" variant="text" />
                            ) : (
                                <div id="star">
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star2' id='star' />
                                </div>
                            )}

                            {loading ? (
                                <Skeleton className="reviewloading" variant="text" />
                            ) : (
                                <div id="review">
                                    <Review>
                                        <p id="userId">chunjaePM</p>
                                        <p id="reviewText">지금까지 들어본 강의중에 최고였습니다. 많은 것들을 배우고갑니다. 최고의 천재교육 PM강의 꼭 추천합니다!!</p>
                                    </Review>
                                </div>
                            )}
                        </Box>
                        <Box id='review' data-aos="zoom-in-up">
                            {loading ? (
                                <Skeleton variant="circular" width={100} height={100} />
                            ) : (
                                <ImageBox />
                            )}

                            {loading ? (
                                <Skeleton className="starloading" variant="text" />
                            ) : (
                                <div id="star">
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star1' id='star' />
                                    <Image src={Star1} alt='Star2' id='star' />
                                </div>
                            )}

                            {loading ? (
                                <Skeleton className="reviewloading" variant="text" />
                            ) : (
                                <div id="review">
                                    <Review>
                                        <p id="userId">chunjaeBigdata</p>
                                        <p id="reviewText">지금까지 들어본 강의중에 최고였습니다. 많은 것들을 배우고갑니다. 최고의 천재교육 빅데이터강의 꼭 추천합니다!!</p>
                                    </Review>
                                </div>
                            )}
                        </Box>
                        
                    </ReviewBox>
                </BoxContainer>
            </span>
        </LayerContainer>
    )
}
export default Section2;