import React from "react";
import "./squidgame.css";
import char1 from "../images/template1/char1.png";
import title1 from "../images/template1/title1.png";
import backgroundImage from "../images/template1/background1.png";

const Squidgame = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    paddingTop: "170px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  return (
    <div style={backgroundStyle} className="home-page-body">
      <div className="text-message-first">EXPLORE A WORLD WHERE GAMES</div>
      <div className="character-title">
        <img className="character" src={char1} alt="" />
        <img className="title" src={title1}></img>
      </div>
      <div className="text-message-second">
        AREN’T JUST FOR<br></br> FUN... THEY ARE FOR <br></br>
        <span>SURVIVAL!</span>
      </div>
    </div>
  );
};

export default Squidgame;
