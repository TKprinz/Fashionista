import React from "react";
import ClickableImages from "./ClickableImages";
import Nyheter from "./Nyheter";
import { AppContext } from "../appContext";
import { useContext } from "react";

function Hero() {
  const { showComponent } = useContext(AppContext);

  return (
    <div>
      {showComponent && (
        <>
          <div className="hero mb-20">
            <img
              className="object-cover"
              src="https://en.louisvuitton.com/images/is/image/PUSH3_IconicHandbags_NewWave_DI3.jpg?wid=2048"
              alt="heroImg"
            />
          </div>
          <Nyheter />
          <ClickableImages />
        </>
      )}
    </div>
  );
}

export default Hero;
