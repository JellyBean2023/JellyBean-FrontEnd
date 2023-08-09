import { useRouter } from "next/navigation";

const EditSelectBox = (props) => {
    const router = useRouter();
    const { page, id } = props;
    return (
        <button className="p-2 sm:w-1/2 w-full" onClick={() => router.replace(`/admin/edit/${id}`)}>
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{page}</span>
            </div>
        </button>
    )
}

export default EditSelectBox;