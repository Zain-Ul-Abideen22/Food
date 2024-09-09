import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/cart";  
import ExploreMenu from "./components/ExploreMenu";
import PlaceOrder from "./pages/PlaceOrder";
import Navbar from "./components/navbar";  
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";
import StoreContextProvider from "./pages/StoreContext";  
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <StoreContextProvider>  
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/exploremenu" element={<ExploreMenu />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/LoginPopup" element={<LoginPopup />} />

        </Routes>
      </div>
      <Footer />
    </StoreContextProvider>
  );
};

export default App;
