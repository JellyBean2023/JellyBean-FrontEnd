import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import dummy from '@/assets/img/dummy.jpg';


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
        font-size: 27px;
        height: 70rem;
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

    &#info{
        width:600px;
        height: 360px;

        p{
            font-size: 17px;
            padding-top: 10px ;
            padding-left: 20px;

            &#margintop{
                margin-top: 20px;
            }

            &#date{
                font-size: 10px;

                @media (max-width: 1024px) {
                     margin-left: -10px;
                }
            }
        }

        @media (max-width: 1024px) {
            width: 100%;
            height: 20rem;
            margin-bottom: 70px;
        }
    }

    p{
        font-size: 13px;

        &#center{
            text-align: center;
        }

        &#margintop{
            margin-top: 30px;

            @media (max-width: 1024px) {
                margin-left: -13px;
            }
        }
    }

    span {
    display: inline-block;
    font-size: 25px;
    margin: 10px 0;
    }
`;

const Section5 = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    });

    return (

        <LayerContainer>
            <span data-aos="zoom-in-up">
                <p id='title'>교육 혁신을 선도하는 정보 공간</p>
                <BoxContainer>
                    <Box id='info'><Image src={dummy} width={600} alt='Image'/></Box>
                    <Box id='info'>
                        <p><b>공지사항</b></p>
                        <p id='margintop'>내용들어갈 자리</p><hr/>
                        <p id='date'>2023.07.11</p>
                        <p id='margintop'>내용들어갈 자리</p><hr/>
                        <p id='date'>2023.07.11</p>
                        <p id='margintop'>내용들어갈 자리</p><hr/>
                        <p id='date'>2023.07.11</p>
                    </Box>
                </BoxContainer>
            </span>
        </LayerContainer>
    )
}
export default Section5;