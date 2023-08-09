import SectionHeroBigData from "@/components/Curriculum/BigData/SectionHeroBigData";
import SectionStorageBigData from "@/components/Curriculum/BigData/SectionStorageBigData";

//교육과정 > 빅데이터
const page = () => {
  return(
    <main>
      {/* 상단 Hero 세션 - KDT신청하기 버튼 */}
      <SectionHeroBigData/>
      {/* 하단 정보 section */}
      <SectionStorageBigData/>
    </main>

  )
}

export default page;