import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const numberOfCartItems = useSelector(state=>{
   return  state.cart.reduce((acc, item)=>acc + item.quantity,0);
  
  })

  return (
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ShoppingApp
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart <span className="badge bg-primary">{numberOfCartItems|| 0}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
