import RendingJava from "@/components/Curriculum/Java/RendingJava";
import SectionHeroJava from "@/components/Curriculum/Java/SectionHeroJava.js";

//교육과정 > Java 풀스택
const page = () => {
    return(
        <main>
            {/* 상단 Hero 세션 - KDT신청하기 버튼 */}
            <SectionHeroJava/>
            {/* 동영상 랜딩페이지 */}
            <RendingJava/>
        </main>
    );
}

export default page;