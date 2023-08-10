'use client';
import { useState, useEffect } from 'react';
import Admin from "@/components/Admin/AdminMain";
import { useRecoilValue } from 'recoil';
import { isAdminState } from "@/components/Login/Login";
import AcessDenied from "@/components/Error/AcessDenied";
import Spinner from '@/components/Loading/Spinner';

const Page = () => {
    const isAdmin = useRecoilValue(isAdminState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false); // Recoil에서 값이 가져와지면 로딩 상태 종료
    }, [isAdmin]);

    return (
        <>
            {loading ? (
                <Spinner/> // 로딩
            ) : (
                isAdmin ? <Admin /> : <AcessDenied />
            )}
        </>
    );
}

export default Page;
