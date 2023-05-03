import React from "react";
import Card from "./Card";
import data from "./hoodies.json";

function Hoodies() {
  const products = [
    { name: "Svart Hoodie", price: 50 },
    { name: "Grå Hoodie", price: 100 },
  ];
  return (
    <div className="card-list">
      {products.map((product) => (
        <Card name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default Hoodies;

/*

          // namn={hoodie.namn}
          // beskrivning={hoodie.beskrivning}
          // pris={hoodie.pris}



// I denna filen
{data.map((item, index) => (
    <card key={index} item={item} />
  ))}


// I card.jsx
const card = (props) => {...
    return (
    <H1>
        {props.item.name}
    </H1>
    )
...}
*/
