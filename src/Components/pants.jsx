import Card from './Card';
function Pants() {
  const products = [
    {
      name: 'Röd Byxa',
      price: 240,
      description: '',
      tag: '',
      image: 'https://via.placeholder.com/150x150/ff0000/969696',
    },
    {
      name: 'Grå Byxa',
      price: 200,
      image: 'https://via.placeholder.com/150x150/757575/969696',
    },
    {
      name: 'Svart Byxa',
      price: 240,
      image: 'https://via.placeholder.com/150x150/000000/969696',
    },
    {
      name: 'Blå Byxa',
      price: 240,
      image: 'https://via.placeholder.com/150x150/001eff/969696',
    },
    {
      name: 'Gul Byxa',
      price: 240,
      image: 'https://via.placeholder.com/150x150/f2fa5c/969696',
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

export default Pants;
