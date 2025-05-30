import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetail";
import CategoryPage from "./Pages/CategoryPage";
import Cart from "./Pages/Cart/Cart";
import Payment from "./Pages/Payment/Payment";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} /> {/* Cart route */}
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
