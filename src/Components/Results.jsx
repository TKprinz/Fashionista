import React from "react";
import Imageslider from "./imageslider";

import { useContext } from "react";
import AppContext from "../appContext";

const slides = [
  { url: "https://via.placeholder.com/150x150/757575/969696", title: "grey" },
  { url: "https://via.placeholder.com/150x150/ff0000/969696", title: "red" },
  { url: "https://via.placeholder.com/150x150/000000/969696", title: "black" },
  { url: "https://via.placeholder.com/150x150/001eff/969696", title: "blue" },
];

const containerStyles = {
  width: "500px",
  height: "100px",
  margin: "0 auto",
};
function Results() {
  let context = useContext(AppContext);

  //   const { Tester } = useContext(AppContext);
  function tester() {
    console.log(context.produceArray);
  }

  // const { phones, setPhones } = useContext(SearchContext);
  //   const { produceArr } = useContext(AppContext);
  //   let testArray = produceArr;

  return (
    <div>
      <div style={containerStyles}>
        <Imageslider slides={slides}></Imageslider>
        {/* {testArray.map((products, index) => {
          return <Produce props={products} key={index}></Produce>;
        })} */}
        <button onClick={tester}>test button</button>
      </div>
    </div>
  );
}

export default Results;
