import { createContext, useState } from "react";
import { jsonArray } from "./Components/Product";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showComponent, setShowComponent] = useState(true); // För att dölja komponenter när searchbar är aktiv
  const [produceArray, setProduceArray] = useState(jsonArray);
  const [filteredResults, setFilteredResults] = useState(jsonArray);
  const [wishlist, setWishlist] = useState(
    []
    // produceArray.filter((item) => item.wish === true)
  );

  function addToWishlist(newItem) {
    if (!newItem.wish) {
      const itemExists = wishlist.some(
        (item) => item.productnumber === newItem.productnumber
      );
      if (!itemExists) {
        setWishlist((prevWishlist) => [...prevWishlist, newItem]);
      }
    }
  }

  const filterArray = async (input) => {
    let newArray = [...produceArray];
    let printOutArray = await newArray.filter((item) => {
      return item.tag.includes(input);
    });
    setFilteredResults(printOutArray);
  };

  const ResetArray = async () => {
    let newArray = [...produceArray];
    setFilteredResults(newArray);
  };

  const changeQuant = (prodNR, quant) => {
    let newArray = [...produceArray];
    let filteredArray = newArray.filter((item) => {
      return item.productnumber.includes(prodNR);
    });
    filteredArray[0].quantity += quant;
    setProduceArray(newArray);
  };

  const Tester = () => {
    console.log("produceArray");
  };

  return (
    <AppContext.Provider
      value={{
        produceArray,
        Tester,
        ResetArray,
        filterArray,
        changeQuant,
        filteredResults,
        wishlist,
        setWishlist,
        addToWishlist,
        showComponent,
        setShowComponent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext };
