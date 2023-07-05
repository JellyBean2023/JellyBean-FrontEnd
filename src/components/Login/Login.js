import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../../assets/img/CI/img_ci_var02.jpg';

const Container = styled.main`
  max-width: 600px;
  width: 100%;
  height: 40rem;
  overflow: hidden;
  margin: 10rem auto 5rem auto;

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

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: var(--theme-color);
    justify-content: center;
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
    border-bottom: 2px solid #ccc;
    border-top: 2px solid transparent;
    transition: all 0.2s ease;
    background-color: var(--background-rgb);
    
    &:focus,
    &:valid {
      border-bottom-color: var(--theme-color);
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
  text-align: center;

  a {
    color: var(--accent-link-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
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

const FindContainer = styled.div`
  float: right;
  a {
    color: var(--accent-link-color);
  }
`;

const Login = () => {

    return (
        <Container>
            <Forms>
                <Form action="#">
                    <Title>천재교육 IT센터</Title>
                    <Image src={Logo} alt='Image'/>
                    <Text>아직 회원이 아니세요? <Link href="/regist">회원가입 하러가기</Link></Text>
                    <InputField><input type="text" placeholder="Enter your ID" required /></InputField>
                    <InputField><input type="password" className="password" placeholder="Enter your password" required /></InputField>
                    <CheckboxText>
                        <CheckboxContent><input type="checkbox" /> <label htmlFor="logCheck">아이디 기억하기</label></CheckboxContent>
                    </CheckboxText>
                    <Button><input type="button" value="로그인" /></Button>
                    <FindContainer>
                      비밀번호를 잊어버렸어요 <Link href="#">Reset Password</Link>
                    </FindContainer>
                </Form>
            </Forms>
        </Container>
    );
};

export default Login;