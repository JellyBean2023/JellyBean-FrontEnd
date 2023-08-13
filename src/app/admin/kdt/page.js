'use client';
import { useState, useEffect } from 'react';
import AdminKDT from "@/components/Admin/KDT/AdminKDT";
import { useRecoilValue } from 'recoil';
import { isAdminState } from "@/components/Login/Login";
import AcessDenied from "@/components/Error/AcessDenied";
import Spinner from '@/components/Loading/Spinner';

const page = () => {
  const isAdmin = useRecoilValue(isAdminState); //회원의 등급불러오기
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Recoil에서 값이 가져와지면 로딩 상태 종료
  }, [isAdmin]);

  return(
    //KDT 신청정보 전체 리스트
    <>
      {loading ? (
          <Spinner/> // 로딩
      ) : (
          isAdmin ? <AdminKDT /> : <AcessDenied />
      )}
    </>
  )
}

export default page;