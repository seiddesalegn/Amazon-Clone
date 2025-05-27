import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./Pages/Home";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Product />
    </div>
  );
}

export default App;
