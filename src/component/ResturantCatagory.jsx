import React from "react";

const ResturantCatagory = ({ name, cuisines, lastMileTravelString }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</p>
      <p className="text-sm text-gray-500">{lastMileTravelString}</p>
    </div>
  );
};

export default ResturantCatagory;
