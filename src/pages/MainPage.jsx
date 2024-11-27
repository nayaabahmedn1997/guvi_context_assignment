import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Shopping App</h1>
      <p>Discover amazing products and manage your cart easily.</p>
      <Link to="/products" className="btn btn-primary">
        View Products
      </Link>
    </div>
  );
};

export default MainPage;
