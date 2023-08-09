'use client';
import { useParams } from "next/navigation";
import Edit from "@/components/Admin/Edit/EditDetail";

const page = () => {
  const {id} = useParams(); //URL에서 ID param을 추출 
  return(
    <Edit id={id}/> //페이지 정보 수정페이지
  )
}

export default page;