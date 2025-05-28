// import React from "react";
// import Header from "./Header";

// function Layout({ children }) {
//   return (
//     <div>
//       <Header />
//       {children}
//     </div>
//   );
// }

// export default Layout;
import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
