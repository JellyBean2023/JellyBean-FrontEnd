"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useRecoilValue } from "recoil";
import { EmailIDState } from "@/components/Login/Login";
import { useRouter } from 'next/navigation';

const KDTApplyDeatil = (props) => {
  const router = useRouter();
  const { id } = props;
  const name = decodeURI(id);

  const [applyInfo, setApplyInfo] = useState([]);
  const emailID = useRecoilValue(EmailIDState);

  useEffect(() => {
    // 신청현황 불러오기
    const fetchApplyInfo = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/mypage/kdt/${emailID}`,
          {
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
  }, []);

  return (
    <main className="p-5">
      <button onClick={() => router.back()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-1/8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        뒤로 가기
      </button>
      <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"}>
        <div className="rounded-t mb-0 px-4 py-3 border-0"> 
          <div className="flex flex-wrap items-center">
            <h1 className="font-semibold text-5xl my-4">'{name}'님의 신청 현황</h1>
          </div>
        </div>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.name} readOnly/>
            </div>
            <div>
              <label for="birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</label>
              <input type="text" id="birthday" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.birth} readOnly/>
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.email} readOnly/>
            </div>
            <div>
              <label for="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
              <input type="tel" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={applyInfo.phoneNumberText} readOnly/>
            </div>
            <div>
              <label for="recommend" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">추천 전형 여부</label>
              <input type="text" id="recommend" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.recommend} readOnly/>
            </div>
            <div>
              <label for="grade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">최종 학력</label>
              <input type="text" id="grade" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.grade} readOnly/>
            </div>
            <div>
              <label for="finalEducation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">최종 졸업(혹은 졸업예정 학교) 학교(전공명)</label>
              <input type="text" id="finalEducation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.finalEducation} readOnly/>
            </div>
            <div>
              <label for="getCard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">국민내일배움카드 소지여부</label>
              <input type="text" id="getCard" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.getCard} readOnly/>
            </div>
            <div>
              <label for="getEx" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">k-Digital Training 수강이력</label>
              <input type="text" id="getEx" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.getEx} readOnly/>
            </div>
            <div>
              <label for="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">코딩 경험 여부</label>
              <input type="text" id="experience" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.experience + " (" + applyInfo.experienceText + ")"} readOnly/>
            </div>
          </div>
          <div className="mb-6">
            <label for="reason" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">지원하는 이유</label>
            <textarea id="reason" className="h-32 resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.reason} readOnly/>
          </div>
          <div className="mb-6">
            <label for="paths" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">해당 과정을 알게 된 경로</label>
            <textarea id="paths" className="h-32 resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applyInfo.paths + ", " + applyInfo.pathText} readOnly/>
          </div>
        </form>
      </div>
    </main>
  )
}
 

export default KDTApplyDeatil;