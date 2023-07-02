import { styled } from "styled-components";

const ApplyForm = styled.main`
  margin-left: 10rem;
  margin-right: 10rem;
  padding: 3rem;
  background-color: ${props => `var(--${props.id}-color)`};
  color: black;

  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem;
  }
  
  p:nth-last-child(1) {
    color: ${props => `var(--${props.id}-sub-color)`};
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
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin: 25px 0;

  background-color: rgba(255,255,255,0.5);
  border-radius: 10px;
  padding: 1rem;

  h2 {
    font-size: 20px;
    flex-basis: 100%;
    margin-bottom: 10px;
    
    &#import {
      color: red;
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }

  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
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
`;

const ApplyForms = (props) => {
  const { id } = props;

  const components = {
    bigdata: '빅데이터',
    java: '풀스택',
    pm: '에듀테크 PM 2기 (프로덕트 매니저)',
  }

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
        <p>앞으로의 비전과 반드시 함께하겠다는 의지, 그리고 하루하루의 실천을 해 나갈 수 있는 많은 분들을 응원합니다.</p>
      </Intro>

      <InsertContainer>
        <h2 id={`import`}>*기본 입력정보</h2>
        <InputField id={id}><input type="text"  value={`홍길동`} required/><label>Name</label></InputField> 
        <InputField id={id}><input type="date"  value={`2023-12-12`}required/><label>생년월일</label></InputField>
        <InputField id={id}><input type="email" value={`email@chunjae.com`}required/><label>이메일</label></InputField>
      </InsertContainer>

      <InsertContainer>
        <h2>연락처</h2>
        <InputField id={id}><input type="text" placeholder="ex) 010-0000-0000" required /><label>연락받을 연락처</label></InputField>
      </InsertContainer>

      <InsertContainer>
        <h2>추천 전형 여부를 체크해주세요</h2>
        <select>
          <option value='' selected disabled hidden>Choose</option>
          <option value={``}>비해당</option>
          <option value={``}>취업지원센터</option>
          <option value={``}>학과장 및 사범대</option>
        </select>
      </InsertContainer>

      <InsertContainer>
        <h2>최종학력을 체크해주세요</h2>
        <select>
          <option value='' selected disabled hidden>Choose</option>
          <option value={``}>고등학교 졸업</option>
          <option value={``}>대학교 졸업 예정</option>
          <option value={``}>대학교 졸업</option>
          <option value={``}>대학교 졸업예정</option>
          <option value={``}>대학원 졸업</option>
          <option value={``}>기타</option>
        </select>
      </InsertContainer>



    </ApplyForm>
  );
}

export default ApplyForms;
