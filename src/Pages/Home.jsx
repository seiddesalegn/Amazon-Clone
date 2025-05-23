import React from "react";
import Hero from "../Components/Hero/Hero";
import ProductRow from "../components/ProductRow/ProductRow";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <ProductRow title="Best Sellers" />
      <ProductRow title="New Arrivals" />
    </div>
  );
};

export default Home;
