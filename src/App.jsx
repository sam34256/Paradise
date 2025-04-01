import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./pages/ProductListing";
import ShoppingCart from "./pages/ShoppingCart";
import Header from "./components/Header";
import "./app.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Provider store={store}>
      <Router>
        <Header showSearch={window.location.pathname === "/products"} onSearch={setSearchQuery} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing searchQuery={searchQuery} />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
