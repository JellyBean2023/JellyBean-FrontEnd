'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../../assets/img/CI/img_ci_var02.jpg';
import { atom, useRecoilState } from "recoil";


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

const Forms = styled.div`
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

const Button = styled.div`
  margin: 30px 0 10px 0;

  input {
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
  }
`;

export const loginState = atom({
  key: 'loginState', 
  default: '',
});

const Login = () => {
  const [login, setLogin] = useRecoilState(loginState);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // const response  = await login({id:id, password:password});
    // const token = await response.json();
    const token = "USER_TOKEN"
    setLogin(token);
  };

  return (
    <Container>
      <Forms>
        <Form action="#" onSubmit={onSubmitHandler}>
          <Title>천재교육 IT센터</Title>
          <Image src={Logo} alt='Image' />
          <Text>아직 회원이 아니세요? <Link href="/regist">회원가입 하러가기</Link></Text>
          <InputField><input type="text" placeholder="Enter your ID" required /></InputField>
          <InputField><input type="password" className="password" placeholder="Enter your password" required /></InputField>
          <CheckboxText>
            <CheckboxContent><input type="checkbox" /> <label htmlFor="logCheck">아이디 기억하기</label></CheckboxContent>
          </CheckboxText>
          <Button><input type="submit" value="로그인"/></Button>
          <Text id='pw'>
            비밀번호를 잊어버렸어요 <Link href="#">Reset Password</Link>
          </Text>
        </Form>
        <Link href="/Test">test</Link>
      </Forms>
    </Container>
  );
};

export default Login;