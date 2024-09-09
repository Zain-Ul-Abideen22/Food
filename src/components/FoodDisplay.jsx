import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../pages/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  
  const { food_list } = useContext(StoreContext);

 
  if (!food_list) {
    return <p>Loading...</p>;
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.length > 0 ? (
          
          food_list.map((item) => {
           
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={item.id} 
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null; 
          })
        ) : (
          <p>No dishes available</p> 
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
