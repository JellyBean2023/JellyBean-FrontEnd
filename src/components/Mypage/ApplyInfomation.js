'use client';
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from 'axios';
import { useRecoilValue } from "recoil";
import { EmailIDState } from "@/components/Login/Login";
import { useRouter } from 'next/navigation';


const ApplyContainer = styled.main`
  width: 100%;
  background-color: ${props => `var(--${props.id}--anti-text-color)`};
  color: black;
`;

const InsertForm = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  padding: 3rem;
  background-color: ${props => `var(--${props.id}--anti-text-color)`};
  color: ${props => `var(--${props.id}--text-color)`};

  @media screen and (max-width: 1024px) {
    margin: 0;
    padding: 0;
  }
`;

const Intro = styled.div`
  padding: 1rem 3rem;
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
  background-color: ${props => `var(--${props.id}--anti-text-color)`};
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid;
  color: var(--text-color);

  select{
    background-color: ${props => `var(--${props.id}--anti-text-color)`};
  }

  h2 {
    font-size: 20px;
    flex-basis: 100%;
    margin-bottom: 10px;
    color: ${props => `var(--${props.id}--text-color)`};
    
    &#import {
      color: red;
    }

    #sm {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
    margin: 1rem;
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
  border-color: var(--anti--text-color);
  
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
      width: 50%;
    }

    &::placeholder {
      float: right;
      color: gray;
    }

    &:focus, &:valid {
      outline: none;
      color: gray;
    }
    
    &#finalEducation {
      width: 50%;
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
    background-color:  ${props => `var(--${props.id}--anti-text-color)`};

    &#agreement1{
      border-color: 1px solid var(--taxt-color);
    }

    &#agreement2{
      border-color: 1px solid var(--taxt-color);
    }

    &#text_ap{
      font-size: 16px;
      width: 100%;
      min-height: 10rem;
      border: 1px solid ${props => `var(--${props.id}-sub-color)`};
      border-radius: 15px;
      padding: 10px 5px;
      background-color: rgba(255,255,255,0.01);
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

const ApplyForms = (props) => {
    const status = localStorage.getItem("accessToken");
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
        { value: 1, text: '기존 연락처' },
        { value: 2, text: '다른 연락처' }
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


    const [isPhoneChecked, setIsPhoneChecked] = useState(false);
    const [isOtherChecked, setIsOtherChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [agreeCollect, setAgreeCollect] = useState(false);
    const [agreeThirdParty, setAgreeThirdParty] = useState(false);
    const [selectedPaths, setSelectedPaths] = useState([]);

    const handlePhoneNumberChange = (event) => {
        setIsPhoneChecked(event.target.value === "2");
    };
    const handleExperienceChange = (event) => {
        setIsOtherChecked(event.target.value === "5");
    };
    const handleChange = (event) => {
        setIsChecked(!isChecked);
    };
    // 체크 박스가 변경될 때 상태를 업데이트하는 함수
    const handleAgreeCollectChange = (event) => {
        setAgreeCollect(event.target.checked);
    };
    const handleAgreeThirdPartyChange = (event) => {
        setAgreeThirdParty(event.target.checked);
    };
    // 체크박스 변경 핸들러
    const handlePathChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedPaths((prevSelectedPaths) => [...prevSelectedPaths, value]);
        } else {
            setSelectedPaths((prevSelectedPaths) =>
                prevSelectedPaths.filter((path) => path !== value)
            );
        }
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


    const [members, setMembers] = useState([]);
    const emailID = useRecoilValue(EmailIDState);
  
    console.log(members)
  
    useEffect(() => {
      const fetchMembers = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/mypage/kdt/${emailID}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': status
            },
          });
          setMembers(response.data);
        } catch (error) {
          console.error('Error fetching members:', error);
        }
      };
      fetchMembers();
    }, []);
  

    const router = useRouter();

    const handleGoToMypage = () => {
        router.back(-1);
    };

    return (
        <ApplyContainer>
            <InsertForm>
                <form>
                    <InsertContainer id={id} className="flex">
                        <h2 id={`import`}>*기본 입력정보</h2>
                        <InputField id={id}><input type="text" name="name" defaultValue={members.name} /><label>Name</label></InputField>
                        <InputField id={id}><input type="date" name="date" defaultValue={members.date} /><label>생년월일</label></InputField>
                        <InputField id={id}><input type="email" name="email" defaultValue={members.email} /><label>이메일</label></InputField>
                    </InsertContainer>
                    <InsertContainer className="input_margin" id={id}>
                        <h2 id={id}>연락처</h2>
                        <InputField id={id}><input id="number" type="text" name="phoneNumber" value={members.phoneNumberText} /></InputField>
                    </InsertContainer>
                    <InsertContainer id={id}>
                        <h2>추천 전형 여부</h2>
                    </InsertContainer>
                    <InsertContainer id={id}>
                        <h2>최종학력</h2>
                    </InsertContainer>
                    <InsertContainer id={id}>
                        <h2>최종 졸업 (혹은 졸업예정 학교)학교(전공명)</h2>
                        <InputField id={id}><input id="finalEducation" type="text" name="finalEducation" required /></InputField>
                    </InsertContainer>
                    <InsertContainer id={id}>
                        <h2>국민내일배움카드를 소지여부</h2>
                    </InsertContainer>
                    <InsertContainer id={id}>
                        <h2>기존 k-Digital Training 과정 수강여부</h2>
                    </InsertContainer>
                    <InsertContainer className="input_margin" id={id}>
                        <h2>코딩 경험 여부</h2>
                    </InsertContainer>
                    <InsertContainer id={id}>
                        <h2>해당 분야로 지원하는 이유</h2>
                        <InputField id={id}><textarea id="text_ap" name="reason" value={members.reason} required /></InputField>
                    </InsertContainer>
                    <InsertContainer id={id} className="input_margin">
                        <h2>해당 과정을 알게 된 경로</h2>
                    </InsertContainer>
                    <SubmitContainer><input type="button" onClick={handleGoToMypage} value="마이페이지로 돌아가기" /></SubmitContainer>
                </form>
            </InsertForm>
        </ApplyContainer>
    )
}


export default ApplyForms;