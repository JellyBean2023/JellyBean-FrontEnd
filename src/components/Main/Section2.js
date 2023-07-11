import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import styled from 'styled-components';

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
        font-size: 25px;
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
    background-color: white;
    text-align: left;
    color: black;
    word-wrap: break-word; 
    padding: 20px;
    border-radius: 20px;

    &#review{
        width: 54rem;
        height: 100px;
        background-color: #EDE0E0;
        margin-top: 40px;
        margin-left: 50px;
        border-radius: 20px;
        color:black;

        @media screen and (max-width: 1024px) {
            width: 20.5rem;
            height: 15.5rem;
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

const ReviewBox = styled.div`
    width: 60rem;
    height: 38rem;
    background-color: #D9D9D9;
    border-radius: 20px;

    @media screen and (max-width: 1024px) {
        width: 23rem;
        height: 68.5rem;
    }

`;


const Section2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    });

    return (
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
    )
}
export default Section2;