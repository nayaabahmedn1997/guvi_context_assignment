import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, totalQuantity, totalAmount } = useCart();

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
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
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
