import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "./ResturantMenu.css";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://685265a50594059b23cd54b2.mockapi.io/FoodVilla"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo[id].name}</h1>
      <img src={resInfo[id].cloudinaryImageId} />
      <h3>{resInfo[id].cuisines.join(", ")}</h3>
      <h4>{resInfo[id].lastMileTravelString}</h4>
      <h4>${resInfo[id].price}</h4>
    </div>
  );
};

export default ResturantMenu;
