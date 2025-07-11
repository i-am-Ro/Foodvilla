import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import useProtectedAddToCart from "../utils/useProtectedAddToCart";

const ResturantCatagory = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  // const handleAddItem = (item) => {
  //   dispatch(addItem(item));
  // };
  const handleAddItem = useProtectedAddToCart();
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="flex items-start bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-4 max-w-2xl mx-auto">
      <div className="w-32 h-24 flex-shrink-0">
        <img
          src={cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 ml-4 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{lastMileTravelString}</p>
        <h4 className="text-sm font-medium text-red-600">₹{price}</h4>

        {typeof quantity === "number" && (
          <p className="text-sm text-gray-500 font-medium">
            Quantity: {quantity}
          </p>
        )}

        <div className="flex gap-3 mt-2">
          <button
            onClick={() =>
              handleAddItem({
                name,
                cuisines,
                lastMileTravelString,
                cloudinaryImageId,
                price,
              })
            }
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
          >
            Add
          </button>
          <button
            onClick={() =>
              handleRemoveItem({
                name,
                cuisines,
                lastMileTravelString,
                cloudinaryImageId,
                price,
              })
            }
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResturantCatagory;
