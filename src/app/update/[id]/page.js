'use client';
import { useParams } from "next/navigation";
import Update from "@/components/Update/Update";

const page = () => {
  const {id} = useParams();
  return(
    <Update id={id}/>
  )
}

export default page;