import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

function Produce(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.props.image} />
      <Card.Body>
        <Card.Title>{props.props && props.props.name}</Card.Title>
        <Card.Text>{props.props && props.props.price} kr</Card.Text>
        <Card.Text>{props.props && props.props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Produce;
