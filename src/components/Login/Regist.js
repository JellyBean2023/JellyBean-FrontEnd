import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RegistCheck from './RegistCheck';
import RegistInfoInsert from './RegistInfoInsert';

const RegistContainer = styled.main`
  position: relative;
  max-width: 600px;
  width: 100%;
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

const Pages = styled.div`
  display: flex;
  align-items: center;
  transition: height 0.3s ease;
  width: 200%;
  padding-top: calc(var(--header-height) + 2rem);

  @media (max-width: 1024px) {
    align-items: normal;
    padding-top: 1.5rem;
  }
`;

const Regist = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const login = document.querySelector(".login-link");
    const signUp = document.querySelector(".signup-link");

    login.addEventListener("click", () => { //로그인화면
      setActive(false);
    });

    signUp?.addEventListener("click", () => {  //회원가입화면
      setActive(true);
    });
  }, []);

  return (
    <RegistContainer className={`${active ? 'active' : ''}`}>
      <Pages>
        {/* 약관동의 페이지 */}
        <RegistCheck name={active}/>

        {/* 회원가입 페이지 */}
        <RegistInfoInsert name={active}/>
      </Pages>
    </RegistContainer>
  );
};

export default Regist;