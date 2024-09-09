import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../pages/StoreContext";
import LoginPopup from "../components/LoginPopup";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const navigate = useNavigate();
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-pp")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}
        >
          {" "}
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="Search" />
        </div>
        <div className="navbar-basket">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className="dot"></div>
        </div>
        <button
          onClick={() => {
            navigate("/LoginPopup");
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
