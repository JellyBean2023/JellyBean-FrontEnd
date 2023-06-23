"use client";
import styled from 'styled-components';
import Header from "@/components/Head/Header"
import Footer from "@/components/Foot/Footer"
import Login from "@/components/Login/Login"

const LoginContainer = styled.main`
    
`;

const page = () => {
    return(
        <>
        <Header/>
        <LoginContainer>
            <Login/>
        </LoginContainer>
        <Footer/>
        </>
    );
}

export default page;