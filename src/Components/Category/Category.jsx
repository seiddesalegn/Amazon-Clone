import React from "react";
import { img } from "./img/data";
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

// import React from "react";
// import { img } from "./img/data";
// // import { categoryinfos } from "./CategoryFullInfos";
// import CategoryCard from "./CategoryCard";
// import classes from "./category.module.css";
// function Category() {
//   return (
//     <section className={classes.Category_container}>
//       {img.map((infos) => (
//         <CategoryCard key={infos.id} data={infos} />
//       ))}
//     </section>
//   );
// }

// export default Category;
