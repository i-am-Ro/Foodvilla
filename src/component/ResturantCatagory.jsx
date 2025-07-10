import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResturantCatagory = ({ name, cuisines, lastMileTravelString }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</p>
      <p className="text-sm text-gray-500">{lastMileTravelString}</p>
      <button
        onClick={() => handleAddItem({ name, cuisines, lastMileTravelString })}
      >
        +
      </button>
    </div>
  );
};

export default ResturantCatagory;
