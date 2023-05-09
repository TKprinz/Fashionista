import React from 'react';
//import Imageslider from './imageslider';
import { useContext } from 'react';
import { AppContext } from '../appContext';
import Produce from './produce';

// const slides = [
//   { url: 'https://via.placeholder.com/150x150/757575/969696', title: 'grey' },
//   { url: 'https://via.placeholder.com/150x150/ff0000/969696', title: 'red' },
//   { url: 'https://via.placeholder.com/150x150/000000/969696', title: 'black' },
//   { url: 'https://via.placeholder.com/150x150/001eff/969696', title: 'blue' },
// ];

const Results = () => {
  const { produceArray, filteredResults } = useContext(AppContext);

  //   const { Tester } = useContext(AppContext);
  function tester() {
    console.log(produceArray);
  }

  return (
    <div className="flex mx-auto justify-center mb-10">
      <div className="flex flex-wrap gap-2 mt-16 mx-auto w-auto h-auto justify-center">
        {/* <Imageslider slides={slides}></Imageslider>*/}
        {filteredResults.map((product, index) => {
          return <Produce props={product} key={index}></Produce>;
        })}
      </div>
      {/* <button onClick={tester}>test button</button> */}
    </div>
  );
};

export default Results;
