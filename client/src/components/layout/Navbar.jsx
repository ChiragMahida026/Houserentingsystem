import React from "react";
import "../layout/css/Navbarcss.css";
import $ from "jquery";

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
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="ml-3 font-weight-bold">BRAND</span>
          </a>
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
                  <span className="d-inline-block d-lg-none icon-width">
                    <i className="fa fa-home"></i>
                  </span>
                  Home
                </a>
              </li>
              <li className="nav-item px-lg-2">
                <a className="nav-link" href="#">
                  <span className="d-inline-block d-lg-none icon-width">
                    <i className="fa fa-spa"></i>
                  </span>
                  Services
                </a>
              </li>
              <li className="nav-item px-lg-2">
                <a className="nav-link" href="#">
                  <span className="d-inline-block d-lg-none icon-width">
                    <i className="fa fa-user"></i>
                  </span>
                  About
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
                  <span className="d-inline-block d-lg-none icon-width">
                    <i className="fa fa-caret-square-down"></i>
                  </span>
                  Dropdown
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
                <a className="nav-link" href="#">
                  <span className="d-inline-block d-lg-none icon-width">
                    <i className="far fa-envelope"></i>
                  </span>
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-twitter"></i>
                  <span className="d-lg-none ml-3">Twitter</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-facebook"></i>
                  <span className="d-lg-none ml-3">Facebook</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-instagram"></i>
                  <span className="d-lg-none ml-3">Instagram</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-linkedin"></i>
                  <span className="d-lg-none ml-3">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
