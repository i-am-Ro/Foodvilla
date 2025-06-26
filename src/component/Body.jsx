import ResturantCard from "./ResturantCard";
import "./Body.css";
import { ResturantList } from "./Config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function filterData(searchInput, allResturants) {
  return allResturants.filter((resturant) =>
    resturant.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}

export default function Body() {
  const [allResturants, setAllResturants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredresturants, setFiteredResturants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://685265a50594059b23cd54b2.mockapi.io/FoodVilla"
    );
    const json = await data.json();
    // console.log(json);
    setAllResturants(json);
    setFiteredResturants(json);
  }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline! Please check your internet connection</h1>
    );

  return allResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center mt-6 mb-10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Enter food to search"
            className="px-4 py-2 border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-md shadow-sm text-sm w-64"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition duration-200"
            onClick={() => {
              const data = filterData(searchInput, allResturants);
              setFiteredResturants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="cards">
        {filteredresturants.length === 0 ? (
          <h2 className="not-found-text">No restaurants found 🍽️</h2>
        ) : (
          filteredresturants.map((resturant) => (
            <Link to={`/resturants/${resturant.id}`} key={resturant.id}>
              <ResturantCard {...resturant} key={resturant.id} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}
