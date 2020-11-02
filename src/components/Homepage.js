import React from "react";

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
        autoPlay={true}
        muted
        loop
        poster="polina.jpg"
        id="bgvid"
      >
        <source
          src="https://ferrari-cdn.thron.com/static/BXAHGZ_cover-gamma-desk-4500_UWNB2I.mp4?xseo="
          type="video/mp4"
        ></source>
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
