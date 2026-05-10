import React from "react";
import "./bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle)
    const {img, name, price, stock} = bottle;
    console.log(bottle);
  return (
    <div>
        <div className="card bottle">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock} remaining</p>
            <button onClick={()=> handleAddToCart(bottle)} className="buy-now">Buy Now</button>
        </div>
    </div>
  );
};

export default Bottle;
