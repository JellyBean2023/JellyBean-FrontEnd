import Link from 'next/link';
import styled from 'styled-components';

const Form = styled.form`
  width: 50%;
  transition: margin-left 0.2s ease;
  @media (prefers-color-scheme: dark) {
  }
`;

const Title = styled.span`
  position: relative;
  font-size: 27px;
  font-weight: 600;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: var(--theme-color);
    border-radius: 25px;
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

  a.text {
    color: var(--theme-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Button = styled.div`
  margin: 30px 0 10px 0;

  input {
    padding: 5px 10px;
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 6px;
    background-color: var(--theme-color);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #265df2;
    }
  }
`;

const RegistComponent = (active) => {
    return(
        <Form action="#" className={`signup ${active ? 'active' : ''}`}>
          <Title className="title">회원 가입</Title>
          <InputField><input type="text" placeholder="한글 또는 영문으로 입력 가능" required /></InputField>
          <InputField><input type="password" className="password" placeholder="Enter your password" required/></InputField>
          <InputField><input type="password" className="password" placeholder="비밀번호를 확인해주세요" required/></InputField>
          <InputField><input type="email" placeholder="생년월일" required /></InputField>
          <InputField><input type="email" placeholder="Enter your email" required /></InputField>
          <InputField><input type="email" placeholder="휴대전화 번호" required /></InputField>
          <InputField><input type="email" placeholder="집주소" required /></InputField>
          <Button><input type="button" value="회원 등록하기" /></Button>
          <Text>이미 아이디가 있으신가요? <Link href="#" className="login-link">로그인 하러가기</Link></Text>
        </Form>
    );
}

export default RegistComponent;