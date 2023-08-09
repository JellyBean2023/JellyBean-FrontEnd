"use client";
import ApplyForms from "@/components/Apply/ApplyForms";
import { useParams } from 'next/navigation';
 
export default function Page() {
  const {id} = useParams();

  return (
    <ApplyForms id={id}/> //KDT 신청 폼 페이지
  )
}