import { Card } from "antd";
import React from "react";

const ProductCard = (props: any) => {
  return (
    <Card
      className="product-card"
      cover={
        <img
          alt={props.car.Name}
          src={`../images/cars/file (${props.index}).jpg`}
          height={180}
          width={320}
        />
      }
    >
      <h3>{String(props.car.Name).toUpperCase()}</h3>
      <h2>${props.car.Price}</h2>
      <p>{props.car.Year} ({props.car.Origin})</p>
    </Card>
  );
}

export default ProductCard;