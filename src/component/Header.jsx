import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export default function Header() {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <ul className="nav-items">
        <li>OnlineStatus:{onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
}
