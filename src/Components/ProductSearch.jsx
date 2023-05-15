import React, { useState, useEffect, useContext } from "react";
import { jsonArray } from "./Product";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AppContext } from "../appContext";

function ProductSearch() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { changeQuant } = useContext(AppContext);
  const { setShowComponent } = useContext(AppContext);

  useEffect(() => {
    if (search.length > 0) {
      setShowComponent(false);
    } else {
      setShowComponent(true);
    }
  }, [search]);

  const handleSearch = (event) => {
    const searchString = event.target.value;
    setSearch(searchString);
    const filteredProducts = jsonArray.filter((product) =>
      product.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="centered-container">
      <div className="search-container">
        <input className="m-0" type="text" onChange={handleSearch} />
        <Button variant="primary" className="search-button">
          Search
        </Button>
      </div>
      <div className="grid">
        {search &&
          filteredProducts.map((product) => (
            <div className="grid-item" key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>

                  <Button onClick={() => changeQuant(product.productnumber, 1)}>
                    Add
                  </Button>
                  <Card.Text>{product.quantity}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductSearch;
