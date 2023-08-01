import { useRouter } from "next/navigation";

const AdminApplyList = (props) => {
    const { data } = props;
    const router = useRouter();

    return (
        <tr onClick={() =>router.push(`/admin/kdt/detail?name=${data.userName}`)}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                {data.lecName}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.cardinalName}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.userName}
            </td>
        </tr>
    );
}

export default AdminApplyList;