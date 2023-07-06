import { useRef, useState } from "react";
import { styled } from "styled-components";

const ApplyForm = styled.main`
  margin-left: 3rem;
  margin-right: 3rem;
  padding: 3rem;
  background-color: ${props => `var(--${props.id}-color)`};
  color: black;

  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem;
  }
  
  p:nth-last-child(1) {
    &#import {
      color: ${props => `var(--${props.id}-sub-color)`};
    }
  }
`;

const Intro = styled.div`
  margin-bottom: 50px;
  h1 {
    font-size: 50px;
  }

  p {
    color: gray;
    font-size: 15px;
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

   &#flex{
    display: flex;
    
  } //추가

  

  &#input_margin{
    
    label{
    display: block;
    margin: 10px;
  } //코딩경험 라벨

    input{
      margin: 10px;
    }
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

    &::placeholder {
      float: right;
      color: gray;
    }

    &:focus, &:valid {
      outline: none;
      color: gray;
    }
    
    &#universe {
      width: 80%;
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

  input {
    &:focus ~ label, &:valid ~ label {
      font-size: 16px;
      bottom: 40px;
      font-weight: bold;
      color: ${props => `var(--${props.id}-sub-color)`};
    }
  }

  textarea {
    &#text_ap{
      font-size: 16px;
      width: 100%;
      min-height: 10rem;
      border: 1px solid ${props => `var(--${props.id}-sub-color)`};
      border-radius: 15px;
    };
  }
`;


