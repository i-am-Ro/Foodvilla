// import "./ResturantCard.css";

export default function ResturantCard({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  price,
}) {
  return (
    <div className="card p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 w-72">
      <img
        src={cloudinaryImageId}
        alt={name}
        className="h-44 w-full object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
      <h3 className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</h3>
      <h4 className="text-sm text-gray-500">{lastMileTravelString}</h4>
      <h4 className="text-sm font-medium text-red-600 mt-1">₹{price}</h4>
    </div>
  );
}
