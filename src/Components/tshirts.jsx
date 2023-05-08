import Card from "./Card";
function Tshirts() {
  const products = [
    {
      name: "Svart T-shirt",
      price: 120,
      image: "https://via.placeholder.com/150x150/000000/969696",
    },
    {
      name: "Grå T-shirt",
      price: 125,
      image: "https://via.placeholder.com/150x150/757575/969696",
    },
    {
      name: "Röd T-shirt",
      price: 155,
      image: "https://via.placeholder.com/150x150/ff0000/969696",
    },
    {
      name: "Gul T-shirt",
      price: 160,
      image: "https://via.placeholder.com/150x150/f2fa5c/969696",
    },
    {
      name: "Blå T-shirt",
      price: 135,
      image: "https://via.placeholder.com/150x150/001eff/969696",
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

export default Tshirts;