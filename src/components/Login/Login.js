'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../../assets/img/CI/img_ci_var02.jpg';
import React, { useEffect, useRef, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import axios from 'axios';
import { signIn } from 'next-auth/react'


const Container = styled.main`
  max-width: 600px;
  width: 100%;
  height: 45rem;
  overflow: hidden;
  margin: 7rem auto 5rem auto;

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

const LoginContainer = styled.div`
  align-items: center;
  transition: height 0.3s ease;
  width: 200%;
`;


const Form = styled.form`
  width: 50%;
  transition: margin-left 0.2s ease;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
      padding: 0 50px;
  }

  p {
    color: red;
    font-size: 15px;
    margin-left: 5px;
  }
`;

const Title = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }
`;


const InputField = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 30px;

  input {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    border: none;
    outline: none;
    font-size: 16px;
    border: 2px solid #ccc;
    transition: all 0.2s ease;
    background-color: var(--background-rgb);
    border-radius: 12px;
    padding-right: 40px;
    
    &:focus,
    &:valid {
      border-color: var(--theme-color);
    }
  }
`;

const CheckboxText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const CheckboxContent = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 10px;
    accent-color: var(--theme-color);
  }
`;

const Text = styled.span`
  color: var(--text-color);
  font-size: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px 0;

  a {
    color: var(--accent-link-color);
    text-decoration: none;
    margin-left: 7px;
    
    &:hover {
      text-decoration-line: underline
    }
  }

  &#pw {
    float: right;
  }
`;

const Button = styled.button`
  margin: 30px 0 10px 0;
  width: 100%;
  padding: 5px 10px;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: var(--theme-color);
  transition: all 0.3s ease;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: var(--anti-theme-color);
  }
`;

const InputFieldContainer = styled.div`
  position: relative;
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const { persistAtom } = recoilPersist();
const EmailIDState = atom({
  key: 'emailID',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  //비밀번호 노출
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => { //유효성 검사
    const emailTimer = setTimeout(() => { validateEmail() }, 300);
    const passwordTimer = setTimeout(() => { validatePassword() }, 300);

    return () => {
      clearTimeout(emailTimer);
      clearTimeout(passwordTimer);
    };
  }, [email, password]);

  const handleEmailChange = (event) => { setEmail(event.target.value) }; //이메일
  const handlePasswordChange = (event) => { setPassword(event.target.value) }; //비밀번호

  const validateEmail = () => { //이메일
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email))
      setIsValidEmail(false);
    else
      setIsValidEmail(true);
  };

  const validatePassword = () => {  //비밀번호
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!regex.test(password))
      setIsValidPassword(false);
    else
      setIsValidPassword(true);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!emailRef.current.value || !passwordRef.current.value) return;

  //   const loginData = {
  //     email: emailRef.current.value,
  //     password: passwordRef.current.value,
  //   }

  //   // const result = await signIn("credentials", { //Next-Auth credentials Login
  //   //   username: emailRef.current.value,
  //   //   password: passwordRef.current.value,
  //   //   redirect: false,
  //   // });
  // };
  
  const [emailID, setEmailID] = useRecoilState(EmailIDState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) return;

    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (res.ok) {
        const { accessToken, refreshToken } = await res.json();

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setEmailID(loginData.email);

        location.replace('/');
      } else {
        alert("등록되지 않은 회원입니다");
      }
    } catch (error) {
      alert("로그인에 실패했습니다");
    }
  };

  // 비밀번호 노출
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  return (
    <Container>
      <LoginContainer>
        <Form action="#">
          <Title>천재교육 IT센터</Title>
          <Image src={Logo} alt='Image' />
          <Text>아직 회원이 아니세요? <Link href="/regist">회원가입 하러가기</Link></Text>

          <InputField><input type="text" value={email} ref={emailRef} onChange={handleEmailChange} placeholder="ID" required/></InputField> 
          {!isValidEmail && email !== "" && <p>이메일 형식에 맞게 입력해주세요</p>}

          <InputFieldContainer>
            <InputField>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                ref={passwordRef}
                onChange={handlePasswordChange}
                placeholder="비밀번호"
                required
              />
              <EyeIcon>
                {showPassword ? (
                  <AiFillEyeInvisible size={20} color="grey" onClick={togglePasswordVisibility} />
                ) : (
                  <AiFillEye size={20} color="grey" onClick={togglePasswordVisibility} />
                )}
              </EyeIcon>
            </InputField>
          </InputFieldContainer>
          {!isValidPassword && password !== "" && <p>비밀번호는 영문, 숫자, 특수문자를 모두 포함하여 공백없이 8~20자로 입력해주세요</p>}

          <CheckboxText>
            <CheckboxContent><input type="checkbox" /> <label htmlFor="logCheck">아이디 기억하기</label></CheckboxContent>
          </CheckboxText>
          <Button onClick={handleSubmit} type='submit'>로그인</Button>
          <Text id='pw'>
            비밀번호를 잊어버렸어요 <Link href="#">Reset Password</Link>
          </Text>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;

export { EmailIDState };