'use client';
import { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import EditDetail from "@/components/Admin/Edit/EditDetail";
import { useRecoilValue } from 'recoil';
import { isAdminState } from "@/components/Login/Login";
import AcessDenied from "@/components/Error/AcessDenied";
import Spinner from '@/components/Loading/Spinner';

const page = () => {
  const {id} = useParams(); //URL에서 ID param을 추출
  const isAdmin = useRecoilValue(isAdminState); //회원의 등급불러오기
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Recoil에서 값이 가져와지면 로딩 상태 종료
  }, [isAdmin]);

  return(
    //페이지 정보 수정페이지
    <>
      {loading ? (
          <Spinner/> // 로딩
      ) : (
          isAdmin ? <EditDetail id={id}/> : <AcessDenied />
      )}
    </>

  )
}

export default page;