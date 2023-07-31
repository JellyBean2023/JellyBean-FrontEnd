"use client";
import { styled } from "styled-components";
import AdminList from "./AdminList";

const TableContainer = styled.div`
    padding: 1rem;

    tbody tr {
        cursor: pointer;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`;

const AdminTable = () => {
    return (
        <main className="p-5">
            <h1 className={"font-semibold text-xl"}>관리자 페이지</h1>
            <TableContainer>
                <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"}>
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className={"font-semibold text-lg"}>신청 목록</h3>
                            </div>
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
                                <AdminList/>
                                <AdminList/>
                                <AdminList/>
                                <AdminList/>
                                <AdminList/>
                                <AdminList/>
                                <AdminList/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </TableContainer>
        </main>
    );
}

export default AdminTable;