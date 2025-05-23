import React from "react";
import Hero from "../Components/Hero/Hero";
import ProductCategories from "../Components/ProductCategories/ProductCategories";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <ProductCategories />
    </div>
  );
};

export default Home;
