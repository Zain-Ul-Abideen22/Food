import React, { useState, useContext } from "react";
import "./FoodItem.css";
import { assets } from "../assets/assets";
import { StoreContext } from "../pages/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const [ItemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food_item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-container">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remov_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
