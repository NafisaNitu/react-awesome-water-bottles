import React, { use, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { useState } from "react";
import { addToStoredCart, getStoreCart, removeFromCart } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);


    // useEffect
    useEffect(() => {
      const storedCartIds = getStoreCart();
      // console.log(storedCartIds, bottles);

      const storedCart = [];

      for(const id of storedCartIds){
        // console.log(id);
        const cartBottle = bottles.find(bottle => bottle.id === id);
        if(cartBottle){
          storedCart.push(cartBottle);
        }
      }

      console.log('stored cart', storedCart);
      setCart(storedCart);

    }, [bottles])



    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        // console.log("Cart will be add here.", bottle)

        //save the bottle id in the storage
        addToStoredCart(bottle.id)
    }

    const handleRemoveFromCart = id => {
      console.log("remove item from cart", id);

      const remainingCart = cart.filter(bottle => bottle.id !== id);
      setCart(remainingCart);
      removeFromCart(id);
    }

    // console.log(bottles)
  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <h5>Add To Cart: {cart.length}</h5>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottles-container">
        {
            bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
        }
      </div>
    </div>
  );
};

export default Bottles;
