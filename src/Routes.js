import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./components/Homepage";
import MyNavbar from "./components/Navbar";
import Homepage from "./components/Homepage";

const Routes = () => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80") `,
      }}
    >
      <MyNavbar />
      <Homepage />
    </div>
  );
};

export default Routes;

/*
-homepage component
    -navbar
    -some description or image/gif
-shop page component
    -shop cart icon with item count and link to shopcart page
-shopcart page component
    -items added
-navbar component 
    -links to components
*/
