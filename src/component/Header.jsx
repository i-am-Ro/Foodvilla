import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <ul className="nav-items">
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
