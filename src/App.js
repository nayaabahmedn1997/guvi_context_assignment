import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";

import CartPage from "./pages/CartPage";
import ProductPage from "./pages/Productpage";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
      <Provider store = {store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
      </Provider>
   
  );
};

export default App;
