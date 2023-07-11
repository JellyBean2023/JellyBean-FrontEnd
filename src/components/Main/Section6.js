import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const BannerBox = styled.div`
    width: 93.5rem;
    height: 130px;
    background-color: pink;
`;

const Section6 = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    });

    return (
        <BannerBox>하단 배너 이미지 들어갈 자리</BannerBox>
    )
}
export default Section6;