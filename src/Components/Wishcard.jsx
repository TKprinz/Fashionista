import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function Wishcard({ wishlist, removeFromWishlist }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-32 mx-auto w-auto h-auto justify-center">
        {wishlist.map((item, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button onClick={() => removeFromWishlist(item)} variant="danger">
                ❌
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Wishcard;
