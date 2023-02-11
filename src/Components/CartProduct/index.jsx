import React from "react";
import "./style.css"
function CartProduct(props) {
  
    return (
        <>
            <div className="product-section ">
                <div className="cart-image">
                    <img className="cartImage" src={`images/${props.item.sku}_2.jpeg`} alt="img" />
                </div>
                <div>
                    <h1>{props.item.title}</h1>
                    <h2>Quantity : {props.item.quantity}</h2>
                    <div>
                        <button onClick={() => props.handleQuantityAdd(props.i)} className="quantity">+</button>
                        <button onClick={() => props.handleQunatityRemove(props.i)} className="quantity">-</button>
                    </div>
                </div>
                <div>
                    <h2>${props.item.price * props.item.quantity}</h2>

                </div>

            </div>
        </>
    )
}
export default CartProduct;