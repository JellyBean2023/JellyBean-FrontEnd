"use client";
import styled from 'styled-components';
import Banner from "@/components/Main/Banner";

const MainContainer = styled.main`
  section {
    padding: 0.5rem 1rem;
    min-height: 10rem;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <section>
        aaa
      </section>
      <section>
        bbbb
      </section>
      <section>
        cccc
      </section>
      <section>
        dddd
      </section>
    </MainContainer>
  );
}

export default Main;