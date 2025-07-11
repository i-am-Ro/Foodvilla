import { useEffect, useState } from "react";
import { API_URL } from "../component/Config";

const useResturantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    const restaurant = json.find((res) => res.id === id);
    setResInfo(restaurant);
  };
  return resInfo;
};

export default useResturantMenu;
