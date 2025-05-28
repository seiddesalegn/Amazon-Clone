import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetail";
import CategoryPage from "./Pages/CategoryPage"; // import new page
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />{" "}
        {/* new route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
