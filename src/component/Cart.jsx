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

  const itemTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const deliveryFee = 30;
  const gst = itemTotal * 0.05;
  const toPay = itemTotal + deliveryFee + gst;

  return (
    <div className="min-h-[80vh] max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length > 0 && (
        <div className="flex justify-end mb-6">
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
          >
            Clear Cart
          </button>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-10 space-y-4">
          <img
            src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg"
            alt="Empty Cart"
            className="w-60 h-48 object-contain"
          />
          <h2 className="text-xl font-semibold text-gray-700">
            Your cart is empty
          </h2>
          <p className="text-sm text-gray-500">
            You can go to home page to view more restaurants
          </p>
          <a
            href="/"
            className="mt-2 inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full shadow-md transition"
          >
            Browse Restaurants
          </a>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item, index) => (
              <ResturantCatagory
                key={index}
                name={item.name}
                cuisines={item.cuisines}
                cloudinaryImageId={item.cloudinaryImageId}
                lastMileTravelString={item.lastMileTravelString}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>

          {/* Bill Summary */}
          <div className="w-full lg:w-[320px] bg-white p-6 rounded-lg shadow-lg space-y-3 h-fit">
            <h2 className="text-lg font-semibold text-gray-800">
              Bill Details
            </h2>

            <div className="flex justify-between text-sm text-gray-700">
              <span>Item Total</span>
              <span>₹{itemTotal}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-700">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-700">
              <span>GST (5%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-gray-800 text-base">
              <span>To Pay</span>
              <span>₹{toPay.toFixed(2)}</span>
            </div>
            <button
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
              // onClick={() => alert("You have successfully ordered")}
              onClick={() => {
                alert("You have successfully ordered");
                dispatch(clearCart());
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
