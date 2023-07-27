'use client';
import { styled } from "styled-components";
import { useEffect, useMemo, useState } from 'react';
import CurriculumBox from "./CurriculumBox";
import axios from "axios";
import UpdateButton from "../Common/UpdateButton/UpdateButton";

const CurriculumContainer = styled.section`
    background-color: #553BF3;
    position: relative;
`;

const Curriculum = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
      
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/lectures`);
          const data = response.data;
          setData(data);
          setLoading(false);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      fetchData();
    }, []);

    const sampleData = [
        { lecName: "pm", cardinalName: "프로덕트 매니저 2기", lecStatus: true, lecInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed sagittis sapien. Mauris posuere consequat lorem. Duis lorem risus, facilisis id lorem ac, placerat tempor turpis. Ut nec condimentum diam." },
        { lecName: "java", cardinalName: "풀스택 1기", lecStatus: false, lecInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed sagittis sapien." },
        { lecName: "bigdata", cardinalName: "빅데이터 4기", lecStatus: false, lecInfo: "Lorem ipsum dolor sit amet" },
    ]

    const datas = useMemo(() => {
      return data.length > 0 ? data : sampleData;
    }, [data]);

    return (
        <CurriculumContainer className="text-gray-600 body-font">
            {/* if the role is admin */}
            <UpdateButton link="CurriculumBox"/>
            {/* if the role is admin */}
            <div className="container px-5 py-24 mx-auto flex items-center h-full">
                <div className="flex flex-wrap -m-4">
                    {datas.map((v,i) => (
                        <CurriculumBox key={i} variable={v} loading={loading}/>
                    ))}
                </div>
            </div>
        </CurriculumContainer>
    );
}

export default Curriculum;