import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { auth } from "../component/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const getUserName = () => {
    if (!user) return null;
    if (user.displayName) return user.displayName;
    if (user.email && typeof user.email === "string") {
      return user.email.split("@")[0];
    }
    return "User";
  };

  return (
    <header className="w-full bg-white border-b border-red-300">
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
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </li>

            <li>
              {!user ? (
                <Link
                  to="/login"
                  className="hover:text-blue-600 transition-colors"
                >
                  Login
                </Link>
              ) : (
                <div className="flex items-center space-x-4">
                  <span className="flex items-center gap-2 text-gray-800 font-semibold">
                    <CgProfile className="text-xl" />
                    {getUserName()}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>

            <li>
              <Link to="/cart">
                <span className="relative cursor-pointer text-gray-800 hover:text-blue-600 transition-colors">
                  <FaCartPlus className="text-2xl" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                    {cartItems.length}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
