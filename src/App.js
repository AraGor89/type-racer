import React from "react";
import Container from "./components/Container";
import "./App.css";

const App = (props) => {
  return (
    <div className="appContainer">
      <span className="title">
        {" "}
        <span id="greenCube">mark</span> Check your typing skills
      </span>
      <Container />
    </div>
  );
};

export default App;
