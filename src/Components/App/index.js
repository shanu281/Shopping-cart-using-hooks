import { React, useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Cards from "../Cards";
import "./style.css";
import Data from "../Data/data";
import Cart from "../Cart";

const App = () => {
  const [products, setProducts] = useState(Data.products);
  const [selectedSize, setSelectedSize] = useState("");
  const [cartValue, setCartValue] = useState([]);
  const [price, setPrice] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [sorted, setSorted] = useState("");
  const [quantity, setQuantity] = useState();

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  const handleSize = (size) => {
    setSelectedSize(size);
  };
  const handleSorting = (event) => {
    const value = event.target.value;
    setSorted(value);
    console.log(sorted);
  };
  const handleAddToCart = (product) => {
    setCartValue(cartValue.concat(product));
  };

  const handleQuantityAdd = (i) => {
    const item = [...cartValue];
    item.splice(i, 1, { ...item[i], quantity: item[i].quantity + 1 });
    setCartValue(item);
  };

  const handleQunatityRemove = (i) => {
    const item = [...cartValue];
    if (item[i].quantity == 1) {
      item.splice(i, 1);
    }
 item.splice(i, 1, { ...item[i], quantity: item[i].quantity - 1 });
    setCartValue(item);
  };

  return (
    <div>
      <div className="header-section">
        <Header toggleCart={toggleCart} cartValue={cartValue} />
      </div>
      <div className="display-sec">
        <div className="aside-section">
          <Aside handleSize={handleSize} selectedSize={selectedSize} />
        </div>
        <div className="cards-sec">
          <Cards
            products={products}
            selectedSize={selectedSize}
            sorted={sorted}
            handleSorting={handleSorting}
            handleAddToCart={handleAddToCart}
          />
        </div>
        <div>
          <Cart
            openCart={openCart}
            cartValue={cartValue}
            quantity={quantity}
            handleQuantityAdd={handleQuantityAdd}
            handleQunatityRemove={handleQunatityRemove}
            toggleCart={toggleCart}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
