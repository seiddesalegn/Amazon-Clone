import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { ShoppingCartProvider } from "./Pages/Context/ShoppingCartContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <ShoppingCartProvider>
//       <App />
//     </ShoppingCartProvider>
//   </BrowserRouter>
// );
