import { useEffect, useState } from 'react';
import { atom, selector, useRecoilValue } from 'recoil';
import axios from 'axios';
import styled from 'styled-components';
import RegistCheck from './RegistCheck';
import RegistInfoInsert from './RegistInfoInsert';
import Link from 'next/link';

const Container = styled.main`
  position: relative;
  max-width: 600px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;

  &.active {
    .login {
      margin-left: -50%;
      opacity: 0;
      transition: margin-left 0.2s ease, opacity 0.15s ease;
    }

    .signup {
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }
`;

const Forms = styled.form`
  display: flex;
  align-items: center;
  transition: height 0.3s ease;
  width: 200%;
  padding-top: calc(var(--header-height) + 2rem);

  @media (max-width: 1024px) {
    align-items: normal;
    padding-top: 1.5rem;
  }

  button {
    background-color: var(--theme-color);
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;

    &:hover {
      background-color: var(--anti-theme-color);
    }
  }
`;

const SubmitContainer = styled.div`
  width: 50%;
  transition: margin-left 0.2s ease;

  @media screen and (max-width: 1024px) {
    padding: 0 50px;
  }
`;

const Text = styled.span`
  color: var(--accent-link-color);
  font-size: 14px;

  a.text {
    color: var(--theme-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Selector = styled.div`
  button {
    margin: 15px 0;
  }
`;

// 약관 동의와 회원 가입 데이터를 함께 가져오는 selector
const registrationDataSelector = selector({
  key: 'registrationDataSelector',
  get: ({ get }) => {
    const agreements = get(agreementState);
    const registration = get(registrationState);
    return {
      agreements,
      registration,
    };
  },
});

// 약관 동의 상태를 관리하는 atom
const agreementState = atom({
  key: 'agreementState',
  default: {
    // 초기 값 정의
  },
});

// 회원 가입 정보를 관리하는 atom
const registrationState = atom({
  key: 'registrationState',
  default: {
    // 초기 값 정의
  },
});

const Regist = () => {
  const registrationData = useRecoilValue(registrationDataSelector);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/regist', registrationData);
      console.log('등록 성공:', response.data);
      // 등록 성공에 대한 처리 로직을 추가하세요.
    } catch (error) {
      console.error('등록 실패:', error);
      // 등록 실패에 대한 처리 로직을 추가하세요.
    }
  };

  const [active, setActive] = useState(false);

  useEffect(() => {
    const login = document.querySelector('.login-link');
    const signUp = document.querySelector('.signup-link');

    login.addEventListener('click', () => {
      // 로그인 화면
      setActive(false);
    });

    signUp?.addEventListener('click', () => {
      // 회원가입 화면
      setActive(true);
    });
  }, []);

  return (
    <Container className={`${active ? 'active' : ''}`}>
      <Forms action="#">
        {/* 약관 동의 페이지 */}
        <RegistCheck name={active} />

        <SubmitContainer>
          {/* 회원 가입 페이지 */}
          <RegistInfoInsert name={active} />

          <Selector>
            <button onClick={handleSubmit}>회원 가입</button>
            <Text> <Link href="#" className="login-link">약관동의 다시 돌아가기</Link></Text>
          </Selector>
        </SubmitContainer>

      </Forms>
    </Container>
  );
};

export default Regist;
