"use client";
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

export default function RecoilHOC({ children }) {
    useEffect(()=>{
        localStorage.getItem("token")
    },[])
    return (
        <RecoilRoot>
              {children}
        </RecoilRoot>
    )
  }