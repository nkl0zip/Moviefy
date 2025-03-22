import React from "react";
import "./homepage.css";
import Squidgame from "./squidgame";
import Search from "./search";
import CharacterSection from "./charactersection";
import PromotionalPage from "./promotionalpage";
import Footer from "./footer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <NavBar />
      <div
        onClick={() => navigate("/squidgame")}
        style={{ cursor: "pointer", width: "100%" }}
      >
        <Squidgame />
      </div>
      <Search></Search>
      <CharacterSection></CharacterSection>
      <PromotionalPage></PromotionalPage>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
