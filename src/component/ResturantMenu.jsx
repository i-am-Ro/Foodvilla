import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "./ResturantMenu.css";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  const { id } = useParams();

  const resInfo = useResturantMenu(id);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <img src={resInfo.cloudinaryImageId} alt={resInfo.name} />
      <h3>{resInfo.cuisines.join(", ")}</h3>
      <h4>{resInfo.lastMileTravelString}</h4>
      <h4>${resInfo.price}</h4>
    </div>
  );
};

export default ResturantMenu;
