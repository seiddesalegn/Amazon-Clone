import React from "react";
import { img } from "./img/data"; //used this insted fullinfos
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {img.map((infos) => (
        <CategoryCard key={infos.id} data={infos} />
      ))}
    </section>
  );
}

export default Category;
