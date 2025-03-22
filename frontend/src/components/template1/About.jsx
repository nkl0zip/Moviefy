import React from "react";
import styled from "styled-components";
import background1 from "../../images/template1/background1.png";
import title1 from "../../images/template1/title1.png";

const About = React.forwardRef(({ title, description, background }, ref) => {
  return (
    <AboutSection ref={ref} background={background}>
      <Container>
        <Front>
          <Genres>DRAMA | ACTION | THRILLER | ADVENTURE</Genres>
          <Image src={title} />
        </Front>
        <Detail>
          <Info>2021 | SEASON 1 | ENGLISH, KOREAN</Info>
          <Description>{description}</Description>
          <ExtraInfo>
            <span>EPISODES: 9</span>
            <span>IMDb: 8.0/10</span>
          </ExtraInfo>
        </Detail>
      </Container>
    </AboutSection>
  );
});

export default About;

const AboutSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.background});
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 5%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4vh;
  gap: 4vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Front = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Darker Grotesque", serif;
  font-weight: 600;
  width: 40%;
  justify-content: center;
`;

const Genres = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Image = styled.img`
  height: 90%;
`;

const Detail = styled.div`
  font-family: "Darker Grotesque", serif;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const Info = styled.div`
  margin-bottom: 1rem;
`;

const Description = styled.div`
  margin-top: 4vh;
  margin-bottom: 4vh;
  font-size: 1rem;
  font-weight: 200;

  @media (max-width: 768px) {
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size: 0.7rem;
    font-weight: 200;
  }
`;

const ExtraInfo = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
