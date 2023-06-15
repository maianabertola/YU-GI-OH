import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FormPage from "../pages/FormPage";
import "../App.css";
import logo from "../../public/assets/Logo.png";

function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <div className="containerLogo">
            <img src={logo} className="logo_menu" />
          </div>
        </Link>
        <nav className="menu_header">
          <ul>
            <Link to="/all-cards">
              <li className="link">COLLECTION</li>
            </Link>

            <Link to="/create-card">
              <li className="link">CREATE YOUR CARD</li>
            </Link>
            <Link to="/about">
              <li className="link">ABOUT YU-GI-OH</li>
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
