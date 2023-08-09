'use client';
import AdminKDT from "@/components/Admin/KDT/AdminKDT";
import { useRecoilValue } from 'recoil';
import { isAdminState } from "@/components/Login/Login";
import AcessDenied from "@/components/Error/AcessDenied";

const page = () => {
  const isAdmin = useRecoilValue(isAdminState); //회원의 등급불러오기
  
  return(
    //KDT 신청정보 전체 리스트
    <>{isAdmin ? <AdminKDT/> : <AcessDenied/>}</>
  )
}

export default page;