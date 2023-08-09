"use client";
import KDTApplyDeatil from "@/components/Admin/KDT/KDTApplyDeatil";
import { useParams } from "next/navigation";
import { useRecoilValue } from 'recoil';
import { isAdminState } from "@/components/Login/Login";
import AcessDenied from "@/components/Error/AcessDenied";

const page = () => {
  const {id} = useParams();
  const isAdmin = useRecoilValue(isAdminState); //회원의 등급불러오기
  
  return(
    //KDT 신청정보 자세히
    <>{isAdmin ? <KDTApplyDeatil id={id}/> : <AcessDenied/>}</>
  )
}

export default page;