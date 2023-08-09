"use client";
import KDTApplyDeatil from "@/components/Admin/KDT/KDTApplyDeatil";
import { useParams } from "next/navigation";

const page = () => {
  const {id} = useParams();

  return(
    <KDTApplyDeatil id={id}/> //KDT 신청정보 자세히
  )
}

export default page;