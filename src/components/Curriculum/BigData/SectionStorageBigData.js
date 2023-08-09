import Image from "next/image";
import '../../../assets/scss/Curriculum/BigData/BigData.scss';
import section1 from '../../../assets/img/bigData/section1.png';

const SectionStorageBigData = () => {
    return (
        <section>
            <div className="div-bglayers-comp">
                <div className="overlap-group">
                    <h1 className="IT-IT">
                        <span className="text-wrapper">
                            안녕하세요, 천재 IT교육센터입니다!
                            <br />
                        </span>
                        <span className="span">천재 IT교육센터 일정 및 정보</span>
                    </h1>
                    <Image src={section1} className="div" alt="section1"/>
                </div>
            </div>
        </section>
    )
}

export default SectionStorageBigData;