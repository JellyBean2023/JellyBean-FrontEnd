import { useEffect, useState } from "react";
import { styled } from "styled-components";

const ApplyForm = styled.main`
  width: 100%;
  background-color: white;
  color: black;

  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem;
  }
`;

const InsertForm = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  padding: 3rem;
  background-color: white;
  color: black;
`;

const Intro = styled.div`
  height: 20rem;
  margin-bottom: 50px;
  padding: 20px 0 0 50px;
  background-color: ${props => `var(--${props.id}-color)`};
  color: white;

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 15px;

    &#top{
      padding-bottom: 20px
    }
  }

   p:nth-last-child(1) {
    &#import {
      color: ${props => `var(--${props.id}-sub-color)`};
      padding-top: 20px;
    }
  }
`;

const InsertContainer = styled.div`
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin: 25px 0;
  background-color: rgba(255,255,255);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid;
  border-color: ${props => `var(--${props.id}-color)`};


  h2 {
    font-size: 20px;
    flex-basis: 100%;
    margin-bottom: 10px;
    
    &#import {
      color: red;
    }

    #sm {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }

  select {
    width: 10rem;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
  }

   .flex{
    display: flex;

    &_column {
      flex-direction: column;

      input {
        width: 50%;
      }
    }
  }

  &.input_margin{
    
    label{
      display: block;
      margin: 10px;
    } //코딩경험 라벨

    input{
      margin: 3px;
      accent-color: ${props => `var(--${props.id}-color)`};
    }
    
    textarea{
      padding: 10px 5px;
      height: 8rem;
      width: 100%;
      border: 1px solid black;
      border-radius: 15px;
    }
  }

  p {
    color: var(--warning-color);
  }
`;

const InputField = styled.div`
  flex-basis: calc(50% - 10px);
  position: relative;
  
  input {
    font-size: 15px;
    width: 100%;
    border: none;
    border-bottom: solid ${props => `var(--${props.id}-sub-color)`};
    padding-bottom: 10px;
    padding-left: 10px;
    position: relative;
    background: none;
    z-index: 5;
    margin-top: 30px;
    color: transparent;

    &#number{
      padding-top: 40px;
      width: 30%;
    }

    &::placeholder {
      float: right;
      color: gray;
    }

    &:focus, &:valid {
      outline: none;
      color: gray;
    }
    
    &#universe {
      width: 40%;
    }

    &:focus ~ label, &:valid ~ label {
      font-size: 16px;
      bottom: 40px;
      font-weight: bold;
      color: ${props => `var(--${props.id}-sub-color)`};
    }


  }
  
  label {
    position: absolute;
    color: gray;
    left: 10px;
    font-size: 20px;
    bottom: 8px;
    transition: all .2s;
  }

  textarea {
    &#text_ap{
      font-size: 16px;
      width: 100%;
      min-height: 10rem;
      border: 1px solid ${props => `var(--${props.id}-sub-color)`};
      border-radius: 15px;
      padding: 10px 5px;
    };
  }
`;

const ButtonContainer = styled.div`
  text-align: center;

  input {
    background-color: ${props => `var(--${props.id}-sub-color)`};
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    border-radius: 15px;
    width: 50%;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      filter: invert();
      transition: 0.3s;
    }
  }
