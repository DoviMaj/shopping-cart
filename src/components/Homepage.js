import React from "react";
import { useParams } from "react-router-dom";

const App = () => {
  let id = useParams();
  return (
    <div>
      <h1>Hello from App {id}</h1>
    </div>
  );
};

export default App;
