import React, { useEffect } from "react";
import Header from "./Header";
import AOS from "aos";

const Layout: React.FC<{}> = ({ children }) => {
  useEffect(() => AOS.init({ duration: 600, easing: "ease-in-out" }), []);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
