import React from "react";
import Container from "./components/Container";
import "./App.css";

const App = (props) => {
  return (
    <>
      <span className="title">
        {" "}
        <span id="greenCube">mark</span> Check your typing skills
      </span>
      <Container />
    </>
  );
};

export default App;
