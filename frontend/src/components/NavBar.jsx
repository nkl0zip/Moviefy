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

        {/* Hamburger Icon */}
        <HamburgerMenu onClick={toggleMenu}>
          <div className={menuOpen ? "open" : ""} />
          <div className={menuOpen ? "open" : ""} />
          <div className={menuOpen ? "open" : ""} />
        </HamburgerMenu>

        {/* Navigation Links */}
        <NavLis menuOpen={menuOpen}>
          {/* Close Button (Visible Only on Small Screens & When Menu is Open) */}
          {menuOpen && (
            <CloseButton onClick={() => setMenuOpen(false)}>✖</CloseButton>
          )}

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <Button onClick={() => onNavigate("home")}>HOME</Button>
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)}>
            <Button onClick={() => onNavigate("about")}>ABOUT</Button>
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)}>
            <Button onClick={() => onNavigate("casts")}>CASTS</Button>
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)}>
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
  background: rgba(0, 0, 0, 0);
  color: white;
  padding: 10px 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Hamburger Menu Styles */
const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  padding: 10px;

  div {
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  .open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .open:nth-child(2) {
    opacity: 0;
  }
  .open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

/* Navigation Links */
const NavLis = styled.div`
  display: flex;
  flex-flow: row;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 10vh;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({ menuOpen }) => (menuOpen ? "100vh" : "0")};
    background: rgba(0, 0, 0, 0.74);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    overflow: hidden;
    transition: height 0.4s ease-in-out;
  }
`;

/* Close Button - Visible Only on Small Screens & When Menu is Open */
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
  display: none; /* Hidden by default */

  &:hover {
    color: red;
  }

  @media (max-width: 768px) {
    display: block; /* Show only on small screens */
  }
`;

const Button = styled.button`
  color: rgb(209, 209, 209);
  flex-shrink: 0;
  cursor: pointer;
  font-family: Lora;
  font-size: 18px;
  font-weight: 600;
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
  font-size: 18px;
  display: inline-block;
  background-color: transparent;
  border: none;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(129, 129, 129);
  }
`;

const Image = styled.img`
  height: 30px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
