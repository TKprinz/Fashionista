import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "../appContext";
import Button from "react-bootstrap/esm/Button";
import { FacebookShareButton, FacebookIcon } from "react-share";

function Produce(props) {
  const { wishlist, addToWishlist } = useContext(AppContext);

  const addItem = () => {
    props.onClick(props.props.productnumber, 1);
  };

  const removeItem = () => {
    if (props.props.quantity > 0) {
      props.onClick(props.props.productnumber, -1);
    }
  };

  return (
    <Card className="produce-card">
      <Card.Img
        className="produce-image mt-4"
        variant="top"
        src={props.props.image}
      />
      <Card.Body>
        <Card.Title className="produce-title">
          {props.props && props.props.name}
        </Card.Title>
        <Card.Text className="produce-price">
          {props.props && props.props.price} kr
        </Card.Text>
        <Card.Text className="produce-description">
          {props.props && props.props.description}
        </Card.Text>
        <Button className="produce-button" onClick={addItem}>
          Add to cart 🛒
        </Button>
        <Button className="produce-button" onClick={removeItem}>
          Remove from cart ❌
        </Button>
        <Button
          className="produce-button"
          onClick={() => addToWishlist(props.props)}
        >
          ❤
        </Button>
        <Card.Text className="produce-quantity">
          {props.props && props.props.quantity}
        </Card.Text>
        <FacebookShareButton url={props.props.image} quote={"examplequote"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </Card.Body>
    </Card>
  );
}

export default Produce;
