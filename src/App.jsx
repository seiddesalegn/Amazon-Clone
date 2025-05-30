// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Home from "./Pages/Home";
// import ProductDetails from "./Pages/ProductDetails/ProductDetail";
// import CategoryPage from "./Pages/CategoryPage";
// import Footer from "./Components/Footer/Footer";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/category/:categoryName" element={<CategoryPage />} />{" "}
//         {/* new route */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Home from "./Pages/Home";
// import ProductDetails from "./Pages/ProductDetails/ProductDetail";
// import CategoryPage from "./Pages/CategoryPage";
// import Footer from "./Components/Footer/Footer";

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/category/:categoryName" element={<CategoryPage />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

// src/App.jsx

// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Home from "./Pages/Home";
// import ProductDetails from "./Pages/ProductDetails/ProductDetail";
// import CategoryPage from "./Pages/CategoryPage";
// // Import Cart component here
// import Cart from "./Pages/Cart/Cart";

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/category/:categoryName" element={<CategoryPage />} />
//         {/* Add Cart route */}
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetail";
import CategoryPage from "./Pages/CategoryPage";
import Cart from "./Pages/Cart/Cart";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
