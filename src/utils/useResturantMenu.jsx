import { useEffect, useState } from "react";

const useResturantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
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
  return resInfo;
};

export default useResturantMenu;
