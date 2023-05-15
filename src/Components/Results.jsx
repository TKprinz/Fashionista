import React from "react";
//import Imageslider from './imageslider';
import { useContext } from "react";
import { AppContext } from "../appContext";
import Produce from "./produce";

const Results = () => {
  const { filteredResults, showComponent } = useContext(AppContext);
  const context = useContext(AppContext);

  //   const { Tester } = useContext(AppContext);
  function selectedProduce(productNR, quant) {
    context.changeQuant(productNR, quant);
  }

  return (
    <div>
      {showComponent && (
        <>
          <div className="flex mx-auto justify-center mb-10">
            <div className="flex flex-wrap gap-2 mt-32 mx-auto w-auto h-auto justify-center">
              {filteredResults.map((product, index) => {
                return (
                  <Produce
                    props={product}
                    key={index}
                    onClick={(productNR, quant) => {
                      selectedProduce(productNR, quant);
                    }}
                  ></Produce>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
