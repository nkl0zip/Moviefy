import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = ({ Icon, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MainContainer>
      <Nav>
        <Image src={Icon} alt="Home" onClick={() => onNavigate("home")} />
        <HamburgerMenu onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </HamburgerMenu>
        <NavLis menuOpen={menuOpen}>
          <NavLink to="/">
            <Button onClick={() => onNavigate("home")}>HOME</Button>
          </NavLink>
          <NavLink to="/about">
            <Button onClick={() => onNavigate("about")}>ABOUT</Button>
          </NavLink>
          <NavLink to="/casts">
            <Button onClick={() => onNavigate("casts")}>CASTS</Button>
          </NavLink>
          <NavLink to="/similar">
            <Button onClick={() => onNavigate("similar")}>SIMILAR</Button>
          </NavLink>
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
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  padding: 10px;

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLis = styled.div`
  display: flex;
  flex-flow: row;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 10vh;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    padding: 20px;
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
