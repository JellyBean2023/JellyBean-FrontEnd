import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoginComponent from './LoginComponent';
import RegistComponent from './RegistComponent';


const Container = styled.main`
  position: relative;
  max-width: 600px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;

  &.active {
    .login{
        margin-left: -50%;
        opacity: 0;
        transition: margin-left 0.2s ease, opacity 0.15s ease;
    }

    .signup{
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }
`;

const Forms = styled.div`
  display: flex;
  align-items: center;
  width: 200%;
  transition: height 0.3s ease;
`;

const Login = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const login = document.querySelector(".login-link");
    const signUp = document.querySelector(".signup-link");

    login.addEventListener("click", () => { //로그인화면
      setActive(false);
    });

    signUp.addEventListener("click", () => {  //회원가입화면
      setActive(true);
    });
  }, []);

  return (
    <Container className={`${active ? 'active' : ''}`}>
      <Forms>
        {/* 로그인 페이지 */}
        <LoginComponent name={active}/>

        {/* 회원가입 페이지 */}
        <RegistComponent name={active}/>
      </Forms>
    </Container>
  );
};

export default Login;