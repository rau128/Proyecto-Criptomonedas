import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CriptoContextProvider from "./context/CriptoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CriptoContextProvider>
      {" "}
      <App />
    </CriptoContextProvider>
  </React.StrictMode>
);
