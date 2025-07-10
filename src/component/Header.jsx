import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

export default function Header() {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <header className="w-full bg-white border-b border-red-300 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://files.yappe.in/place/full/food-villa-family-restaurant-hotel-4642683.webp"
            alt="logo"
            className="h-10 w-20 rounded-md object-cover"
          />
          <span className="text-2xl font-semibold tracking-tight text-gray-800">
            Food Villa
          </span>
        </div>

        <nav>
          <ul className="flex items-center space-x-9 text-gray-700 text-base font-medium">
            <li className="flex items-center gap-1">
              <span
                className={`h-2 w-2 rounded-full ${
                  onlineStatus ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
              <span>{onlineStatus ? "Online" : "Offline"}</span>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                  Cart({cartItems.length}items)
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
