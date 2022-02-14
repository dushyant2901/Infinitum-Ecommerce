import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./context/products_context";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <Router>
        <App />
      </Router>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
