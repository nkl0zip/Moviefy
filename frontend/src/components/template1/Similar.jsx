import React from "react";
import styled from "styled-components";
import movie1 from "../../images/similar/movie1.png";
import movie2 from "../../images/similar/movie2.png";
import movie3 from "../../images/similar/movie3.png";
import movie4 from "../../images/similar/movie4.png";
import movie5 from "../../images/similar/movie5.png";

const Similar = React.forwardRef(({ background }, ref) => {
  return (
    <SimilarSection ref={ref} background={background}>
      <Container>
        <LeftCont>
          <UpImg src={movie1} />
          <DownImg src={movie2} />
        </LeftCont>
        <RightCont>
          <BigImg src={movie3} />
          <DownCont>
            <LeftImg src={movie4} />
            <RightImg src={movie5} />
          </DownCont>
        </RightCont>
      </Container>
    </SimilarSection>
  );
});

export default Similar;

const SimilarSection = styled.section`
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

  @media (max-width: 768px) {
    height: auto;
    padding: 30px 3%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2vh;
  margin-top: 10vh;
  margin-left: 5vh;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-top: 5vh;
  }
`;

const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 2vh;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 2vh;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const UpImg = styled.img`
  height: 45%;
  max-width: 100%;
  object-fit: cover;
`;
const DownImg = styled.img`
  height: 45%;
  max-width: 100%;
  object-fit: cover;
`;

const BigImg = styled.img`
  height: 45%;
  width: 85%;
  max-width: 100%;
  object-fit: cover;
`;

const DownCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vh;
  flex-wrap: wrap;
  justify-content: center;
`;

const LeftImg = styled.img`
  height: 90%;
  max-width: 100%;
  object-fit: cover;
`;

const RightImg = styled.img`
  height: 90%;
  max-width: 100%;
  object-fit: cover;
`;
