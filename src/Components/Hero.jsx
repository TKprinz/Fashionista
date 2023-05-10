import React from "react";

import ClickableImages from "./ClickableImages";
import Nyheter from "./Nyheter";
function Hero() {
  return (
    <div>
      <div className="hero mb-20">
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
