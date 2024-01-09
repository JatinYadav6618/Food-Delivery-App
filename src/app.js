import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.js";
import Body from "./body.js";

const App = () => {
  return (
    <div className="app-container">
      {<Header />}
      {<Body />}
    </div>
  );
};
console.log(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
