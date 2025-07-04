import React from "react";
import { Link } from "react-router-dom";
import classes from "./Category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link
        to={`/category/${data.title.toLowerCase()}`}
        className={classes.categoryLink}
      >
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
