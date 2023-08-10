'use client';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useRecoilValue } from "recoil";
import { EmailIDState } from "@/components/Login/Login";
import { useRouter } from 'next/navigation';




const Mypage = () => {

  const [members, setMembers] = useState([]);
  const emailID = useRecoilValue(EmailIDState);

  const [applyInfo, setApplyInfo] = useState([]);

  console.log(applyInfo);

  const router = useRouter();

  const handleGoToMemberInfo = () => {
    router.push('/memberInformation');
  };

  const handleGoToApplyInfo = () => {
    router.push('/applyInformation');
  };

    //회원정보 불러오기

  useEffect(() => {

    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/mypage/${emailID}`,
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
    <main className="profile-page">
      <section className="relative block" style={{ height: "500px" }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  {members.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  {members.email}
                </div>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  tel: {members.phone}
                </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <button onClick={handleGoToMemberInfo} className="font-normal text-pink-500">
                    회원정보 상세보기
                  </button>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full flex flex-col space-y-6 lg:space-y-8 lg:w-9/12 px-4">
                    <div>
                      <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                        강의신청 현황
                      </h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                        <p><i className="fas fa-map-marker-alt mr-2 text-lg text-blue-500">신청 현황: {applyInfo.exist ? '신청완료' : '미신청'}</i></p>
                        {applyInfo.exist && ( 
                          <>
                            <p>
                              <i className="fas fa-map-marker-alt mr-2 text-lg text-blue-500">
                                신청날짜: {applyInfo.date}
                              </i>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <button onClick={handleGoToApplyInfo} className="font-normal text-pink-500">
                      상세보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Mypage;