import Card from "./Card";
import "./Card.css";

function Hoodies() {
  const products = [
    {
      name: "Svart Hoodie",
      price: 50,
      image: "https://via.placeholder.com/150x150/000000/969696",
    },
    {
      name: "Grå Hoodie",
      price: 100,
      image: "https://via.placeholder.com/150x150/757575/969696",
    },
    {
      name: "Blå Hoodie",
      price: 100,
      image: "https://via.placeholder.com/150x150/001eff/969696",
    },
    {
      name: "Röd Hoodie",
      price: 100,
      image: "https://via.placeholder.com/150x150/ff0000/969696",
    },
    {
      name: "Gul Hoodie",
      price: 100,
      image: "https://via.placeholder.com/150x150/f2fa5c/969696",
    },
  ];
  return (
    <div className="container">
      <div className="card-list">
        {products.map((product, index) => (
          <Card
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
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
