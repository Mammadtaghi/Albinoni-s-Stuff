import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./CommonLayout/Navbar";
import Footer from "./CommonLayout/Footer";

function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout