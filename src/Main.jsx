import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Index.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokenExpired } from "./SessionExpire.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {tokenExpired ? "SessionExpired" : <App />}
  </React.StrictMode>
);
