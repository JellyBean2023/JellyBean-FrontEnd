'use client';
import { useParams } from "next/navigation";
import Edit from "@/components/Admin/Edit/EditDetail";

const page = () => {
  const {id} = useParams();
  return(
    <Edit id={id}/>
  )
}

export default page;