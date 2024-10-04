import React, { useState } from "react";
import "./Cart.scss";
import CartItem from "../../components/cartItem/CartItem";
import api from "../../api/axios";
import EmptyState from "../../components/empty-state/EmptyState";

const Cart = ({ cartItems, setCartItems }) => {
  const [complete, setComplete] = useState(false);

  const qtyIncrement = (product) => {
    const updatedItems = cartItems.map((item) => {
      if (item.product._id === product._id) {
        item.product.stock > item.qty && item.qty++;
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const qtyDecrement = (product) => {
    const updatedItems = cartItems.map((item) => {
      if (item.product._id === product._id) {
        item.qty > 1 && item.qty--;
      }

      return item;
    });

    setCartItems(updatedItems);
  };

  const deleteHandler = (product) => {
    setCartItems(cartItems.filter((item) => item.product._id !== product._id));
  };

  const orderHandler = () => {
    try {
      api.post("order", cartItems);
      setCartItems([]);
      setComplete(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <main className={`cart-page ${cartItems.length === 0 && "empty-state"}`}>
      {cartItems.length > 0 ? (
        <>
          <h4>
            Your cart:{" "}
            {cartItems.length > 1
              ? cartItems.length + " Items"
              : cartItems.length + " Item"}
          </h4>
          <div className="cart-wrapper">
            <div className="cart-items">
              {cartItems.map((cartItem) => (
                <CartItem
                  key={cartItem.product._id}
                  {...cartItem}
                  qtyIncrement={qtyIncrement}
                  qtyDecrement={qtyDecrement}
                  deleteHandler={deleteHandler}
                />
              ))}
            </div>
            <div className="order-summary">
              <h5 className="title">Order summary</h5>
              <hr />
              <p>
                <span>Subtotal:</span>
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}(Units)
              </p>
              <p>
                <span>Est. total:</span> $
                {Number(
                  cartItems.reduce(
                    (acc, item) => acc + item.product.price * item.qty,
                    0
                  )
                ).toFixed(2)}
              </p>
              <hr />
              <button className="order-cta" onClick={orderHandler}>
                Place order
              </button>
            </div>
          </div>
        </>
      ) : complete ? (
        <EmptyState
          image="/images/complete.svg"
          title="Order completed!"
          excerpt="Your order has been placed succesfully."
        />
      ) : (
        <EmptyState
          image="/images/cart.svg"
          title="Your cart is empty"
          excerpt="Looks like you have not added anything to your cart."
        />
      )}
    </main>
  );
};
export default Cart;
