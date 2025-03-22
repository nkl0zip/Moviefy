import React from "react";
import "./charactersection.css";
import char1 from "../images/template1/char1.png";
import char2 from "../images/template1/char2.png";
import char3 from "../images/template1/char3.png";
import char4 from "../images/template2/char1.png";
import char5 from "../images/template2/char2.png";
import { useNavigate } from "react-router-dom";

const CharacterSection = () => {
  const navigate = useNavigate();

  return (
    <div className="character-section-body">
      <img
        src={char3}
        alt=""
        className="truedetective-image"
        onClick={() => navigate("/truedetective")}
      />

      <img
        src={char4}
        alt=""
        className="fury-image"
        onClick={() => navigate("/truedetective")}
      />
      <img
        src={char1}
        alt=""
        className="squidgame-image"
        onClick={() => navigate("/squidgame")}
      />
      <img
        src={char5}
        alt=""
        className="bb-image"
        onClick={() => navigate("/truedetective")}
      />
      <img
        src={char2}
        alt=""
        className="deadpool-image"
        onClick={() => navigate("/deadpool")}
      />
    </div>
  );
};

export default CharacterSection;
