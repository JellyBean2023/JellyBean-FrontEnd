"use client";
import { useRouter } from "next/navigation";

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
                            <div class="p-2 sm:w-1/2 w-full">
                                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">[메인] 강좌 소개</span>
                                </div>
                            </div>

                            <div class="p-2 sm:w-1/2 w-full">
                                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Kinfolk Chips Snackwave</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default AdminEdit;