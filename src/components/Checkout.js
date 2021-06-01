import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Checkout = (props) => {
  const [checkoutChart, setCheckoutCart] = useState(props.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setCheckoutCart(props.cart);
    checkoutChart.forEach((item) => {
      const total = parseFloat(item.price);
      setTotalAmount((prev) => prev + total);
    });
  }, [props.cart]);

  return (
    <div className="checkout-cart">
      <span className="close-cart" onClick={() => props.setCartClicked()}>
        x
      </span>
      <div className="cart-content">
        <div style={{ display: "flex", gap: "20px", alignItems: "baseline" }}>
          <h4>Your Cart</h4>
          <span
            style={{
              background: "gray",
              borderRadius: "30px",
              padding: "0px 7px",
              color: "white",
            }}
          >
            {props.cartLength}
          </span>
        </div>
        <div
          className="cart-items-container"
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            width: "70%",
          }}
        >
          {checkoutChart.map((item) => {
            return (
              <div
                className="cart-item"
                key={item.id + Math.floor(Math.random() * 10000)}
              >
                <p style={{ color: "black" }}>{item.name}</p>
                <p>${item.price}</p>
              </div>
            );
          })}
          <div className="cart-total">
            <p>Total (USD):</p>
            <p>${totalAmount}</p>
          </div>
        </div>
        <div className="cart-bottom-buttons">
          <Button>Checkout</Button>
          <Button onClick={() => props.emptyCart()}>Empty Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