const ApplyForms = (props) => {
  const [isOtherChecked, setIsOtherChecked] = useState(false);

  // const setIsOtherChecked = () => 


  const { id } = props;

  const components = {
    bigdata: '빅데이터',
    java: '풀스택',
    pm: '에듀테크 PM 2기 (프로덕트 매니저)',
  }

  const information = {
    name: '홍길동',
    date: '2023-12-12',
    email: 'email@chunjae.com'
  }

  const [result, setResult] = useState('');

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setResult(value);
  }; //선택 사항 추가 (radio)

  const handleExperienceChange = (event) => {
    console.log(event.target.value);
    setIsOtherChecked(event.target.value === "4");

  };

  const recommendList = [
    {value: 1,  text: '비해당'},
    {value: 2,  text: '취업지원센터'},
    {value: 3,  text: '학과장 및 사범대'},
  ];

  const [recommend, setRecommend] = useState("");

  const handleSelect = (e) => {
    setRecommend(e.target.value);
  };

  return (
    <ApplyForm id={id}>
      <Intro>
        <h1>{components[id]}</h1>
        <p>천재교육에서 운영하는 geniA.아카데미의 지원서입니다.</p>
        <p>** 본인에게 해당하는 과정명 선택 후 아래 질문에 응답해주시기 바랍니다.</p>
        <p>** 저희는 서류 위주로 선발 절차가 진행되므로 가능한 한 상세한 작성 부탁드립니다.</p>
        <p>- 학력, 경력 등의 정보는 정보 수집용일 뿐 합격 여부와는 무관합니다.</p>
        <p>※ 신청서 기재 내용이 허위로 판명될 경우 합격이 취소될 수 있습니다. 추후 인턴 또는 채용 전환 시 합격 취소가 되실 수 있습니다.</p>
        <p>- 지원서를 통해 취득한 개인정보는 지원과 선발 절차, 교육 과정 입과 단계에서만 이용될 것을 명시합니다.</p>
        <p id="import">앞으로의 비전과 반드시 함께하겠다는 의지, 그리고 하루하루의 실천을 해 나갈 수 있는 많은 분들을 응원합니다.</p>
      </Intro>

      <InsertContainer id={`flex`}>
        <h2 id={`import`}>*기본 입력정보</h2>
        <InputField id={id}><input type="text" defaultValue={information.name} required /><label>Name</label></InputField>
        <InputField id={id}><input type="date" defaultValue={information.date} required /><label>생년월일</label></InputField>
        <InputField id={id}><input type="email" defaultValue={information.email} required /><label>이메일</label></InputField>
      </InsertContainer>

      <InsertContainer id={`flex`}>
        <h2>연락처</h2>
        <InputField id={id}><input type="text" placeholder="ex) 010-0000-0000" required /><label>연락받을 연락처</label></InputField>
      </InsertContainer>

      <InsertContainer>
        <h2>추천 전형 여부를 체크해주세요</h2>
        <select onChange={handleSelect} defaultValue={recommend}>
          <option value="" disabled hidden>Choose</option>
          {recommendList.map((list, i) => (
            <option value={list.value} key={i}>
              {list.text}
            </option>
          ))}
        </select>
      </InsertContainer>

      <InsertContainer>
        <h2>최종학력을 체크해주세요</h2>
        {/* <select>
          <option defaultValue='' disabled hidden>Choose</option>
          <option defaultValue={1}>고등학교 졸업</option>
          <option defaultValue={2}>대학교 졸업 예정</option>
          <option defaultValue={3}>대학교 졸업</option>
          <option defaultValue={4}>대학교 졸업예정</option>
          <option defaultValue={5}>대학원 졸업</option>
          <option defaultValue={6}>기타</option>
        </select> */}
        <select onChange={handleSelect} defaultValue={recommend}>
          <option value="" disabled hidden>Choose</option>
          {recommendList.map((list, i) => (
            <option value={list.value} key={i}>
              {list.text}
            </option>
          ))}
        </select>
      </InsertContainer>

      <InsertContainer id={`flex`}>
        <h2>최종 졸업 (혹은 졸업예정 학교)학교(전공명)를 입력해 주세요. <label id="sm">** 자료 수집용일 뿐 선발절차에 반영되지 않습니다.</label> </h2>
        <InputField id={id}><input id="universe" type="text" placeholder="ex) 천재대학교(전공명)" required /><label>최종 졸업(전공명)</label></InputField>
      </InsertContainer>

      <InsertContainer>
        <h2>국민내일배움카드를 소지하고 계신가요?</h2>
        <p id="sm">내일배움카드 없이도 접수는 가능하지만 최소 교육시작일 전까지 국민내일배움카드 발급이 완료되어 있어야 합니다.</p>
        <select >
          <option defaultValue='' disabled hidden>Choose</option>
          <option defaultValue={1}>예</option>
          <option defaultValue={2}>아니요</option>
        </select>
      </InsertContainer>

      <InsertContainer>
        <h2>기존 k-Digital Training 과정을 수강하신 적이 있으신가요.</h2>
        <p id="sm">K-digital Training 과정은 5년간 1번 지원받을 수 있으므로, 교육비 전액의 자부담이 발생할 수 있습니다.</p>
        <select>
          <option defaultValue='' disabled hidden>Choose</option>
          <option defaultValue={1}>예</option>
          <option defaultValue={2}>아니요</option>
        </select>
      </InsertContainer>

      <InsertContainer id="input_margin">
        <h2>코딩 경험 여부를 알려주세요.</h2>
        <p>(코딩 공부 경험시간을 포함한 경험을 입력해주세요.)</p>
        <label>
          <input type="radio" name="experience" defaultValue={1} onChange={handleExperienceChange} />
          없음
        </label>
        <label>
          <input type="radio" name="experience" defaultValue={2} onChange={handleExperienceChange} />
          1년 미만
        </label>
        <label>
          <input type="radio" name="experience" defaultValue={3} onChange={handleExperienceChange} />
          1~3년 이하
        </label>
        <label>
          <input type="radio" name="experience" defaultValue={3} onChange={handleExperienceChange} />
          3년 이상
        </label>
        <label>
          <input type="radio" name="experience" defaultValue={4} onChange={handleExperienceChange} />
          Other
          <InputField id={id}><input id="universe" type="text"/></InputField>
        </label>
      </InsertContainer>

      <InsertContainer>
        <h2>해당 분야로 지원하는 이유를 작성해주세요.</h2>
        <InputField id={id}><textarea id="text_ap" /></InputField>
      </InsertContainer>

      <InsertContainer id="input_margin">
        <h2>해당 과정을 알게 된 경로를 선택해주시기 바랍니다. (복수 선택 가능)</h2> 
        <label><input type="checkbox"/>검색(구글/네이버)</label>
        <label><input type="checkbox"/>광고(페이스북/인스타그램)</label>
        <label><input type="checkbox"/>학교 사이트</label>
        <label><input type="checkbox"/>오픈 카톡</label>
        <label><input type="checkbox"/>요즘것들</label>
        <label><input type="checkbox"/>hrd-net</label>
        <label><input type="checkbox"/>부트텐트</label>
        <label><input type="checkbox"/>슈퍼루키</label>
        <label><input type="checkbox"/>링커리어</label>
        <label><input type="checkbox"/>네이버카페 취업대학교</label>
        <label><input type="checkbox"/>커리어리/올마이스/씽굿/이벤터스/캠퍼즈/생각나눔소/스팩토리</label>
        <label><input type="checkbox"/>서울시청년일자리센터</label>
        <label><input type="checkbox"/>Other: <InputField id={id}><input type="text" required /><label></label></InputField></label>  
      </InsertContainer>

      

    </ApplyForm>
  );
}

export default ApplyForms;
