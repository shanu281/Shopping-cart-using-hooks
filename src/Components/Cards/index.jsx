import "./style.css";
import Card from "../Card";
import React from "react";
import Data from "../Data/data";


function Cards () {
    const products = Data.products;
    console.log(products)
    return (
      <>
        <section className="main">
          <div>
            <h1 className="total-products">16 Product(s) found</h1>
          </div>
          <div className="card-container">
            {
              products .map((product, i) => {
                  return(

                      <Card
                      product={product}
                      key={i}
                      products={products}
                      i={i}
                      
                      />
                      )
              }
                  )
              }

          </div>
        </section>
      </>
    );
  }

export default Cards;
