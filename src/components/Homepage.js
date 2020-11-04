import React from "react";
import video from "../homepage-video.mp4";

const Homepage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <video
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
        playsInline
        autoPlay
        muted
        loop
        poster="polina.jpg"
        id="bgvid"
      >
        <source src={video} type="video/mp4"></source>
      </video>
      <h1
        style={{
          display: "flex",
          zIndex: "2",
          color: "white",
          marginTop: "200px",
          fontFamily: "TITLE",
        }}
      >
        A LEGEND IS REBORN
      </h1>
    </div>
  );
};

export default Homepage;
