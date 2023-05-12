import { useContext } from "react";
import { AppContext } from "../appContext";
import Produce from "./produce";

function Checkout() {
  let context = useContext(AppContext);
  const selectedProduce = function (productNr, quant) {
    context.changeQuant(productNr, quant);
  };

  return (
    <>
      <div>
        <h1> Checkout </h1>
        {context.produceArray
          .filter((item) => {
            if (item.quantity > 0) {
              return item;
            }
          })
          .map((product, index) => {
            return (
              <Produce
                props={product}
                key={index}
                onClick={(productNr, quant) => {
                  selectedProduce(productNr, quant);
                }}
              ></Produce>
            );
          })}
      </div>
    </>
  );
}
export default Checkout;
