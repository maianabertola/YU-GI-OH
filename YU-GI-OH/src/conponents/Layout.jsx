import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FormPage from "../pages/FormPage";

function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <div className="containerLogo">
            <img src="../../public/assets/Logo.png" className="logo_menu" />
          </div>
        </Link>
        <nav className="menu_header">
          <ul>
            <Link to="/all-cards">
              <li className="menu_button">COLLECTION</li>
            </Link>
            <Link to="/create-card">
              <li className="menu_button">CREATE YOUR CARD</li>
            </Link>
            <Link to="/about">
              <li className="menu_button">ABOUT YU-GI-OH</li>
            </Link>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
