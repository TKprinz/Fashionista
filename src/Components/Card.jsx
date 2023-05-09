import React from 'react';
import './Card.css';

function Card({ name, price, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name}></img>
      </div>
      <div className="card-info">
        <p>{name}</p>
      </div>
      <div className="card-price">
        <p>Price: {price}$</p>
      </div>
    </div>
  );
}

export default Card;
