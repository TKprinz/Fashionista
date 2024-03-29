// import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Imageslider({ news }) {
  console.log(news);
  return (
    <Carousel className="mt-5" style={{ backgroundColor: "#ccc", zIndex: -1 }}>
      {news.map((item) => (
        <Carousel.Item key={item.name}>
          <div className="newsSite">
            <img className="d-block w-100" src={item.image} alt={item.title} />
          </div>
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default Imageslider;
