import { createContext, useState, useEffect } from 'react';
import { jsonArray } from './Components/Product';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [produceArray, setProduceArray] = useState(jsonArray);
  const [filteredResults, setFilteredResults] = useState(jsonArray);

  useEffect(() => {
    console.log(produceArray);
  });

  const filterArray = async (input) => {
    let newArray = [...produceArray];
    let printOutArray = await newArray.filter((item) => {
      return item.tag.includes(input);
    });
    setFilteredResults(printOutArray);
  };

  const Tester = () => {
    console.log('produceArray');
  };

  return (
    <AppContext.Provider
      value={{
        produceArray,
        Tester,
        filterArray,
        filteredResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext };
