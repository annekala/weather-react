import React from "react";
import ReactDOM from "react-dom/client";

import Weather from "./Weather";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
