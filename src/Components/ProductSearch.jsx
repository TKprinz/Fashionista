import React, { useState } from "react";
import { jsonArray } from "./Product";
import Card from "react-bootstrap/Card";

function ProductSearch() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (event) => {
    const searchString = event.target.value;
    setSearch(searchString);
    const filteredProducts = jsonArray.filter((product) =>
      product.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="grid-container">
      <div className="search-container">
        <input className="m-0" type="text" onChange={handleSearch} />
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
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductSearch;
