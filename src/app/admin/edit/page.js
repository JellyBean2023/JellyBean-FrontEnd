'use client';
import AdminEdit from "@/components/Admin/Edit/AdminEdit";
import { useRecoilValue } from 'recoil';
import { isAdminState } from "@/components/Login/Login";
import AcessDenied from "@/components/Error/AcessDenied";

const page = () => {
  const isAdmin = useRecoilValue(isAdminState); //회원의 등급불러오기

  return(
    <>{isAdmin ? <AdminEdit/> : <AcessDenied/>}</>//관리자 페이지 수정 목록페이지
  )
}

export default page;