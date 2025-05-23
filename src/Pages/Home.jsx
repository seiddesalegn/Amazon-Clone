import React from "react";
import Hero from "../Components/Hero/Hero";
import ProductRow from "../Components/ProductRow/ProductRow";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />

      {/* Product Rows from API */}
      <ProductRow
        title="Best Sellers in Electronics"
        fetchUrl="https://fakestoreapi.com/products/category/electronics"
      />
      <ProductRow
        title="Top Picks in Men's Clothing"
        fetchUrl="https://fakestoreapi.com/products/category/men's clothing"
      />
      <ProductRow
        title="Popular in Women's Clothing"
        fetchUrl="https://fakestoreapi.com/products/category/women's clothing"
      />
      <ProductRow
        title="Exciting Deals in Jewelry"
        fetchUrl="https://fakestoreapi.com/products/category/jewelery"
      />
    </div>
  );
};

export default Home;
