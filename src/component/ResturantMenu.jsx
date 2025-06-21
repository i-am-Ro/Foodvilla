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

    const restaurant = json.find((res) => res.id === id);
    setResInfo(restaurant);
  };

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
