import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";


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

    @media (max-width: 1024px) {
        font-size: 30px;
        height: 70rem;
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
    background-color: #CBDE53;
    text-align: left;
    color: black;
    word-wrap: break-word; 
    padding: 20px;
    border-radius: 20px;
    
    #FAQLink{
        float: right;
        display: inline-flex;
        align-items: center;
    }

    div{
        height: 10rem;

        &#contact{
            height: 12rem;
        }

        &#FAQ{
            height: 12rem;
        }
    }

    &#FAQ{
        width: 370px;
        height: 300px;

        @media (max-width: 1024px) {
            width: 50%;
            height: 300px;
            margin-bottom: 30px;
        }
    }

    &#kakao{
        width: 370px;
        height: 300px;
        background-color: #fee102;

        @media (max-width: 1024px) {
            width: 50%;
            height: 300px;
            margin-bottom: 30px;
        }
       
    }

    p{
        font-size: 13px;

        &#email{
            font-size: 17px;
            text-align: right;
        }

        &#telNum{
            font-size: 19px; 
            margin-left: 1rem;
            text-align: right;
        }

        &#education{
            font-size: 30px;
            margin-left: 7rem;
            text-align: right;
        }
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

const Section4 = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    });


    return (

        <LayerContainer>
            <span data-aos="zoom-in-up">
                <p id='title'>천재가 되는 교육의 발견</p>
                <BoxContainer>
                    <Box id='kakao'>
                        <p><b>카카오톡 1:1 상담</b></p>
                        <div/>
                        <p id='education'><b>천재교육</b></p>
                        <p id='education'><b>디지털 러닝</b></p>
                    </Box>
                    <Box id='FAQ'>
                        <p><b>고객문의</b></p>
                        <div id='contact'/>
                        <p id='email'><b>이메일 : chanskim@chunjae.co.kr</b></p>
                        <p id='telNum'><b>전화: 02-3282-8589</b></p>
                    </Box>
                    <Box id='FAQ'>
                        <p><b>자주하는 질문</b></p>
                        <div id='FAQ' />
                            <Link href={`#`} id='FAQLink'>
                                <b>FAQ</b>
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>                       
                    </Box>
                </BoxContainer>
            </span>
        </LayerContainer>
    )
}
export default Section4;