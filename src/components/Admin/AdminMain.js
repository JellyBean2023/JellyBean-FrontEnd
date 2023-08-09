import AdminBlocks from "./AdminBlocks";
import lifeline from '../../assets/img/lifeline.svg';
import person from '../../assets/img/person.svg';

const Admin = () => {
    return (
        <main className="p-8">
            <h1 className={"font-semibold text-5xl"}>Dashboard</h1>
            <section className="text-gray-600 body-font">
                <div className="container py-12 mx-auto flex flex-wrap justify-center">
                    <div className="flex flex-wrap justify-center w-full">
                        <AdminBlocks link={'/admin/kdt'} title={"KDT 신청 현황"} explain={"전체 사용자의 KDT 신청 현황을 볼 수 있습니다."} image={lifeline} />
                        <AdminBlocks link={'/admin/edit'} title={"페이지 정보 수정"} explain={"페이지 정보를 수정할 수 있습니다."} image={person}/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Admin;