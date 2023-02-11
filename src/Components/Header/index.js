import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = (props) => {
  return (
    <div className="header flex">
      <div>
        <h6>Shopping Cart</h6>
      </div>
      <div>
        <div className=" flex">
          <img
          onClick={props.toggleCart}
            className="header-cart "
            src={`images/download.png`}
            alt="cart image"
          />
          <span className="cart-quantity position-2">
            <h2>
              {props.cartValue.reduce(
                (acc, { quantity = 0 }) => (acc += quantity),
                0
              )}
            </h2>
          </span>
        </div>
        {/* <h1 onClick={props.toggleCart}>
          <FaShoppingCart />
        </h1>
        <span className="cart-quantity position-3">
          <h2>
            {props.cartValue.reduce(
              (acc, { quantity = 0 }) => (acc += quantity),
              0
            )}
          </h2>
        </span> */}
      </div>
    </div>
  );
};

export default Header;
