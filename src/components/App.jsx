import React from "react";
import Form from "./Form";

var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return (
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    );
  }
}

function App() {
  return <div className="container">{renderConditionally}</div>;
}

export default App;
