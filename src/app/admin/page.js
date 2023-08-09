'use client';
import Admin from "@/components/Admin/AdminMain";
import { useRecoilValue } from 'recoil';
import { isAdminState } from "@/components/Login/Login";
import AcessDenied from "@/components/Error/AcessDenied";

const page = () => {
    const isAdmin = useRecoilValue(isAdminState); //회원의 등급불러오기

    return(
        <>{isAdmin ? <Admin/> : <AcessDenied/>}</>// 관리자 Dashboard페이지
    );
}

export default page;