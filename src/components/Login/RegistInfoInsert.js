import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = styled.div`
  margin-top: calc(var(--header-height) + 2rem);
  width: 50%;
  transition: margin-left 0.2s ease;

  @media screen and (max-width: 1024px) {
      padding: 0 50px;
  }

  p {
    color: var(--warning-color);
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

const ApplyButton = styled.button`
  position: relative;
  background-color: gray;
  border-radius: 10px;
  padding: 5px 10px;
  float: right;
  margin-top: -45px;
  z-index: 5;

  &:hover {
    background-color: var(--theme-color);
  }
`;

const RegistInfoInsert = (active) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [isValidBirthday, setIsValidBirthday] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  useEffect(() => { //유효성 검사
    const nameTimer = setTimeout(() => {
      validateName();
    }, 300);

    const emailTimer = setTimeout(() => {
      validateEmail();
    }, 300);

    const passwordTimer = setTimeout(() => {
      validatePassword();
    }, 300);

    const confirmPasswordTimer = setTimeout(() => {
      validateConfirmPassword();
    }, 300);
    
    const birthdayTimer = setTimeout(() => {
      validateBirthday();
    }, 300);

    const phoneTimer = setTimeout(() => {
      validatePhone();
    }, 300);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(emailTimer);
      clearTimeout(passwordTimer);
      clearTimeout(confirmPasswordTimer);
      clearTimeout(birthdayTimer);
      clearTimeout(phoneTimer);
    };
  }, [name, email, password, confirmPassword, birthday, phone]);

  const handleNameChange = (event) => { //이름
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {  //이메일
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => { //비밀번호
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {  //비밀번호 확인
    setConfirmPassword(event.target.value);
  };

  const handleBirthdayChange = (event) => {  //생년월일
    setBirthday(event.target.value);
  };

  const handlePhoneChange = (event) => {  //핸드폰번호
    setPhone(event.target.value);
  };

  const validateName = () => {  //이름
    const regex = /^[ㄱ-ㅎ가-힣a-zA-Z\s]*$/;
    if (!regex.test(name)) {
      setIsValidName(false);
      console.log("이름 유효성 검사 실패");
    } else {
      setIsValidName(true);
      console.log("이름 유효성 검사 통과");
    }
  };

  const validateEmail = () => { //이메일
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setIsValidEmail(false);
      console.log("이메일 유효성 검사 실패");
    } else {
      setIsValidEmail(true);
      console.log("이메일 유효성 검사 통과");
    }
  };

  const validatePassword = () => {  //비밀번호
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!regex.test(password)) {
      setIsValidPassword(false);
      console.log("비밀번호 유효성 검사 실패");
    } else {
      setIsValidPassword(true);
      console.log("비밀번호 유효성 검사 통과");
    }
  };

  const validateConfirmPassword = () => { //비밀번호 확인
    if (password !== confirmPassword) {
      setIsValidConfirmPassword(false);
      console.log("비밀번호 확인 실패");
    } else {
      setIsValidConfirmPassword(true);
      console.log("비밀번호 확인 통과");
    }
  };

  const validateBirthday = () => {  //생년월일
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(birthday)) {
      setIsValidBirthday(false);
      console.log("생년월일 유효성 검사 실패");
    } else {
      setIsValidBirthday(true);
      console.log("생년월일 유효성 검사 통과");
    }
  };

  const validatePhone = () => {  //핸드폰번호
    const regex = /^010-\d{4}-\d{4}$/;
    if (!regex.test(phone)) {
      setIsValidPhone(false);
      console.log("핸드폰번호 유효성 검사 실패");
    } else {
      setIsValidPhone(true);
      console.log("핸드폰번호 유효성 검사 통과");
    }
  };

  return (
    <Form className={`signup ${active ? 'active' : ''}`}>
      <Title className="title">회원 가입</Title>

      <InputField><input type="text" required value={name} onChange={handleNameChange} placeholder="한글 또는 영문으로 입력 가능" />
        <label>이름</label><span/>
      </InputField> {!isValidName && name !== "" && <p>한글 또는 영문으로만 입력해주세요</p>}
      
      <InputField><input type="text" required value={email} onChange={handleEmailChange} placeholder="ex)chunjae@chunjae.com" />
        <label>이메일</label><span/>
      </InputField> {!isValidEmail && email !== "" && <p>이메일 형식에 맞게 입력해주세요</p>}
      {isValidEmail && email !== "" && <ApplyButton>인증하기</ApplyButton>}
      
      <InputField><input type="text" placeholder="인증코드를 입력해주세요" required/>
        <label>이메일 인증코드 입력</label><span/>
      </InputField>
      
      <InputField><input type="password" required value={password} onChange={handlePasswordChange} placeholder="영문,숫자,특수문자 포함 8~20자내" />
        <label>비밀번호</label><span/>
      </InputField> {!isValidPassword && password !== "" &&  <p>비밀번호는 영문, 숫자, 특수문자를 모두 포함하여 공백없이 8~20자로 입력해주세요</p>}
      
      <InputField><input type="password" required value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="비밀번호를 확인해주세요" />
        <label>비밀번호 확인</label><span/>
      </InputField> {!isValidConfirmPassword && confirmPassword !== "" && <p>비밀번호가 일치하지 않습니다</p>}
      
      <InputField><input type="text" required value={birthday} onChange={handleBirthdayChange} placeholder="생년월일"/>
        <label>생년월일</label><span/>
      </InputField> {!isValidBirthday && birthday !== "" && <p>YYYY-MM-DD 형식으로 작성해주세요</p>}
      
      <InputField><input type="text" required value={phone} onChange={handlePhoneChange} placeholder="휴대전화 번호"/>
        <label>휴대전화 번호</label><span/>
      </InputField> {!isValidPhone && phone !== "" && <p>010-0000-0000 형식으로 작성해주세요</p>}
      
      <Button> <input type="submit" value="회원 등록하기" /></Button>
      <Text>
        {" "}
        <Link href="" className="login-link">
          약관동의 다시 돌아가기
        </Link>{" "}
      </Text>
    </Form>
  );
};

export default RegistInfoInsert;