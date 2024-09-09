import React, { useState } from "react";
import "./Home.css";
import ExploreMenu from "../components/ExploreMenu";
import Header from "../components/Header";
import FoodDisplay from "../components/FoodDisplay"; 
import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setcategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} /> 
       <AppDownload/>
    </div>
  );
};

export default Home;
