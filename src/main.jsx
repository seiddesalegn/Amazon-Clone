import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // URL-based routing yastekimenal
import { ShoppingCartProvider } from "./Pages/Context/ShoppingCartContext.jsx"; //shopping cart state yesetenal

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
