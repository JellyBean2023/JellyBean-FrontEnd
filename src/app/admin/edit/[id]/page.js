'use client';
import { useParams } from "next/navigation";
import Edit from "@/components/Admin/Edit/EditDetail";
import { useRecoilValue } from 'recoil';
import { isAdminState } from "@/components/Login/Login";
import AcessDenied from "@/components/Error/AcessDenied";

const page = () => {
  const {id} = useParams(); //URL에서 ID param을 추출
  const isAdmin = useRecoilValue(isAdminState); //회원의 등급불러오기
  
  return(
    //페이지 정보 수정페이지
    <>{isAdmin ? <Edit id={id}/> : <AcessDenied/>}</>
  )
}

export default page;