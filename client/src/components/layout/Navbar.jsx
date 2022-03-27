import React from "react";
import "../layout/css/style.css";
import "../layout/css/Imagecss.css";
// @ts-ignore
import logo from "../layout/images/logo-home-png-7435.png";
// import $ from "jquery";
import {
  FaHandsHelping,
  FaHome,
  FaPaperPlane,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { GoBook } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" style={{ width: "55px" }} />
              &nbsp;
              <span className="ml-3 font-weight-bold"></span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    <FaHome />
                    &nbsp;Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/about">
                    <GoBook />
                    &nbsp;About
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#contact-section-container">
                    <FaPhoneSquareAlt />
                    &nbsp;Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <BiLogIn />
                    &nbsp;Login
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <Link to="/customer_reg">
                  <button className="btn">
                    <FaHandsHelping />
                    &ensp;Customer Registration
                  </button>
                </Link>
                &ensp;
                <Link to="/landlord_reg">
                  <button className="btn">
                    <FaPaperPlane />
                    &ensp;Landlord Registration
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
