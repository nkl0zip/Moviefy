import React from "react";
import "./promotionalpage.css";
import appletv from "../images/icons/appletv.png";
import disney from "../images/icons/disney.png";
import netflix from "../images/icons/netflix.png";
import prime from "../images/icons/prime.png";

const PromotionalPage = () => {
  return (
    <div className="promotionalpage-body">
      <div className="promotional-message">
        <h1>1000+ Movies Available</h1>
        <p>We provide you a stop solution for all your binge watching time.</p>
      </div>
      <div className="marquee">
        <div className="marqueegroup">
          <div className="imagegroup">
            <img src={appletv} alt="" />
            <img src={netflix} alt="" />
            <img src={prime} alt="" />
            <img src={disney} alt="" />
            <img src={appletv} alt="" />
            <img src={netflix} alt="" />
            <img src={prime} alt="" />
            <img src={disney} alt="" />
            <img src={appletv} alt="" />
            <img src={netflix} alt="" />
            <img src={prime} alt="" />
            <img src={disney} alt="" />
          </div>
        </div>
        <div className="marqueegroup">
          <div className="imagegroup">
            <img src={appletv} alt="" />
            <img src={netflix} alt="" />
            <img src={prime} alt="" />
            <img src={disney} alt="" />
            <img src={appletv} alt="" />
            <img src={netflix} alt="" />
            <img src={prime} alt="" />
            <img src={disney} alt="" />
            <img src={appletv} alt="" />
            <img src={netflix} alt="" />
            <img src={prime} alt="" />
            <img src={disney} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalPage;
