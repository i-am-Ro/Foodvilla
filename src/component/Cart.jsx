import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ResturantCatagory from "./ResturantCatagory";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="text-2xl font-bold mb-4">🛒 Cart</div>
      {cartItems.length === 1 && (
        <button onClick={handleClearCart}>Clear Cart</button>
      )}
      {cartItems.length === 0 && <h1>Your cart is empty</h1>}
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <ResturantCatagory
            key={index}
            name={item.name}
            cuisines={item.cuisines}
            lastMileTravelString={item.lastMileTravelString}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
