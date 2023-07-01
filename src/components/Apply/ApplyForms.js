import { styled } from "styled-components";

const ApplyForm = styled.main`
  margin-left: 15rem;
  margin-right: 15rem;
  padding: 10px;
  background-color: ${props => `var(--${props.id}-color)`};
  
  h1 {
    color: blck;
  }

  p:nth-last-child(1) {
    color: ${props => `var(--${props.id}-sub-color)`};;
  }
`;

const Intro = styled.div`
  h1 {
    font-size: 50px;
  }

  p {
    color: gray;
  }
`;

const InsertContainer = styled.div`
  
`;

const InputField = styled.div`
  position: relative;
  margin-top: 65px;
  
  input {
    font-size: 15px;
    color: gray;
    width: 50%;
    border: none;
    border-bottom: solid ${props => `var(--${props.id}-sub-color)`};
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
        <p>천재교육에서 운영하는 geniA.아카데미의 지원서입니다. </p>
        <p>** 본인에게 해당하는 과정명 선택 후 아래 질문에 응답해주시기 바랍니다. </p>
        <p>** 저희는 서류 위주로 선발 절차가 진행되므로 가능한 한 상세한 작성 부탁드립니다. </p>
        <p>- 학력, 경력 등의 정보는 정보 수집용일 뿐 합격 여부와는 무관합니다. </p>
        <p>※ 신청서 기재 내용이 허위로 판명될 경우 합격이 취소될 수 있습니다. 추후 인턴 또는 채용 전환 시 합격 취소가 되실 수 있습니다.  </p>
        <p>- 지원서를 통해 취득한 개인정보는 지원과 선발 절차, 교육 과정 입과 단계에서만 이용될 것을 명시합니다.   </p>
        <p> 앞으로의 비전과 반드시 함께하겠다는 의지, 그리고 하루하루의 실천을 해 나갈 수 있는 많은 분들을 응원합니다. </p>
      </Intro>
      <InsertContainer>

        <h2>필수 입력정보</h2>
        <InputField id={id}><input type="text" placeholder="한글 또는 영문으로 입력 가능" required /><label>Name</label></InputField>
      </InsertContainer>
    </ApplyForm>
  );
}

export default ApplyForms;
