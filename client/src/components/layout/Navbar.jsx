import React from "react";
import "../layout/css/Navbarcss.css";
// @ts-ignore
import logo from "../layout/images/logo-home-png-7435.png";
import $ from "jquery";
import {
  FaCaretSquareDown,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaHospitalUser,
  FaHouseUser,
  FaInstagram,
  FaLinkedin,
  FaServicestack,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

$(document).ready(function () {
  if ($(window).width() > 991) {
    $(".navbar-light .d-menu").hover(
      function () {
        $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
      },
      function () {
        $(this)
          .find(".sm-menu")
          .first()
          .stop(true, true)
          .delay(120)
          .slideUp(100);
      }
    );
  }
});

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm  fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" style={{ width: "55px" }} />
            <span className="ml-3 font-weight-bold">Rent-House</span>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto pl-lg-4">
              <li className="nav-item px-lg-2 active">
                <a className="nav-link" href="#">
                  <FaHome />
                  &nbsp; Home
                </a>
              </li>
              <li className="nav-item px-lg-2">
                <a className="nav-link" href="#">
                  <FaServicestack />
                  &nbsp; Services
                </a>
              </li>
              <li className="nav-item px-lg-2">
                <a className="nav-link" href="#">
                  <FaUser />
                  &nbsp; About
                </a>
              </li>
              <li className="nav-item px-lg-2 dropdown d-menu">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaCaretSquareDown />
                  &nbsp; Dropdown
                  <svg
                    id="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
                <div
                  className="dropdown-menu shadow-sm sm-menu"
                  aria-labelledby="dropdown01"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item px-lg-2">
                <Link className="nav-link" to="/login">
                  {/* <span className="d-inline-block d-lg-none icon-width"></span> */}
                  <FaEnvelope />
                  &nbsp; Login
                </Link>
              </li>
            </ul>

            <ul
              className="navbar-nav ml-auto mt-3 mt-lg-0"
              style={{ margin: "auto", marginRight: "inherit"  }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/customerregistration">
                  <button type="button" className="btns">
                    {/* // 1x - 14px 
                    // 2x - 28px 
                    // 3x - 42px 
                    // 4x - 56px 
                    // 5x - 70px */}
                    <FaHospitalUser size={20} />
                    &nbsp; Customer Registration
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/landloadregistration">
                  <button type="button" className="btns">
                    <FaHouseUser size={20} />
                    &nbsp; Landlord Registration
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
