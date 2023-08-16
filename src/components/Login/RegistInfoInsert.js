import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { RegistCheckState } from './RegistCheck';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AiOutlineCheck } from 'react-icons/ai';

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

  &#type {
    div {
      font-size: 20px;
      margin-bottom: 24px;
      margin-top: -5px;
      margin-left: 5px;

      &#join{
        padding-top: 0px
      }
    }

    &input{
      &user{
        width: auto;
      }
    }
  }

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
    
    &#user{
      width: 20px;
    }

    &::placeholder {
      float: right;
      color: gray;
    }

    &:focus {
      outline: none;
    }

    &#type {
      &input{
        width: auto;
      }
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
  div{
    padding-bottom: -50px;
  }

  & #check_icon {
    display: inline-block;
    color: green;
  }
`;

const SubmitContainer = styled.div`
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
  background-color: rgba(78,84,97);
  border-radius: 10px;
  padding: 5px 10px;
  float: right;
  margin-top: -45px;
  z-index: 5;
  color: white;
  width: auto;

  &:hover {
    background-color: var(--theme-color);
  }

  svg {
    display: inline-block !important;
    color: green;
  }
`;

const UserBox = styled.div`
  padding-left: 370px;
  
  &#right{
    padding-left: 20px;
  }
`;

const Box = styled.div`
  display: flex;

  &#resgistType{
    width: auto;
  }
