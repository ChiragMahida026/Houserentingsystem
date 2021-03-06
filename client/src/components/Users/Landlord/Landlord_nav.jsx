import React from "react";
import "../../layout/css/style.css";
import "../../layout/css/Imagecss.css";
// @ts-ignore
import logo from "../../layout/images/logo-home-png-7435.png";
// import $ from "jquery";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  BiBuildingHouse,
  BiChevronUpSquare,
  BiEdit,
  BiShow,
} from "react-icons/bi";

const Navbar = () => {
  function set() {
    localStorage.clear();
    const res = axios.get("/dashlandlord/routes/api/logout");
    if (res) {
      console.log("done logout");
      window.location.href = "/login";
    }
  }
  return (
    <>
      {/* <header className="header"> */}
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
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/dashlandlord"
                >
                  <FaHome />
                  &nbsp;Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/dashlandlord/addhouse"
                >
                  <BiChevronUpSquare />
                  &nbsp;Add House
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/dashlandlord/showhouse"
                >
                  <BiBuildingHouse />
                  &nbsp;Show House
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="showrequest"
                >
                  <BiShow />
                  &nbsp;Show Request
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/dashlandlord/editprofile"
                >
                  <BiEdit />
                  &nbsp;Edit Profile
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <button className="btn" onClick={set}>
                <FaSignOutAlt />
                &ensp;Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
      {/* </header> */}
    </>
  );
};

export default Navbar;
