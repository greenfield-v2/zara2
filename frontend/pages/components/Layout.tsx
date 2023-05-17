import React from "react";
import NavBar from "./Navbar";
import "../../styles/Layout.module.css";

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
