import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { RegistCheckState } from './RegistCheck';

const Form = styled.form`
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
  color: var(--theme-color);
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

    &#type {
      width: auto;
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

  &#type {
    div {
      font-size: 20px;
      margin-bottom: 5px;
      margin-top: 30px;
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
    const nameTimer = setTimeout(() => { validateName(); }, 300);
    const emailTimer = setTimeout(() => { validateEmail() }, 300);
    const passwordTimer = setTimeout(() => { validatePassword() }, 300);
    const confirmPasswordTimer = setTimeout(() => { validateConfirmPassword() }, 300);
    const birthdayTimer = setTimeout(() => { validateBirthday() }, 300);
    const phoneTimer = setTimeout(() => { validatePhone() }, 300);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(emailTimer);
      clearTimeout(passwordTimer);
      clearTimeout(confirmPasswordTimer);
      clearTimeout(birthdayTimer);
      clearTimeout(phoneTimer);
    };
  }, [name, email, password, confirmPassword, birthday, phone]);

  const handleNameChange = (event) => { setName(event.target.value) }; //이름
  const handleEmailChange = (event) => { setEmail(event.target.value) }; //이메일
  const handlePasswordChange = (event) => { setPassword(event.target.value) }; //비밀번호
  const handleConfirmPasswordChange = (event) => { setConfirmPassword(event.target.value) }; //비밀번호 확인
  const handleBirthdayChange = (event) => { setBirthday(event.target.value) }; //생년월일
  const handlePhoneChange = (event) => { setPhone(event.target.value) };   //핸드폰번호

  const validateName = () => {  //이름
    const regex = /^[ㄱ-ㅎ가-힣a-zA-Z\s]*$/;
    if (!regex.test(name))
      setIsValidName(false);
    else
      setIsValidName(true);
  };

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

  const validateConfirmPassword = () => { //비밀번호 확인
    if (password !== confirmPassword)
      setIsValidConfirmPassword(false);
    else
      setIsValidConfirmPassword(true);
  };

  const validateBirthday = () => {  //생년월일
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(birthday))
      setIsValidBirthday(false);
    else
      setIsValidBirthday(true);
  };

  const validatePhone = () => {  //핸드폰번호
    const regex = /^010-\d{4}-\d{4}$/;
    if (!regex.test(phone))
      setIsValidPhone(false);
    else
      setIsValidPhone(true);
  };

  const [isChecked, setIsChecked] = useState(false);
  const [employeeNumber, setEmployeeNumber] = useState('');


  const handleChange = (event) => {
    setIsChecked(event.target.value === '1');
  };

  const saveEmployeeNumber = (event) => {
    setEmployeeNumber(event.target.value);
  };

  //약관동의
  const registCheck = useRecoilValue(RegistCheckState).map((item) => item.id);
  // Submit 핸들러
  const handleSubmit = async (event) => {
    event.preventDefault();

    const has1 = registCheck.includes(1);
    const has2 = registCheck.includes(2);

    if (!has1 || !has2) {
      alert('1번과 2번 약관에 모두 동의해야 합니다.');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/regist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
          birthday,
          phone,
          registCheck,
          type: isChecked ? '직원' : '일반',
          employeeNumber,
        }),
      });

      if (response.ok) {
        alert('회원 등록이 성공적으로 완료되었습니다.');
      } else {
        alert('회원 등록에 실패하였습니다.');
      }
    } catch (error) {
      alert('회원 등록 중 오류가 발생하였습니다.', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} action={`${process.env.NEXT_PUBLIC_API_URL}/regist`} className={`signup ${active ? 'active' : ''}`}>
      <Title className="title">회원 가입</Title>

      <InputField><input type="text" value={name} onChange={handleNameChange} placeholder="한글 또는 영문으로 입력 가능" required />
        <label>이름</label><span />
      </InputField> {!isValidName && name !== "" && <p>한글 또는 영문으로만 입력해주세요</p>}

      <InputField><input type="text" value={email} onChange={handleEmailChange} placeholder="ex)chunjae@chunjae.com" required />
        <label>이메일</label><span />
      </InputField> {!isValidEmail && email !== "" && <p>이메일 형식에 맞게 입력해주세요</p>}
      {isValidEmail && email !== "" && <ApplyButton>인증하기</ApplyButton>}

      <InputField><input type="text" placeholder="인증코드를 입력해주세요" required />
        <label>이메일 인증코드 입력</label><span />
      </InputField>

      <InputField><input type="password" value={password} onChange={handlePasswordChange} placeholder="영문,숫자,특수문자 포함 8~20자내" required />
        <label>비밀번호</label><span />
      </InputField> {!isValidPassword && password !== "" && <p>비밀번호는 영문, 숫자, 특수문자를 모두 포함하여 공백없이 8~20자로 입력해주세요</p>}

      <InputField><input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="비밀번호를 확인해주세요" required />
        <label>비밀번호 확인</label><span />
      </InputField> {!isValidConfirmPassword && confirmPassword !== "" && <p>비밀번호가 일치하지 않습니다</p>}

      <InputField><input type="text" value={birthday} onChange={handleBirthdayChange} placeholder="생년월일" required />
        <label>생년월일</label><span />
      </InputField> {!isValidBirthday && birthday !== "" && <p>YYYY-MM-DD 형식으로 작성해주세요</p>}

      <InputField><input type="text" value={phone} onChange={handlePhoneChange} placeholder="휴대전화 번호" required />
        <label>휴대전화 번호</label><span />
      </InputField> {!isValidPhone && phone !== "" && <p>010-0000-0000 형식으로 작성해주세요</p>}

      <InputField id='type'>
        <div>가입유형</div>
        일반 <input type="radio" value={`0`} onChange={handleChange} checked='checked' />
        직원 <input type="radio" value={`1`} onChange={handleChange} />
        {isChecked ? (
          <InputField>
            <input type="text" value={employeeNumber} onChange={saveEmployeeNumber} placeholder="사원번호 없을 시 입력 안해도 됩니다" />
            <label>사원번호</label><span />
          </InputField>
        ) : null}
      </InputField>

      <input type='hidden' value={registCheck} />
      <Button><input type="submit" value="회원 등록하기" /></Button>
      <Text> <Link href="#" className="login-link">약관동의 다시 돌아가기</Link></Text>
    </Form>
  );
};

export default RegistInfoInsert;