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
    background-color: white;
    text-align: left;
    color: black;
    word-wrap: break-word; 
    padding: 20px;
    border-radius: 20px;

    &#FAQ{
        width: 300px;
        height: 300px;

        @media (max-width: 1024px) {
            width: 90%;
            height: 250px;
            margin-bottom: 30px;
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
    )
}
export default Section4;