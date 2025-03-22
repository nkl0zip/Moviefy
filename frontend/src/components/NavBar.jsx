import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = ({ Icon, onNavigate }) => {
  return (
    <MainContainer>
      <Nav>
        <Image src={Icon} alt="Home" onClick={() => onNavigate("home")}></Image>

        <NavLis>
          <NavLink to="/">
            <Button onClick={() => onNavigate("home")}>HOME</Button>
          </NavLink>
          <Button onClick={() => onNavigate("about")}>ABOUT</Button>
          <Button onClick={() => onNavigate("casts")}>CASTS</Button>
          <Button onClick={() => onNavigate("similar")}>SIMILAR</Button>
        </NavLis>
      </Nav>
    </MainContainer>
  );
};

export default NavBar;

const MainContainer = styled.div`
  margin: 0 auto;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  color: white;
  padding: 10px 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLis = styled.div`
  display: flex;
  flex-flow: row;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 10vh;

  @media (max-width: 768px) {
    gap: 3vh;
  }
`;

const Button = styled.button`
  color: rgb(209, 209, 209);
  flex-shrink: 0;
  cursor: pointer;
  font-family: Lora;
  font-size: 15px;
  font-weight: 600;
  line-height: normal;
  display: inline-block;
  background-color: transparent;
  border: none;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(104, 103, 103);
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  flex-shrink: 0;
  cursor: pointer;
  font-family: Lora;
  font-size: 15px;
  line-height: normal;
  display: inline-block;
  background-color: transparent;
  border: none;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(129, 129, 129);
  }
`;

const Image = styled.img`
  height: 25px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
