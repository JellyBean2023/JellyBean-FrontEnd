'use client';
import { useState, useEffect } from 'react';
import KDTApplyDeatil from "@/components/Admin/KDT/KDTApplyDeatil";
import { useParams } from "next/navigation";
import { useRecoilValue } from 'recoil';
import { isAdminState } from "@/components/Login/Login";
import AcessDenied from "@/components/Error/AcessDenied";
import Spinner from '@/components/Loading/Spinner';

const page = () => {
  const {id} = useParams();
  const isAdmin = useRecoilValue(isAdminState); //회원의 등급불러오기
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(false); // Recoil에서 값이 가져와지면 로딩 상태 종료
  }, [isAdmin]);

  return(
    //KDT 신청정보 자세히
    <>
      {loading ? (
          <Spinner/> // 로딩
      ) : (
          isAdmin ? <KDTApplyDeatil id={id} /> : <AcessDenied />
      )}
    </>
  )
}

export default page;