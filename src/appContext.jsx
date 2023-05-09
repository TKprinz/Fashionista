import { createContext, useState, useEffect } from "react";
import { jsonArray } from "./Components/Product";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [produceArray, setProduceArray] = useState(jsonArray);
  const [filteredResults, setFilteredResults] = useState(jsonArray);

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

  const CreateProduce = async () => {};

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
        filteredResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext };
