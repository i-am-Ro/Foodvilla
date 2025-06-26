import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
// import "./ResturantMenu.css";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  const { id } = useParams();

  const resInfo = useResturantMenu(id);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{resInfo.name}</h1>

      <img
        src={resInfo.cloudinaryImageId}
        alt={resInfo.name}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />

      <h3 className="text-lg text-gray-700 mb-2">
        {resInfo.cuisines.join(", ")}
      </h3>
      <h4 className="text-sm text-gray-600 mb-1">
        {resInfo.lastMileTravelString}
      </h4>
      <h4 className="text-sm font-medium text-red-600">${resInfo.price}</h4>
    </div>
  );
};

export default ResturantMenu;
