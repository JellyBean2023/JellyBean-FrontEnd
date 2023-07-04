import Link from 'next/link';
import styled from 'styled-components';

const Form = styled.div`
  margin-top: calc(var(--header-height) + 2rem);
  width: 50%;
  transition: margin-left 0.2s ease;

  @media screen and (max-width: 1024px) {
      padding: 0 50px;
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
  }
`;

const InputField = styled.div`

  position: relative;
  margin-top: 65px;
  
  input {
  font-size: 15px;
  color: var(--theme-color);
  width: 100%;
  border: none;
  border-bottom: solid var(--theme-color) 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;

  &::placeholder {
    float: right;
    color: gray;
  }

  &:focus {
    outline: none;
  }
}

span {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0%;

  background-color: #666;
  width: 0;
  height: 2px;
  border-radius: 2px;
  transition: 0.5s;
}

label {
  position: absolute;
  color: var(--theme-color);
  left: 10px;
  font-size: 20px;
  bottom: 8px;
  transition: all .2s;
}

input {
  &:focus ~ label, &:valid ~ label {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }

  &:focus ~ span, &:valid ~ span {
    width: 100%;
  }
}

`;

const Button = styled.div`
  margin: 30px 0 10px 0;

  input {
    background-color: var(--theme-color);
    border-radius: 5px;
    padding: 5px 10px;
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #265df2;
    }
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

const RegistInfoInsert = (active) => {
    return(
        <Form className={`signup ${active ? 'active' : ''}`}>
          <Title className="title">회원 가입</Title>
          <InputField>
            <input type="text" placeholder="한글 또는 영문으로 입력 가능" required/> 
            <label>이름</label> 
            <span/>
          </InputField>
          <InputField><input type="email" placeholder="ex)chunjae@chunjae.com" required/> <label>이메일</label> <span/></InputField>
          <InputField><input type="emailCode" placeholder="인증코드 입력" required/> <label>이메일 인증코드 입력</label> <span/></InputField>
          <InputField><input type="password" placeholder="영문,숫자,특수문자 포함 8~20자내" required/> <label>비밀번호</label> <span/></InputField>
          <InputField><input type="password" placeholder="비밀번호를 확인해주세요" required/> <label>비밀번호 확인</label> <span/></InputField>
          <InputField><input type="text" placeholder="생년월일" required/> <label>생년월일</label> <span/></InputField>
          <InputField><input type="text" placeholder="휴대전화 번호" required/> <label>휴대전화 번호</label> <span/></InputField>
          
          <Button><input type="submit" value="회원 등록하기" /></Button>
          <Text> <Link href="" className="login-link">약관동의 다시 돌아가기</Link> </Text>
        </Form>
    );
}

export default RegistInfoInsert;