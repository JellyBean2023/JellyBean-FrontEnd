import Link from 'next/link';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";

const LayerContainer = styled.section`
  text-align: center;
  vertical-align: middle;
  display : flex;
  justify-content : center;
  align-items : center;
  font-size: 40px;
  color: var(--text-color);
  height: 10rem;
  background-color: #553BF3;
  padding: 300px 0 55px 0;

  span{
    display: block;
    margin-bottom: 10px;
  }

  p{
    &#title{
      color:white;
    }
  }

  @media (max-width: 1024px) {
    font-size: 30px;
  }

`;

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  })
};

const Section1 = () => {
  return (

    <LayerContainer id='section1'>
      <div>
        <span data-aos="zoom-in-up">
          <p id='title'>내게 맞는 코스를 찾아주세요</p>
        </span>
      </div>
    </LayerContainer>
  )
}

export default Section1;