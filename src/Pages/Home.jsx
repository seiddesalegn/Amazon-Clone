// // ProductRow.jsx
// import React from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import products from "../../data/products"; // your local products array
// import styles from "./ProductRow.module.css";

// const ProductRow = ({ category, title }) => {
//   const filteredProducts = products.filter((p) => p.category === category);

//   return (
//     <div className={styles.productRow}>
//       <h2>{title}</h2>
//       <div className={styles.productRow__cards}>
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductRow;

// import React from "react";
// import { Link } from "react-router-dom";
// import Hero from "../Components/Hero/Hero";
// import { categoryInfos } from "../Components/Category/categoryInfos";
// import styles from "./Home.module.css"; // Optional: if you want to style it

// const Home = () => {
//   return (
//     <div className={styles.homeContainer}>
//       <h1>Shop by Category</h1>
//       <div className={styles.categoriesGrid}>
//         {categoryInfos.map((category) => (
//           <Link
//             to={`/category/${category.id}`}
//             key={category.id}
//             className={styles.categoryCard}
//           >
//             <img
//               src={category.image}
//               alt={category.title}
//               className={styles.categoryImage}
//             />
//             <h3>{category.title}</h3>
//             <p>{category.description}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// src/Pages/Home.jsx
import React from "react";
import Hero from "../components/Hero/Hero"; // adjust the path if needed

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
