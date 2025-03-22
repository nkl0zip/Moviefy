import React from "react";
import styled from "styled-components";
import Cast1 from "../../images/casts/cast1.png";
import Cast2 from "../../images/casts/cast2.png";
import Cast3 from "../../images/casts/cast3.png";
import Cast4 from "../../images/casts/cast4.png";

const Casts = React.forwardRef(({ background }, ref) => {
  return (
    <CastsSection ref={ref} background={background}>
      <Container>
        <CardUp>
          <Img src={Cast1} />
          <Name>
            <span>Lee Jung-jae</span>
            <span>Seong Gi-hun</span>
          </Name>
        </CardUp>
        <CardDown>
          <Name>
            <span>Gong Yoo</span>
            <span>The Salesman</span>
          </Name>
          <Img src={Cast2} />
        </CardDown>
        <CardUp>
          <Img src={Cast3} />
          <Name>
            <span>Park Hae-soo</span>
            <span>Cho Sang-woo</span>
          </Name>
        </CardUp>
        <CardDown>
          <Name>
            <span>Jung Ho-yeon</span>
            <span>Kang Sae-byeok</span>
          </Name>
          <Img src={Cast4} />
        </CardDown>
      </Container>
    </CastsSection>
  );
});

export default Casts;

const CastsSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.background});
  color: white;
  display: flex;
  flex-direction: column;

  padding: 50px 5%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2vh;
  gap: 0.1vh;
  justify-content: center;
  height: 100%;
  margin-top: 5vh;
`;

const CardUp = styled.div``;
const CardDown = styled.div``;

const Img = styled.img`
  height: 80%;
`;

const Name = styled.div`
  font-family: "Darker Grotesque", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 800;
  margin-top: 1vh;
  margin-bottom: 1vh;
  color: rgb(197, 197, 197);
`;
