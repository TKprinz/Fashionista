import { createContext, useState } from "react";
import { jsonArray } from "./Components/Product";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [produceArray, setProduceArray] = useState(jsonArray);

  const filteredArray = (input) => {
    let newArray = [...produceArray];
    let printOutArray = newArray.filter((item) => {
      return item.tag.includes(input);
    });
    setProduceArray(printOutArray);
  };
  const Tester = () => {
    console.log("produceArray");
  };

  return (
    <AppContext.Provider
      value={{
        produceArray,
        filteredArray,
        Tester,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;
