"use client";
import { styled } from "styled-components";
import AdminList from "./KDTApplyList";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const TableContainer = styled.div`
    padding: 1rem;

    tbody tr {
        cursor: pointer;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`;

const sampleData = [
    { lecName: "pm", cardinalName: "프로덕트 매니저 2기", userName: "김소현" },
    { lecName: "java", cardinalName: "풀스택 1기", userName: "김동현" },
    { lecName: "bigdata", cardinalName: "빅데이터 4기", userName: "고현욱" },
]

const AdminApplyTable = () => {
    const [data, setData] = useState([]);
    const router = useRouter();

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/applyList`);
            const data = response.data;
            setData(data);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const datas = useMemo(() => {
        return data.length > 0 ? data : sampleData;
    }, [data]);

    return (
        <main className="p-5">
            <TableContainer>
                <button onClick={() => router.back()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-1/8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    뒤로 가기
                </button>
                <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"}>
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <h1 className="font-semibold text-5xl my-4">KDT 신청 현황</h1>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}>
                                        신청한 과목
                                    </th>
                                    <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}>
                                        기수
                                    </th>
                                    <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}>
                                        사용자명
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas.map((v, i) => (
                                    <AdminList key={i} data={v} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </TableContainer>
        </main>
    );
}

export default AdminApplyTable;