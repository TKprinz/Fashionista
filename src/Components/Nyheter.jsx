import { useContext, useState } from "react";
import { AppContext } from "../appContext";
import Imageslider from "./imageslider";

const containerStyles = {
  width: "500px",
  height: "100px",
  margin: "0 auto",
};
function Nyheter() {
  const { showComponent } = useContext(AppContext);
  const { produceArray } = useContext(AppContext);
  const [newProducts, setNewProducts] = useState(
    produceArray.filter((product) => product.new === true)
  );

  return (
    <>
      {showComponent && (
        <div style={containerStyles}>
          <Imageslider news={newProducts} />
        </div>
      )}
    </>
  );
}

export default Nyheter;
