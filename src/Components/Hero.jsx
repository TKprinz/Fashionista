import React from "react";
import Imageslider from "./imageslider";
import Produce from "./produce";
import jsonArray from "./Product";
import ClickableImages from "./ClickableImages";
import Nyheter from "./Nyheter";
function Hero() {
  return (
    <div>
      <div className="hero">
        <img
          className="object-cover"
          src="https://en.louisvuitton.com/images/is/image/PUSH3_IconicHandbags_NewWave_DI3.jpg?wid=2048"
          alt="heroImg"
        />
      </div>
      <Nyheter />
      <ClickableImages />
    </div>
  );
}

export default Hero;
