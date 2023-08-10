'use client';
import { useState, useEffect } from 'react';
import AdminEdit from "@/components/Admin/Edit/AdminEdit";
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
    <>
      {loading ? (
          <Spinner/> // 로딩
      ) : (
          isAdmin ? <AdminEdit /> : <AcessDenied /> //관리자 페이지 수정 목록페이지
      )}
    </>

    
  )
}

export default page;