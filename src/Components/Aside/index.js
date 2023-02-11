import React from "react";
import Sort from "../Sort";
import "./style.css";

const Aside = (props) => {
  let allSizes = ["S", "XS", "M", "X", "L", "XL", "XXL"];

  return (
    <div className="aside-container">
      <div>
        <h4>Sizes: </h4>
        <aside>
          {allSizes.map((size, i) => {
            return <span onClick={() => props.handleSize(size)} key={size} className={props.selectedSize == size ? "active size" : "size"}>{size}</span>;
          })}
        </aside>
        <Sort />
      </div>
    </div>
  );
};

export default Aside;
