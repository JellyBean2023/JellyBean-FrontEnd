'use client';
import { useParams } from "next/navigation";
import Edit from "@/components/Edit/Edit";

const page = () => {
  const {id} = useParams();
  return(
    <Edit id={id}/>
  )
}

export default page;