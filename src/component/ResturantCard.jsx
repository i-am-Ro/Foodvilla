import "./ResturantCard.css";
import { IMG_CDN_URL } from "./Config";

export default function ResturantCard({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  price,
}) {
  return (
    <div className="card">
      <img src={cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h4>${price}</h4>
    </div>
  );
}
