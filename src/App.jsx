import React from "react";
import "./App.css";
import Header from "./components/Header";
import "bulma/css/bulma.min.css";

function App(props) {
  return (
    <div className="App">
      <Header userAddress={props.userAddress} />
      {props.children}
    </div>
  );
}

export default App;
