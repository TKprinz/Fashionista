import React from "react";

function Card({ name, price }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://via.placeholder.com/150" alt={name}></img>
      </div>
      <div className="card-info">
        <p>{name}</p>
        {/* <p>{props.beskrivning}</p> */}
      </div>
      <div className="card-price">
        <p>Price: {price}$</p>
      </div>
    </div>
  );
}

export default Card;
