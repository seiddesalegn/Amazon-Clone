// import React from "react";
// import Layout from "../../Components/Layout/Layout";
// import Hero from "../../components/Hero/Hero";
// import Category from "../../Components/Category/Category";
// import Product from "../../Components/Product/Product";
// function Landing() {
//   return;
//   <div>
//     <Hero />
//     <Category />
//     <Product />
//   </div>;
// }

// export default Landing;

import React from "react";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";

function Landing() {
  return (
    <div>
      <Hero />
      <Category />
      <Product />
    </div>
  );
}

export default Landing;
