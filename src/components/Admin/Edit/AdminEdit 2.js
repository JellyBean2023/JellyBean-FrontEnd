"use client";
import { useRouter } from "next/navigation";
import EditSelectBox from "./EditSelectBox";

const AdminEdit = () => {
    const router = useRouter();

    return (
        <main className="p-5">
            <button onClick={() => router.back()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-1/8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                뒤로 가기
            </button>
            <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"}>
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <h1 className="font-semibold text-5xl my-4">페이지 수정하기</h1>
                    </div>
                </div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-4 mx-auto">
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <EditSelectBox page={"[메인] 강좌 소개"} id="CurriculumBox" />
                            <EditSelectBox page={"section2"} id="section2"/>
                            <EditSelectBox page={"Lorem ipsum dolor sit amet"} id="Lorem ipsum"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default AdminEdit;