import "./style.css";
import Card from "../Card";
import React from "react";

function Cards(props) {
  return (
    <>
      <section className="main">
        <div>
          <h1 className="total-products">16  Product(s) found</h1>
        </div>
        <div className="card-container">
          {props.selectedSize === ""
            ? props.products.sort((a, b) => props.sorted === "lowest"? a.price - b.price :'highest' ? b.price - a.price : +1 ).map((product, i) => {
                return (
                  <Card
                    product={product}
                    key={i}
                    products={props.products}
                    i={i}
                    handleAddToCart = {props.handleAddToCart}

                  />
                );
              })
            : props.products.sort((a, b) => props.sorted === "lowest"? a.price - b.price :'highest' ? b.price - a.price : +1 )
                .filter((product, i) =>
                  product.availableSizes.includes(props.selectedSize)
                )
                .map((product, i) => (
                  <Card
                    product={product}
                    key={i}
                    products={props.products}
                    i={i}
                    handleAddToCart = {props.handleAddToCart}
                  />
                ))}
        </div>
      </section>
    </>
  );
}

export default Cards;
