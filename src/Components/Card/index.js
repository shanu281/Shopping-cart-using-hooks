import React from "react";

import "./style.css";

const Card = (props) => {
   
  return (
    <div className="cards">
      <span>
        <p className="shipping">Free Shipping</p>
      </span>
      <div className="card-image">
        <img src={`images/${props.product.sku}_1.jpeg`} alt="img" />
      </div>
      <div className="card-details">
        <h2 className="title">{props.product.title}</h2>
        <div className="flex price ">
          <div>
            <h3>{props.product.currencyFormat}</h3>
          </div>
          <div>
            <h1>{props.product.price}</h1>
          </div>
        </div>

        <button className="add">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
