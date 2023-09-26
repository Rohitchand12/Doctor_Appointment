import React from "react";
import Footer from './Footer'
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const RootLayout = () => {
  return (
    <div className="h-screen">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default RootLayout;
