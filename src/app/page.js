"use client";
import styled from 'styled-components';
import Header from "../components/Head/Header"
import Banner from "@/components/Main/Banner";
import Footer from "../components/Foot/Footer"

const AppContainer = styled.div`
  align-items: center;
`;

const MainContainer = styled.main`
  section {
    padding: 0.5rem 1rem;
    min-height: 10rem;
  }
`;

const Main = () => {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Banner />
        <section>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dZs_cLHfnNA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
      <Footer />
    </AppContainer>
  );
}

export default Main;