`;

const RegistInfoInsert = (active) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birth, setbirth] = useState('');
  const [phone, setPhone] = useState('');

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [isValidbirth, setIsValidbirth] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  useEffect(() => { //유효성 검사
    const nameTimer = setTimeout(() => { validateName(); }, 300);
    const emailTimer = setTimeout(() => { validateEmail() }, 300);
    const passwordTimer = setTimeout(() => { validatePassword() }, 300);
    const confirmPasswordTimer = setTimeout(() => { validateConfirmPassword() }, 300);
    const birthTimer = setTimeout(() => { validatebirth() }, 300);
    const phoneTimer = setTimeout(() => { validatePhone() }, 300);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(emailTimer);
      clearTimeout(passwordTimer);
      clearTimeout(confirmPasswordTimer);
      clearTimeout(birthTimer);
      clearTimeout(phoneTimer);
    };
  }, [name, email, password, confirmPassword, birth, phone]);

  const handleNameChange = (event) => { setName(event.target.value) }; //이름
  const handleEmailChange = (event) => { setEmail(event.target.value) }; //이메일
  const handlePasswordChange = (event) => { setPassword(event.target.value) }; //비밀번호
  const handleConfirmPasswordChange = (event) => { setConfirmPassword(event.target.value) }; //비밀번호 확인
  const handlebirthChange = (event) => { setbirth(event.target.value) }; //생년월일
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

  const validatebirth = () => {  //생년월일
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(birth))
      setIsValidbirth(false);
    else
      setIsValidbirth(true);
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
    setIsChecked(event.target.value === '2');
  };

  const saveEmployeeNumber = (event) => {
    setEmployeeNumber(event.target.value);
  };


  //이메일 인증
  const [checkEmail, setCheckEmail] = useState(false);

  const emailConfirm = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup/emailcheck`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email }),
      });
      if(res.ok){
        setCheckEmail(true);
        alert("인증이 완료되었습니다.");
      }
      else {
        alert("중복된 이메일 입니다")
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
    // try {
    //   const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/regist/emailConfirm`,
    //     { email: email },
    //     { headers: {"Content-Type": "application/json"} }
    //   );
    //   if (response.data === true) {
    //     setCheckEmail(true);
    //     alert("이메일 인증이 완료되었습니다")
    //     // alert("인증 이메일이 발송되었습니다. 인증번호를 확인해주세요");
    //   } else {
    //     alert("인증 이메일 발송에 실패했습니다");
    //   }
    // } catch (error) {
    //   alert("인증 이메일 발송 중 오류가 발생했습니다");
    //   console.log("인증 이메일 발송 중 오류가 발생했습니다", error);
    // }
  };

  // const emailCheck = async () => {
  //   try {
  //     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/regist/emailCheck`,
  //     { email: email },
  //     { headers: {"Content-Type": "application/json"} }
  //     );
      
  //     if (response.ok) {
  //       setCheckEmail(true);
  //       alert("인증이 완료되었습니다.");
  //     } else {
  //       alert("인증에 실패했습니다");
  //     }
  //   } catch (error) {
  //     alert("인증과정 중 오류가 발생했습니다");
  //     console.log("인증과정 중 오류가 발생했습니다", error);
  //   }
  // };


  //약관동의
  const registCheck = useRecoilValue(RegistCheckState).map((item) => item.id);

  const router = useRouter();
  // Submit 핸들러
  const handleSubmit = async (event) => {
    event.preventDefault();

    const has1 = registCheck.includes(1);
    const has2 = registCheck.includes(2);

    if (!has1 || !has2) {
      alert('1번과 2번 약관에 모두 동의해야 합니다.');
      return;
    }

    if(!checkEmail) {
      alert('이메일 인증을 완료해야 합니다.');
      return;
    }

    const formData = {
      name: name,
      password: password,
      // confirmPassword: confirmPassword,
      phone: phone,
      email: email,
      // validNumber: event.target.elements.validNumber.value,
      birth: birth,
      registCheck: registCheck.toString(),
      authority: 'ROLE_MEMBER',
      employeeNumber: employeeNumber,
    };

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
    
      if (response.status === 200) {
        console.log('회원 등록이 성공적으로 완료되었습니다.');
        router.replace("/");
      } else {
        console.log('회원 등록에 실패하였습니다.');
      }
    } catch (error) {
      console.log('회원 등록 중 오류가 발생하였습니다.');
      console.log('오류 응답:', error.response);
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
      {isValidEmail && email !== "" && <ApplyButton onClick={emailConfirm}>인증하기 {checkEmail && <AiOutlineCheck id='check_icon'/>} </ApplyButton>}

      {/* <InputField><input type="text" name='validNumber' placeholder="인증코드" required />
        <label>이메일 인증코드 입력</label><span />
        {isValidEmail && email !== "" && <ApplyButton onClick={emailCheck}>인증번호 확인 {checkEmail && <AiOutlineCheck id='check_icon'/>}</ApplyButton>}
      </InputField> */}

      <InputField><input type="password" value={password} onChange={handlePasswordChange} minLength="8" maxLength="20" placeholder="영문,숫자,특수문자 포함 8~20자내" required />
        <label>비밀번호</label><span />
      </InputField> {!isValidPassword && password !== "" && <p>비밀번호는 영문, 숫자, 특수문자를 모두 포함하여 공백없이 8~20자로 입력해주세요</p>}

      <InputField><input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="비밀번호를 확인해주세요" required />
        <label>비밀번호 확인</label><span />
      </InputField> {!isValidConfirmPassword && confirmPassword !== "" && <p>비밀번호가 일치하지 않습니다</p>}

      <InputField><input type="text" value={birth} onChange={handlebirthChange} placeholder="생년월일" required />
        <label>생년월일</label><span />
      </InputField> {!isValidbirth && birth !== "" && <p>YYYY-MM-DD 형식으로 작성해주세요</p>}

      <InputField><input type="text" value={phone} onChange={handlePhoneChange} placeholder="휴대전화 번호" required />
        <label>휴대전화 번호</label><span />
      </InputField> {!isValidPhone && phone !== "" && <p>010-0000-0000 형식으로 작성해주세요</p>}

      <InputField id='type'>
      <Box>
        <div id='registType'>가입유형</div>
        <UserBox>
        일반 <input id="user" type="radio" name='employee' value={`1`} onChange={handleChange}/>
        </UserBox>
        <UserBox id='right'>
        직원 <input id="user" type="radio" name='employee' value={`2`} onChange={handleChange} />
        </UserBox>
        </Box>
        {isChecked ? (
          <InputField id='employeeNum'>
            <input type="text" value={employeeNumber} onChange={saveEmployeeNumber} placeholder="사원번호 없을 시 입력 안해도 됩니다" />
            <label>사원번호</label><span/>
          </InputField>
        ) : null}
        
      </InputField>

      <input type='hidden' value={registCheck} />
      <SubmitContainer><input type="submit" value="회원 등록하기" /></SubmitContainer>
      <Text> <Link href="#" className="login-link">약관동의 다시 돌아가기</Link></Text>
    </Form>
  );
};

export default RegistInfoInsert;