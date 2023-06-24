"use client";
import { useState, useEffect } from "react";
import styled from 'styled-components';

const FooterContainer = styled.footer`
    left: 0;
    bottom: 0;
    height: 10rem;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
    box-sizing: border-box;
`;


const Footer = () => {
    return (
        <FooterContainer>
            Footer
        </FooterContainer>
    );
}

export default Footer;