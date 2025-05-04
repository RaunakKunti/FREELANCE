import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
    // Header and Footer will same but Outlet    differs
  );
}

export default Layout;
