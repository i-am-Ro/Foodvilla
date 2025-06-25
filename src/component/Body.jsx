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
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter food to search"
          className="search-input"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="Search-btn"
          onClick={() => {
            const data = filterData(searchInput, allResturants);
            setFiteredResturants(data);
          }}
        >
          Search
        </button>
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
