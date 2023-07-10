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
        height: 50rem;
        background-color: #553BF3;

        span{
            &#line-block{
            display: block;
            margin-top: 10px;
            content: "";
            }

            display: block;
        margin-bottom: 10px;
        }

        p{
            &#title{
            color:white;
            }
        }

        &#benefitContainer{
            height: 110rem;
        }
        `;

    const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    `;

    const Box = styled.div`
    width: 250px;
    height: 200px;
    margin: 0 25px;
    background-color: white;
    text-align: left;
    color: black;
    word-wrap: break-word; 
    padding: 20px;
    border-radius: 20px;

    @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
    }

    &#review{
    width: 54rem;
    height: 100px;
    background-color: #EDE0E0;
    margin-top: 40px;
    margin-left: 50px;
    border-radius: 20px;
    color:black;

    @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
    }
    }

    &#benefit{
    width: 54rem;
    height: 250px;
    margin-top: 35px;

    p{
        
        &#rightTitle{
        font-size: 40px;
        padding-left: 230px;
        }

        &#rightContent{
        font-size: 20px;
        padding-left: 230px;
        }

        &#leftTitle{
        font-size: 40px;
        padding-right: 230px;
        padding-left: 20px;
        }

        &#leftContent{
        font-size: 20px;
        padding-right: 230px;
        padding-left: 20px;
        }
    }
    }
    &#FAQ{
    width: 300px;
    height: 300px;

    @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
    }
    }

    &#info{
    width:600px;
    height: 400px;

    @media (max-width: 1024px) {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;
    }
    p{
        font-size: 17px;
        padding-top: 10px ;
        padding-left: 20px;

        &#margintop{
        margin-top: 20px;
        }
    }
    }

    p{
    font-size: 13px;

    &#center{
        text-align: center;
    }

    &#margintop{
        margin-top: 30px;
    }
    }

    span {
    display: inline-block;
    font-size: 25px;
    margin: 10px 0;

    &#puple{
        color: rgb(45, 20, 132);
        font-weight: 900;
    }
    }

    div {
    white-space: break-spaces;
    }

    a {
    color: var(--accent-link-color);
    text-decoration: none;
    margin-left: 7px;
    
    &:hover {
        text-decoration-line: underline
    }
    }
    `;

    const ReviewBox = styled.div`
    width: 60rem;
    height: 38rem;
    background-color: #D9D9D9;
    border-radius: 20px;

    `
    const BannerBox = styled.div`
    width: 93.5rem;
    height: 130px;
    background-color: pink;
    `

    const Main = () => {
    useEffect(() => {
    AOS.init({
        duration: 500,
    });
    })};

const Section1 = () => {
    return(

    <LayerContainer>
        <div>
          <span data-aos="zoom-in-up">
            <p id='title'>내게 맞는 코스를 찾아주세요</p>
            <BoxContainer>
          <Box data-aos="zoom-in-up">
            <span>빅데이터 4기</span>
            <div>
              <p>제너릴리스트인 당신! 천재 IT교육센터와 함께라면 슈퍼-제너릴리스트가 됩니다.</p>
              <p id="margintop"><Link href= "/curriculum/bigdata"> 더알아보기</Link></p>
            </div>
          </Box>
          <Box data-aos="zoom-in-up">
            <span>풀스택 2기</span>
            <div>
              <p>제너릴리스트인 당신! 천재 IT교육센터와 함께라면 슈퍼-제너릴리스트가 됩니다.</p>
              <p id="margintop"><Link href= "/curriculum/java"> 더알아보기</Link></p>
            </div>
          </Box>
          <Box data-aos="zoom-in-up">
            <span>프로덕트 매니저 2기</span>
            <div>
              <p>제너릴리스트인 당신! 천재 IT교육센터와 함께라면 슈퍼-제너릴리스트가 됩니다.</p>
              <p id="margintop"><Link href= "/curriculum/pm"> 더알아보기</Link></p>
            </div>
          </Box>
        </BoxContainer>
          </span>
        </div>
      </LayerContainer>
    )
}

export default Section1;