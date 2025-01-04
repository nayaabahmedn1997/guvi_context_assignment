import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { increaseTheItemQuantity, reduceTheItemQuantity, removeFromCart } from "../store/slices/cartSlice";

const CartPage = () => {;
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();


  

  const totalQuantity = cart.reduce((acc, item)=>acc + item.quantity,0);
  const totalAmount = cart.reduce((acc, item)=>acc + (item.quantity * item.price),0).toFixed(2);
  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td><img  
                  className="cart-product-image"
                  src = {item.image} alt={item.title}/></td>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => dispatch(reduceTheItemQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => dispatch(increaseTheItemQuantity(item.id))}
                    >
                      +
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}



            </tbody>
          </table>
          <h3>Total Quantity: {totalQuantity}</h3>
          <h3>Total Amount: ${totalAmount}</h3>
        </div>
          
      )}
     
    </div>
  );
};

export default CartPage;
