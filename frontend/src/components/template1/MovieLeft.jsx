import React, { useRef } from "react";
import NavBar from "../NavBar";
import styled from "styled-components";
import About from "./About";
import Casts from "./Casts";
import Similar from "./Similar";

const MovieLeft = ({ icon, title, ott, char, description, background }) => {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    casts: useRef(null),
    similar: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainContainer background={background}>
      <NavBar Icon={icon} onNavigate={scrollToSection} />
      <Section ref={sectionRefs.home}>
        <Container>
          <Details>
            <TitleImage src={title} />
            <Description>{description}</Description>
            <Watch>
              <Platform src={ott} />
              WATCH NOW
            </Watch>
          </Details>
          <Character src={char} />
        </Container>
      </Section>

      <About
        ref={sectionRefs.about}
        title={title}
        description={description}
        background={background}
      />
      <Casts ref={sectionRefs.casts} background={background} />
      <Similar ref={sectionRefs.similar} background={background} />
    </MainContainer>
  );
};

export default MovieLeft;

const MainContainer = styled.main`
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
  align-items: flex-end;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15vh;
  margin-top: 8vh;
  width: 60%;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10vh;
    margin-left: 10vh;
  }
`;

const TitleImage = styled.img`
  width: 80%;
  max-width: 600px;
  height: auto;
  margin-bottom: 5vh;

  @media (max-width: 768px) {
    height: 30vh;
    width: 50vh;
  }
`;

const Description = styled.div`
  font-family: "Darker Grotesque", serif;
  font-weight: 500;
  font-size: 2.25vw;
  color: rgb(203, 203, 203);
  margin-bottom: 10vh;

  @media (max-width: 768px) {
    font-size: 4vw;
    text-align: center;
  }
`;

const Character = styled.img`
  height: 90vh;
  max-height: 600px;
  width: auto;
  object-fit: contain;
  position: absolute;
  right: 1vh;
  margin-right: 15vh;

  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

const Watch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Darker Grotesque", serif;
  color: rgb(202, 202, 202);
  font-weight: 600;
  margin-bottom: 10vh;
  cursor: pointer;
  text-decoration: none;

  &: hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin-bottom: 1vh;
  }
`;

const Platform = styled.img`
  height: 6vh;
  margin-right: 2vh;
`;
