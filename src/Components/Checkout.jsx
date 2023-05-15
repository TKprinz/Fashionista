import { useContext } from "react";
import { AppContext } from "../appContext";
import Produce from "./produce";

function Checkout() {
  const { showComponent } = useContext(AppContext);
  let context = useContext(AppContext);
  const selectedProduce = function (productNr, quant) {
    context.changeQuant(productNr, quant);
  };

  return (
    <div>
      {showComponent && (
        <>
          <div className="checkout-container">
            {" "}
            <h1>Checkout</h1>
            <div className="produce-grid">
              {" "}
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
                    />
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
