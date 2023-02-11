import React from "react";
import "./style.css"
 import CartProduct from "../CartProduct";

function Cart(props) {
    return (
        <>
            {
                !props.openCart ?
                    <div className="cart-expand">
                        <div className="cart-header flex">
                            <img className="cart-img-expand " src={`images/download.png`} alt="cart image" />
                            <span className="cart-quantity position-2"><h2>{props.cartValue.reduce((acc, {quantity = 0}) => (acc += quantity), 0)}</h2></span>

                            <h5>Cart</h5>
                        </div>
                        <button className="cross-btn" onClick={props.toggleCart}>X</button>
                        {
                            props.cartValue.map((item, i) =>
                                <CartProduct item={item} key={i} i={i} cartValue={props.cartValue} handlePrice={props.handlePrice} quantity={props.quantity} handleQuantityAdd={props.handleQuantityAdd} handleQunatityRemove={props.handleQunatityRemove} />
                            )
                        }

                        <div className="checkout-section">
                            <div className="subtotal flex">
                                <h2>Total quantity : {props.cartValue.reduce((acc, {quantity = 0}) => (acc += quantity), 0)}</h2>
                                <h2>SUBTOTAL :{props.cartValue.reduce((acc, {quantity=0, price=0}) => (acc += quantity*price), 0)} </h2>
                            </div>
                            <button className="checkout">CHECKOUT</button>
                        </div>
                    </div> :""
            }
           
        </>
    )
}
export default Cart;