`;

const ApplyForms = (props) => {
  const { id } = props;
  const components = {
    bigdata: '빅데이터',
    java: '풀스택',
    pm: '에듀테크 PM 2기 (프로덕트 매니저)',
  }

  /* BackEnd DATA START */
  const information = { //기본입력정보
    name: '홍길동',
    date: '2023-12-12',
    email: 'email@chunjae.com'
  }

  const phoneNumberList = [
    {value: 1, text: '기존 연락처'},
    {value: 2, text: '다른 연락처'}
  ];

  const recommendList = [
    { value: 1, text: '비해당' },
    { value: 2, text: '취업지원센터' },
    { value: 3, text: '학과장 및 사범대' },
  ];

  const gradeList = [
    { value: 1, text: '고등학교' },
    { value: 2, text: '대학교 졸업 예정' },
    { value: 3, text: '대학교 졸업' },
    { value: 4, text: '대학원 졸업 예정' },
    { value: 5, text: '대학원 졸업' },
    { value: 6, text: '기타' },
  ];

  const getCardList = [
    { value: 1, text: '예' },
    { value: 2, text: '아니오' },
  ];

  const getEXList = [
    { value: 1, text: '예' },
    { value: 2, text: '아니오' },
  ];

  const pathList = [
    { value: 1, text: '검색(구글/네이버)' },
    { value: 2, text: '광고(페이스북/인스타그램)' },
    { value: 3, text: '학교 사이트' },
    { value: 4, text: '오픈 카톡' },
    { value: 5, text: '요즘것들' },
    { value: 6, text: 'hrd-net' },
    { value: 7, text: '부트텐트' },
    { value: 8, text: '슈퍼루키' },
    { value: 9, text: '링커리어' },
    { value: 10, text: '네이버카페 취업대학교' },
    { value: 11, text: '커리어리/올마이스/씽굿/이벤터스/캠퍼즈/생각나눔소/스팩토리' },
    { value: 12, text: '서울시청년일자리센터' },
    { value: 13, text: 'Other' },
  ];

  const experienceList = [
    { value: 1, text: '없음' },
    { value: 2, text: '1년 미만' },
    { value: 3, text: '1~3년 이하' },
    { value: 4, text: '3년 이상' },
    { value: 5, text: 'Other' },
  ]

  const initialTextareaValue1 = "1번 약관 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium mi sed tristique commodo. Nullam in massa neque. Etiam scelerisque diam sit amet est scelerisque, vitae ultricies quam efficitur. Nulla facilisi. Aliquam at elit eu mi sollicitudin tincidunt in non felis. Vivamus vitae lectus sed massa venenatis tincidunt. Donec euismod luctus tristique. Aliquam non feugiat tortor. Sed vel velit at risus venenatis sollicitudin eu eu justo. Mauris vel ipsum vel purus facilisis condimentum in ac dui. Nulla id erat at odio congue suscipit vel vitae purus. Sed eu nunc sed urna finibus";
  const initialTextareaValue2 = "2번 약관 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium mi sed tristique commodo. Nullam in massa neque. Etiam scelerisque diam sit amet est scelerisque, vitae ultricies quam efficitur. Nulla facilisi. Aliquam at elit eu mi sollicitudin tincidunt in non felis. Vivamus vitae lectus sed massa venenatis tincidunt. Donec euismod luctus tristique. Aliquam non feugiat tortor. Sed vel velit at risus venenatis sollicitudin eu eu justo. Mauris vel ipsum vel purus facilisis condimentum in ac dui. Nulla id erat at odio congue suscipit vel vitae purus. Sed eu nunc sed urna finibus";
  /* BackEnd DATA END */

  const [isOtherChecked, setIsOtherChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handlePhoneNumberChange = (event) => {
    setIsOtherChecked(event.target.value === "2");
  };


  const handleExperienceChange = (event) => {
    setIsOtherChecked(event.target.value === "5");
  };

  const handleChange = (event) => {
    setIsChecked(!isChecked);
  };

  const [recommend, setRecommend] = useState("");
  const [grade, setGrade] = useState("");
  const [getCard, setCard] = useState("");
  const [getEx, setEX] = useState("");

  const handleRecommend = (e) => {
    setRecommend(e.target.value);
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);
  };

  const handleCard = (e) => {
    setCard(e.target.value);
  };

  const handleEX = (e) => {
    setEX(e.target.value);
  };

  //핸드폰 번호 유효성 검사
  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);

  useEffect(() => {
    const phoneTimer = setTimeout(() => {
      validatePhone();
    }, 300);

    return () => {
      clearTimeout(phoneTimer);
    };
  }, [phone]);

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const validatePhone = () => {
    const regex = /^010-\d{4}-\d{4}$/;
    if (!regex.test(phone)) {
      setIsValidPhone(false);
    }
    else {
      setIsValidPhone(true);
    }
  };

  const handleSubmit = (event) => {
    if(!isValidPhone) {
      event.preventDefault();
      alert("비밀번호를 확인해주세요");
    }
  };

  return (
    <ApplyForm>

      <Intro id={id}>
        <h1>천재 IT 교육센터 - {components[id]}</h1>
        <p id ="top">천재교육에서 운영하는 geniA.아카데미의 지원서입니다.</p>
        <p>** 본인에게 해당하는 과정명 선택 후 아래 질문에 응답해주시기 바랍니다.</p>
        <p>** 저희는 서류 위주로 선발 절차가 진행되므로 가능한 한 상세한 작성 부탁드립니다.</p>
        <p>- 학력, 경력 등의 정보는 정보 수집용일 뿐 합격 여부와는 무관합니다.</p>
        <p>※ 신청서 기재 내용이 허위로 판명될 경우 합격이 취소될 수 있습니다. 추후 인턴 또는 채용 전환 시 합격 취소가 되실 수 있습니다.</p>
        <p>- 지원서를 통해 취득한 개인정보는 지원과 선발 절차, 교육 과정 입과 단계에서만 이용될 것을 명시합니다.</p>
        <p id= "import">앞으로의 비전과 반드시 함께하겠다는 의지, 그리고 하루하루의 실천을 해 나갈 수 있는 많은 분들을 응원합니다.</p>
      </Intro>

    <InsertForm>
      <form action={`/curriculum/${id}`} onSubmit={handleSubmit}>
        <InsertContainer id={id} className="flex">
          <h2 id={`import`}>*기본 입력정보</h2>
          <InputField id={id}><input type="text" defaultValue={information.name} required /><label>Name</label></InputField>
          <InputField id={id}><input type="date" defaultValue={information.date} required /><label>생년월일</label></InputField>
          <InputField id={id}><input type="email" defaultValue={information.email} required /><label>이메일</label></InputField>
        </InsertContainer>

        <InsertContainer className="input_margin" id={id}>
          <h2>연락처</h2>
          {phoneNumberList.map((list, i) => (
            <label key={i}>
              {list.value === 2 ? (
                <>
                  <input type="radio" name="phoneNumber" value={list.value} onChange={handlePhoneNumberChange} />
                  {list.text}
                  {isOtherChecked ? <InputField id={id}><input id="number" type="text" value={phone} onChange={handlePhoneChange} placeholder="ex) 010-0000-0000" required /> <label>연락받을 연락처</label></InputField> : null}
                </>
              ) : (
                <>
                  <input type="radio" name="phoneNumber" value={list.value} onChange={handlePhoneNumberChange} />
                  {list.text}
                </>
              )}
            </label>
          ))}
         {!isValidPhone && phone !== "" && <p>010-0000-0000 형식으로 작성해주세요</p>}
        </InsertContainer>

        <InsertContainer id={id}>
          <h2>추천 전형 여부를 체크해주세요</h2>
          <select onChange={handleRecommend} defaultValue={recommend} required>
            <option value="" disabled hidden>Choose</option>
            {recommendList.map((list, i) => (
              <option value={list.value} key={i}>
                {list.text}
              </option>
            ))}
          </select>
        </InsertContainer>

        <InsertContainer id={id}>
          <h2>최종학력을 체크해주세요</h2>
          <select onChange={handleGrade} defaultValue={grade} required>
            <option value="" disabled hidden>Choose</option>
            {gradeList.map((list, i) => (
              <option value={list.value} key={i}>
                {list.text}
              </option>
            ))}
          </select>
        </InsertContainer>

        <InsertContainer id={id}>
          <h2>최종 졸업 (혹은 졸업예정 학교)학교(전공명)를 입력해 주세요. <label id="sm">** 자료 수집용일 뿐 선발절차에 반영되지 않습니다.</label> </h2>
          <InputField id={id}><input id="universe" type="text" placeholder="ex) 천재대학교(전공명)" required /><label>최종 졸업(전공명)</label></InputField>
        </InsertContainer>

        <InsertContainer id={id}>
          <h2>국민내일배움카드를 소지하고 계신가요?</h2>
          <p id="sm">내일배움카드 없이도 접수는 가능하지만 최소 교육시작일 전까지 국민내일배움카드 발급이 완료되어 있어야 합니다.</p>
          <select onChange={handleCard} defaultValue={getCard} required>
            <option value="" disabled hidden>Choose</option>
            {getCardList.map((list, i) => (
              <option value={list.value} key={i}>
                {list.text}
              </option>
            ))}
          </select>
        </InsertContainer>

        <InsertContainer id={id}>
          <h2>기존 k-Digital Training 과정을 수강하신 적이 있으신가요.</h2>
          <p id="sm">K-digital Training 과정은 5년간 1번 지원받을 수 있으므로, 교육비 전액의 자부담이 발생할 수 있습니다.</p>
          <select onChange={handleEX} defaultValue={getEx} required>
            <option value="" disabled hidden>Choose</option>
            {getEXList.map((list, i) => (
              <option value={list.value} key={i}>
                {list.text}
              </option>
            ))}
          </select>
        </InsertContainer>

        <InsertContainer className="input_margin" id={id}>
          <h2>코딩 경험 여부를 알려주세요.</h2>
          <p>(코딩 공부 경험시간을 포함한 경험을 입력해주세요.)</p>
          {experienceList.map((list, i) => (
            <label key={i}>
              {list.value === 5 ? (
                <>
                  <input type="radio" name="experience" value={list.value} onChange={handleExperienceChange} />
                  {list.text}
                  {isOtherChecked ? <InputField id={id}><input id="universe" type="text" /></InputField> : null}
                </>
              ) : (
                <>
                  <input type="radio" name="experience" value={list.value} onChange={handleExperienceChange} />
                  {list.text}
                </>
              )}
            </label>
          ))}
        </InsertContainer>

        <InsertContainer id={id}>
          <h2>해당 분야로 지원하는 이유를 작성해주세요.</h2>
          <InputField id={id}><textarea id="text_ap" required/></InputField>
        </InsertContainer>

        <InsertContainer id={id} className="input_margin">
          <h2>해당 과정을 알게 된 경로를 선택해주시기 바랍니다. (복수 선택 가능)</h2>
          {pathList.map((list, i) => (
            <label key={i}>
              {list.value === 13 ? (
                <>
                  <input type="checkbox" value={13} onChange={handleChange} />
                  {list.text}
                  {isChecked ? <InputField id={id}><input type="text" required /></InputField> : null}
                </>
              ) : (
                <>
                  <input type="checkbox" value={list.value}/>
                  {list.text}
                </>
              )}
            </label>
          ))}
        </InsertContainer>

        <InsertContainer className="input_margin" id={id}>
          <h2>* 개인정보 수집 및 이용 동의</h2>
          <InputField id={id}><textarea value={initialTextareaValue1} readOnly /></InputField>
          <label><input type="checkbox" required/>개인정보 수집 및 이용에 동의합니다.</label>
        </InsertContainer>

        <InsertContainer className="input_margin" id={id}>
          <h2>* 개인정보 제3자 제공 동의</h2>
          <InputField id={id}><textarea value={initialTextareaValue2} readOnly /></InputField>
          <label><input type="checkbox" required/>개인정보 제3자 제공에 대해 동의합니다.</label>
        </InsertContainer>

        <ButtonContainer id={id}>
          <input type="submit" value={`신청하기`}/>
        </ButtonContainer>
      </form>
      </InsertForm>
    </ApplyForm>
  );
}

export default ApplyForms;
