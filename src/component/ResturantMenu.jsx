import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import { ResturantList } from "./Config";
import ResturantCatagory from "./ResturantCatagory";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const ResturantMenu = () => {
  const { id } = useParams();
  const resInfo = useResturantMenu(id);
  const [showItems, setShowItems] = useState(false);
  function handleClick() {
    setShowItems(!showItems);
  }

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md p-6 text-gray-800 mb-10">
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

      <div className="bg-gray-50 rounded-xl shadow-sm p-6">
        <div
          className="flex items-center justify-between cursor-pointer mb-4"
          onClick={handleClick}
        >
          <h2 className="text-2xl font-semibold text-gray-800 cursor-pointer">
            Categories{" "}
            <span className="text-red-500">({ResturantList.length})</span>
          </h2>
          <span className="text-gray-600 text-xl">
            <FaAngleDown />
          </span>
        </div>

        {showItems && (
          <div className="space-y-4">
            {ResturantList.map((resturant) => (
              <ResturantCatagory
                {...resturant?.data}
                key={resturant?.data?.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResturantMenu;
