"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AdminBlocks = (props) => {
    const { link, title, explain, image } = props;
    const router = useRouter();
    return (
        <button class="p-4 lg:w-1/2 md:w-full" onClick={()=>router.push(link)}>
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 items-center flex-col sm:flex-row">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <Image className="w-10 h-10 " src={image} alt="Image"/>
                </div>
                <div class="flex-grow w-80 text-center sm:text-left">
                    <h2 class="text-gray text-lg title-font font-medium mb-3 dark:text-white">{title}</h2>
                    <p class="leading-relaxed text-base h-12 dark:text-slate-400">{explain}</p>
                </div>
            </div>
        </button>
    )
}

export default AdminBlocks;