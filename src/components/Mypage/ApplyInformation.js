'use client';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useRecoilValue } from "recoil";
import { EmailIDState } from "@/components/Login/Login";

const KDTApplyDeatil = () => {

  const [applyInfo, setApplyInfo] = useState(null);;
  const emailID = useRecoilValue(EmailIDState);

  useEffect(() => {
    const fetchApplyInfo = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/mypage/kdt/${emailID}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': status
          },
        });
        setApplyInfo(response.data);
      } catch (error) {
        console.error('신청 정보 가져오기 에러:', error);
      }
    };
    fetchApplyInfo();
  }, [emailID]);

  if (!applyInfo) {
    return <div>Loading...</div>;
  }

  const getTextFromValue = (list, value) => {
    const item = list.find(item => item.value === value);
    return item ? item.text : '';
  };

  const recommendList = [
    { value: 1, text: '비해당' },
    { value: 2, text: '취업지원센터' },
    { value: 3, text: '학과장 및 사범대' },
  ];

  let recommendText = '';
  recommendList.map((v) => {
    if (v.value == applyInfo.recommend) {
      recommendText = v.text
    }
  });

  const gradeList = [
    { value: 1, text: '고등학교' },
    { value: 2, text: '대학교 졸업 예정' },
    { value: 3, text: '대학교 졸업' },
    { value: 4, text: '대학원 졸업 예정' },
    { value: 5, text: '대학원 졸업' },
    { value: 6, text: '기타' },
  ];

  let gradeText = '';
  gradeList.map((v) => {
    if (v.value == applyInfo.grade) {
      gradeText = v.text
    }
  });

  const getCardList = [
    { value: 1, text: '예' },
    { value: 2, text: '아니오' },
  ];

  let getCardText = '';
  getCardList.map((v) => {
    if (v.value == applyInfo.getCard) {
      getCardText = v.text
    }
  });

  const getExList = [
    { value: 1, text: '예' },
    { value: 2, text: '아니오' },
  ];

  let getExText = '';
  getExList.map((v) => {
    if (v.value == applyInfo.getEx) {
      getExText = v.text
    }
  });

  const experienceList = [
    { value: 1, text: '없음' },
    { value: 2, text: '1년 미만' },
    { value: 3, text: '1~3년 이하' },
    { value: 4, text: '3년 이상' },
    { value: 5, text: 'Other' },
  ]

  let experienceText = '';
  experienceList.map((v) => {
    if (v.value == applyInfo.experience) {
      experienceText = v.text
    }
  });

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

  const pathValues = applyInfo.paths.split(',');
  const pathArray = pathValues.map(value => parseInt(value));

  let pathsText = '';
  pathArray.forEach((pathValue, index) => {
    const pathItem = pathList.find(item => item.value === pathValue);
    if (pathItem) {
      pathsText += pathItem.text;
      if (index !== pathArray.length - 1) {
        pathsText += ", ";
      }
    }
  });
  
  return (
    <main className="p-5">
      <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"}>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <h1 className="font-semibold text-5xl my-4">'{applyInfo.name}'님의 신청 현황</h1>
          </div>
        </div>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.name} readOnly />

            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</label>
              <input type="text" id="birthday" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.birth} readOnly />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.email} readOnly />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
              <input type="tel" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={applyInfo.phoneNumberText} readOnly />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">추천 전형 여부</label>
              <input type="text" id="recommend" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={recommendText} readOnly />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">최종 학력</label>
              <input type="text" id="grade" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={gradeText} readOnly />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">최종 졸업(혹은 졸업예정 학교) 학교(전공명)</label>
              <input type="text" id="finalEducation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.finalEducation} readOnly />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">국민내일배움카드 소지여부</label>
              <input type="text" id="getCard" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={getCardText} readOnly />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">k-Digital Training 수강이력</label>
              <input type="text" id="getEx" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={getExText} readOnly />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">코딩 경험 여부</label>
              <input type="text" id="experience" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={experienceText + " " + applyInfo.experienceText} readOnly />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">지원하는 이유</label>
            <textarea id="reason" className="h-32 resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.reason} readOnly />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">해당 과정을 알게 된 경로</label>
            <textarea id="paths" className="h-32 resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pathsText + (applyInfo.pathText ? ", " + applyInfo.pathText : "")} readOnly />
          </div>
        </form>
      </div>
    </main>
  )
}

export default KDTApplyDeatil;