import React from "react";

const Homepage = () => {
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url("https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80") `,
      }}
    >
      <div
        style={{
          height: "670px",
          display: "flex",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "40px",
          fontFamily: "Title-Font",
        }}
      >
        A LEGEND IS REBORN
      </div>
    </div>
  );
};

export default Homepage;
