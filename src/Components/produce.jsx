// import { useContext, useState } from 'react'; // Not currently used
import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "../appContext";

function Produce(props) {
  const addItem = () => {
    props.onClick(props.props.productnumber, 1);
  };

  const removeItem = () => {
    props.onClick(props.props.productnumber, -1);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.props.image} />
      <Card.Body>
        <Card.Title>{props.props && props.props.name}</Card.Title>
        <Card.Text>{props.props && props.props.price} kr</Card.Text>
        <Card.Text>{props.props && props.props.description}</Card.Text>
        <button onClick={addItem}>Add to cart</button>
        <br />
        <button onClick={removeItem}>Remove from cart</button>
        <br />
        <Card.Text>{props.props && props.props.quantity}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Produce;
