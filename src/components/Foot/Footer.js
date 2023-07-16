"use client";
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../assets/img/CI/img_ci_var01.png';
import In from '../../assets/img/instagramIcon.svg';
import Fb from '../../assets/img/facebookIcon.svg';
import NB from '../../assets/img/naver.svg';
import YT from '../../assets/img/youtube.svg';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15rem;
  padding: 20px;
  margin-top: 15px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ImageWrapper = styled.div`
  margin-right: 30px;

  img {
    width: 250px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  div {
    border-left: 1px solid var(--text-color);
    margin-bottom: 10px;
    padding-left: 10px;
    white-space: nowrap;
  }
`;


const DivContainer = styled.div`
    height: 100%;

    @media (max-width: 1024px) {
        margin-top: 1rem;
    }
`;

const LabelContainer = styled.label`
  white-space: nowrap;
  a {
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
`;

const IconContainer = styled.label`
  display: flex;
  margin-top: 7rem;
  
  @media (max-width: 1024px) {
    margin: 1rem 0;
  }

  img {
    margin-right: 15px;

    &#naver{
      width: 40px;
    }

    &#youtube{
      width: 40px;
    }

    @media (prefers-color-scheme: dark) {
        filter: invert(1);
    }
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <ImageWrapper>
                <Image src={Logo} alt="Image" />
            </ImageWrapper>
            <InfoContainer>
                <div>
                    <p>(주)천재교육</p>
                    <p>사업자등록번호: 119-81-19350</p>
                </div>

                <div>
                    <p>주소: 서울특별시 디지털로9길 23 마리오아울렛2관 11층 천재IT교육센터</p>
                    <p>TEL: 02-3282-8589 | Email: genia@chunjae.co.kr</p>
                </div>

                <p>COPYRIGHT ⓒ 2023 BY CHUNJAE CO.,LTD ALL RIGHTS RESERVED.</p>
            </InfoContainer>

            <DivContainer>
                <LabelContainer>
                    <Link href={''}>회사소개</Link>
                    <label>| </label>
                    <Link href={''}>이용약관</Link>
                    <label>| </label>
                    <Link href={''}>개인정보처리방침</Link>

                </LabelContainer>
                <IconContainer>
                    <Image src={In} alt='Instagram' />
                    <Image src={Fb} alt='Facebook' />
                    <Image src={NB} alt='Naver Blog' id='naver' />
                    <Image src={YT} alt='Youtube' id='youtube' />
                </IconContainer>
            </DivContainer>

        </FooterContainer>
    );
};

export default Footer;
