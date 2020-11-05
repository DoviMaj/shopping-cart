import { React, useEffect, useState } from "react";
import cars from "../carsData";
import { Card, Button, FormControl } from "react-bootstrap";
import Checkout from "./Checkout";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartClicked, setCartClicked] = useState(false);
  const [cartLength, setCartLength] = useState(cart.length);

  function addToCart(e, car) {
    for (let i = 0; i < e.target.nextElementSibling.value; i++) {
      setCart((prevCart) => [...prevCart, car]);
    }
  }

  function emptyCart() {
    setCart([]);
    setCartClicked(0);
  }

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  return (
    <div>
      {cartClicked ? (
        <Checkout
          cartLength={cartLength}
          cart={cart}
          setCartClicked={setCartClicked}
          emptyCart={emptyCart}
        />
      ) : null}
      <div
        style={{
          WebkitFilter: cartClicked ? "blur(2px) grayscale(10%)" : null,
        }}
        className="shop-page"
      >
        <div
          onClick={() => {
            setCartClicked(!cartClicked);
          }}
          className="cart-icon"
        >
          <span>{cart.length}</span>
          <img
            alt="cart-icon"
            src="https://img.icons8.com/dotty/45/000000/shopping-cart.png"
          />
        </div>
        {cars.map((car) => {
          return (
            <Card className="car-container" key={car.id} id={car.id}>
              <Card.Img variant="top" src={car.image} />
              <Card.Body style={{ position: "relative", bottom: "80px" }}>
                <h1>{car.name}</h1>
                <Card.Text>{car.description}</Card.Text>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Button
                    className="add-to-cart"
                    onClick={(e) => addToCart(e, car)}
                  >
                    Add to cart
                  </Button>
                  <FormControl
                    min="0"
                    className="amount-input"
                    style={{ width: "55px" }}
                    type="number"
                    defaultValue="1"
                  ></FormControl>
                </div>
              </Card.Body>
              <div>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background: "white",
                  }}
                ></div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
