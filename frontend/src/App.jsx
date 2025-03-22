import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieLeft from "./components/template1/MovieLeft";

import title1 from "./images/template1/title1.png";
import char1 from "./images/template1/char1.png";
import netflix from "./images/icons/netflix.png";
import icon1 from "./images/template1/icon1.png";
import background1 from "./images/template1/background1.png";

import title2 from "./images/template1/title2.png";
import char2 from "./images/template1/char2.png";
import appletv from "./images/icons/appletv.png";
import icon2 from "./images/template1/icon2.png";
import background2 from "./images/template1/background2.png";

import title3 from "./images/template1/title3.png";
import char3 from "./images/template1/char3.png";
import prime from "./images/icons/prime.png";
import icon3 from "./images/template1/icon3.png";
import background3 from "./images/template1/background3.png";
import Homepage from "./HomePage/homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/squidgame"
          element={
            <MovieLeft
              icon={icon1}
              title={title1}
              ott={netflix}
              char={char1}
              description={
                "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes."
              }
              background={background1}
            />
          }
        />
        <Route
          path="/deadpool"
          element={
            <MovieLeft
              icon={icon2}
              title={title2}
              ott={appletv}
              char={char2}
              description={
                "A listless Wade Wilson toils away in civilian life. But when his homeworld is threatened, he reluctantly suits up as he tries to convince Wolverine."
              }
              background={background2}
            />
          }
        />
        <Route
          path="/truedetective"
          element={
            <MovieLeft
              icon={icon3}
              title={title3}
              ott={prime}
              char={char3}
              description={
                "A new lead guides Rust and Marty to a secluded Louisiana address, where they finally meet the man who has haunted them for almost two decades."
              }
              background={background3}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
