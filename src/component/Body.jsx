import ResturantCard from "./ResturantCard";
import "./Body.css";
import { ResturantList } from "./Config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaFilter } from "react-icons/fa";
import { API_URL } from "./Config";

function filterData(searchInput, allResturants) {
  return allResturants.filter((resturant) =>
    resturant.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}
const sortByPriceLowToHigh = (data) =>
  [...data].sort((a, b) => a.price - b.price);

const sortByPriceHighToLow = (data) =>
  [...data].sort((a, b) => b.price - a.price);

export default function Body() {
  const [allResturants, setAllResturants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredresturants, setFiteredResturants] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(API_URL);
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

          <div className="relative inline-block text-left">
            <button
              className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow-sm transition duration-200"
              onClick={() => setShowFilter(!showFilter)}
            >
              <FaFilter />
              Filter
            </button>

            {showFilter && (
              <div className="absolute right-0 top-full mt-2 z-10 w-60 bg-white border border-gray-200 rounded-lg shadow-md p-4 space-y-3 text-sm">
                <form
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "lowToHigh") {
                      setFiteredResturants(
                        sortByPriceLowToHigh(filteredresturants)
                      );
                    } else if (value === "highToLow") {
                      setFiteredResturants(
                        sortByPriceHighToLow(filteredresturants)
                      );
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="lowToHigh"
                      name="sort"
                      value="lowToHigh"
                      className="accent-red-500"
                    />
                    <label htmlFor="lowToHigh" className="font-bold">
                      Price: Low to High
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="highToLow"
                      name="sort"
                      value="highToLow"
                      className="accent-red-500"
                    />
                    <label htmlFor="highToLow" className="font-bold">
                      Price: High to Low
                    </label>
                  </div>
                </form>

                <button
                  onClick={() => {
                    setSearchInput("");
                    setFiteredResturants(allResturants);
                    setShowFilter(false);
                  }}
                  className="w-full text-left px-2 py-1 hover:bg-red-100 text-red-500 rounded font-bold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
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
