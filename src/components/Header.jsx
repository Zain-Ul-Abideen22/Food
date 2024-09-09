import React from "react";
import "./Header.css";

const Header = () => {
  const handleClick = () => {
    console.log("handle");
  };

  return (
    <div className="header">
      <div className="header-container">
        <h2>Order Your Favourite Food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button onClick={handleClick}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
